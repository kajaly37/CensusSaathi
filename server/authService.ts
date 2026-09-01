import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export type UserRole = 'USER' | 'ADMIN';

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  salt: string;
  passwordHash: string;
  role: UserRole;
  createdAt: string;
  lastLoginAt?: string;
}

export interface SanitizedUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface SessionToken {
  token: string;
  userId: string;
  role: UserRole;
  expiresAt: number;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// In-memory session store (token -> SessionToken)
const SESSIONS: Map<string, SessionToken> = new Map();

/**
 * Hash password securely with unique cryptographic salt using standard scrypt
 */
export function hashPassword(password: string, salt?: string): { salt: string; hash: string } {
  const finalSalt = salt || crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.scryptSync(password, finalSalt, 64);
  return {
    salt: finalSalt,
    hash: derivedKey.toString('hex')
  };
}

/**
 * Verify plaintext password against stored salt and hash
 */
export function verifyPassword(password: string, salt: string, expectedHash: string): boolean {
  const { hash } = hashPassword(password, salt);
  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(expectedHash, 'hex'));
}

/**
 * Load users from disk or seed with default Admin
 */
function loadUsers(): StoredUser[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(USERS_FILE)) {
      const data = fs.readFileSync(USERS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn('Could not read users file, initializing new store:', err);
  }

  // Seed with default administrator account
  // Password: Admin@Census2027
  const adminHashed = hashPassword('Admin@Census2027');
  const defaultAdmin: StoredUser = {
    id: 'admin-seed-001',
    name: 'System Administrator',
    email: 'admin@censussaathi.in',
    salt: adminHashed.salt,
    passwordHash: adminHashed.hash,
    role: 'ADMIN',
    createdAt: new Date().toISOString()
  };

  const initialUsers: StoredUser[] = [defaultAdmin];
  saveUsers(initialUsers);
  return initialUsers;
}

/**
 * Save users to disk
 */
function saveUsers(users: StoredUser[]): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write users file:', err);
  }
}

/**
 * Sanitize user object for client consumption (never return salt or password hash)
 */
export function sanitizeUser(user: StoredUser): SanitizedUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
  };
}

/**
 * Register a new citizen user (Role is ALWAYS forced to USER)
 */
export function registerCitizen(name: string, email: string, password: string): { user: SanitizedUser; token: string } {
  const cleanName = (name || '').trim();
  const cleanEmail = (email || '').trim().toLowerCase();

  if (!cleanName) {
    throw new Error('Name is required');
  }
  if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
    throw new Error('Valid email address is required');
  }
  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  const users = loadUsers();
  const exists = users.some(u => u.email.toLowerCase() === cleanEmail);
  if (exists) {
    throw new Error('An account with this email already exists');
  }

  const { salt, hash } = hashPassword(password);
  const newUser: StoredUser = {
    id: 'usr_' + crypto.randomUUID().slice(0, 8),
    name: cleanName,
    email: cleanEmail,
    salt,
    passwordHash: hash,
    role: 'USER', // STRICT: Users can NEVER be created as ADMIN through public registration
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  // Generate session token
  const token = createSession(newUser.id, newUser.role);
  return {
    user: sanitizeUser(newUser),
    token
  };
}

/**
 * Authenticate user or admin
 */
export function loginUser(email: string, password: string): { user: SanitizedUser; token: string } {
  const cleanEmail = (email || '').trim().toLowerCase();
  if (!cleanEmail || !password) {
    throw new Error('Email and password are required');
  }

  const users = loadUsers();
  const user = users.find(u => u.email.toLowerCase() === cleanEmail);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isValid = verifyPassword(password, user.salt, user.passwordHash);
  if (!isValid) {
    throw new Error('Invalid email or password');
  }

  // Update last login
  user.lastLoginAt = new Date().toISOString();
  saveUsers(users);

  const token = createSession(user.id, user.role);
  return {
    user: sanitizeUser(user),
    token
  };
}

/**
 * Create a secure session token
 */
export function createSession(userId: string, role: UserRole): string {
  const token = 'csa_' + crypto.randomBytes(32).toString('hex');
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days

  SESSIONS.set(token, {
    token,
    userId,
    role,
    expiresAt
  });

  return token;
}

/**
 * Verify session token and retrieve current user
 */
export function verifySession(token: string): SanitizedUser | null {
  if (!token) return null;

  const session = SESSIONS.get(token);
  if (!session) return null;

  if (Date.now() > session.expiresAt) {
    SESSIONS.delete(token);
    return null;
  }

  const users = loadUsers();
  const user = users.find(u => u.id === session.userId);
  if (!user) {
    SESSIONS.delete(token);
    return null;
  }

  return sanitizeUser(user);
}

/**
 * Invalidate session token (Logout)
 */
export function logoutSession(token: string): boolean {
  if (!token) return false;
  return SESSIONS.delete(token);
}

/**
 * Get all users for admin dashboard (passwords excluded)
 */
export function getAllUsersForAdmin(adminToken: string): SanitizedUser[] {
  const currentUser = verifySession(adminToken);
  if (!currentUser || currentUser.role !== 'ADMIN') {
    throw new Error('Unauthorized: Administrator privileges required');
  }

  const users = loadUsers();
  return users.map(u => sanitizeUser(u));
}

/**
 * Get overview stats for admin dashboard
 */
export function getAdminOverview(adminToken: string): {
  totalUsers: number;
  totalAdmins: number;
  totalCitizens: number;
  verifiedSourcesCount: number;
  monitoredStatesCount: number;
  systemStatus: string;
  lastGeneratedAt: string;
} {
  const currentUser = verifySession(adminToken);
  if (!currentUser || currentUser.role !== 'ADMIN') {
    throw new Error('Unauthorized: Administrator privileges required');
  }

  const users = loadUsers();
  const admins = users.filter(u => u.role === 'ADMIN').length;
  const citizens = users.filter(u => u.role === 'USER').length;

  return {
    totalUsers: users.length,
    totalAdmins: admins,
    totalCitizens: citizens,
    verifiedSourcesCount: 5,
    monitoredStatesCount: 36,
    systemStatus: 'Operational (Grounded & Independent)',
    lastGeneratedAt: new Date().toISOString()
  };
}
