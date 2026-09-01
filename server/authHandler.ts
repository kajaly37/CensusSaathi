import type { IncomingMessage, ServerResponse } from 'http';
import { 
  registerCitizen, 
  loginUser, 
  verifySession, 
  logoutSession, 
  getAdminOverview, 
  getAllUsersForAdmin 
} from './authService.ts';

function extractToken(req: IncomingMessage): string {
  const authHeader = req.headers['authorization'] || '';
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }
  return '';
}

function parseJsonBody(req: IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

/**
 * Handle /api/auth requests
 */
export async function handleAuthApi(req: IncomingMessage, res: ServerResponse): Promise<void> {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const url = req.url || '';

  try {
    // 1. POST /api/auth/register
    if (url.includes('/register') && req.method === 'POST') {
      const { name, email, password } = await parseJsonBody(req);
      const result = registerCitizen(String(name || ''), String(email || ''), String(password || ''));
      res.statusCode = 201;
      res.end(JSON.stringify(result));
      return;
    }

    // 2. POST /api/auth/login
    if (url.includes('/login') && req.method === 'POST') {
      const { email, password } = await parseJsonBody(req);
      const result = loginUser(String(email || ''), String(password || ''));
      res.statusCode = 200;
      res.end(JSON.stringify(result));
      return;
    }

    // 3. GET /api/auth/me
    if (url.includes('/me') && req.method === 'GET') {
      const token = extractToken(req);
      const user = verifySession(token);
      if (!user) {
        res.statusCode = 401;
        res.end(JSON.stringify({ error: 'Unauthenticated' }));
        return;
      }
      res.statusCode = 200;
      res.end(JSON.stringify({ user }));
      return;
    }

    // 4. POST /api/auth/logout
    if (url.includes('/logout') && req.method === 'POST') {
      const token = extractToken(req);
      logoutSession(token);
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true }));
      return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Auth endpoint not found' }));
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Authentication processing failed';
    const statusCode = message.includes('already exists') ? 409 : 400;
    res.statusCode = statusCode;
    res.end(JSON.stringify({ error: message }));
  }
}

/**
 * Handle /api/admin requests
 */
export async function handleAdminApi(req: IncomingMessage, res: ServerResponse): Promise<void> {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const token = extractToken(req);
  if (!token) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'Authentication required' }));
    return;
  }

  const currentUser = verifySession(token);
  if (!currentUser) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'Session expired or invalid' }));
    return;
  }

  if (currentUser.role !== 'ADMIN') {
    res.statusCode = 403;
    res.end(JSON.stringify({ error: 'Forbidden: Administrator privileges required' }));
    return;
  }

  const url = req.url || '';

  try {
    // 1. GET /api/admin/overview
    if (url.includes('/overview') && req.method === 'GET') {
      const stats = getAdminOverview(token);
      res.statusCode = 200;
      res.end(JSON.stringify(stats));
      return;
    }

    // 2. GET /api/admin/users
    if (url.includes('/users') && req.method === 'GET') {
      const users = getAllUsersForAdmin(token);
      res.statusCode = 200;
      res.end(JSON.stringify({ users }));
      return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Admin endpoint not found' }));
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Admin action failed';
    res.statusCode = 500;
    res.end(JSON.stringify({ error: message }));
  }
}
