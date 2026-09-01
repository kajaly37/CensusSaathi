import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Layers, 
  LogOut, 
  AlertCircle, 
  ExternalLink,
  Loader2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../i18n';
import { OFFICIAL_SOURCES } from '../data/sources';
import { CENSUS_PHASES } from '../data/censusData';
import type { NavTab } from './Navbar';

interface AdminOverviewData {
  totalUsers: number;
  totalAdmins: number;
  totalCitizens: number;
  verifiedSourcesCount: number;
  monitoredStatesCount: number;
  systemStatus: string;
  lastGeneratedAt: string;
}

interface AdminUserRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

interface AdminDashboardScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({ onNavigate }) => {
  const { user, token, isAdmin, logout } = useAuth();
  const { t } = useLanguage();

  const [activeAdminTab, setActiveAdminTab] = useState<'overview' | 'census-info' | 'sources' | 'users'>('overview');
  const [overviewData, setOverviewData] = useState<AdminOverviewData | null>(null);
  const [usersList, setUsersList] = useState<AdminUserRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAdminData() {
      if (!token || !isAdmin) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setErrorMessage(null);

        // Fetch Overview
        const overviewRes = await fetch('/api/admin/overview', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!overviewRes.ok) {
          throw new Error('Failed to load admin overview from server');
        }
        const overviewJson = await overviewRes.json();
        setOverviewData(overviewJson);

        // Fetch Users List
        const usersRes = await fetch('/api/admin/users', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (usersRes.ok) {
          const usersJson = await usersRes.json();
          setUsersList(usersJson.users || []);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Failed to fetch admin data';
        setErrorMessage(msg);
      } finally {
        setLoading(false);
      }
    }

    fetchAdminData();
  }, [token, isAdmin]);

  // Handle unauthorized view
  if (!isAdmin) {
    return (
      <div className="w-full bg-stitch-mesh py-16 px-4 flex items-center justify-center min-h-[60vh]">
        <div className="bg-white border border-red-200 rounded-3xl p-8 max-w-md w-full text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {t.auth?.unauthorizedTitle || 'Administrator Access Required'}
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            {t.auth?.unauthorizedDesc || 'This portal is restricted to authorized CensusSaathi administrators. Please log in with admin credentials.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('login')}
              className="px-6 py-2.5 bg-black hover:bg-slate-800 text-white text-xs font-semibold rounded-xl cursor-pointer"
            >
              {t.auth?.loginBtn || 'Go to Login'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full bg-stitch-mesh py-20 px-4 flex items-center justify-center min-h-[50vh]">
        <div className="flex items-center gap-2.5 text-xs text-slate-500 font-semibold bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
          <Loader2 className="w-4 h-4 animate-spin text-orange-600" />
          <span>{t.common.loading || 'Loading admin panel...'}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-stitch-mesh py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {t.auth?.adminDashboard || 'CensusSaathi Admin Dashboard'}
                </h1>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full border border-orange-200">
                  {user?.role}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Logged in as <span className="font-semibold text-slate-700">{user?.email}</span> ({user?.name})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={async () => {
                await logout();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t.auth?.logout || 'Logout'}</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: Layers },
            { id: 'census-info', label: 'Census Knowledge Layer', icon: BookOpen },
            { id: 'sources', label: 'Verified Sources', icon: ShieldCheck },
            { id: 'users', label: 'Citizen Registrations', icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeAdminTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveAdminTab(tab.id as 'overview' | 'census-info' | 'sources' | 'users')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs text-red-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Tab 1: Overview */}
        {activeAdminTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Registered Accounts</div>
                <div className="text-3xl font-extrabold text-slate-900">{overviewData?.totalUsers ?? '...'}</div>
                <div className="text-[11px] text-slate-500">{overviewData?.totalCitizens ?? 0} Citizens • {overviewData?.totalAdmins ?? 0} Admins</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Verified Statutory Sources</div>
                <div className="text-3xl font-extrabold text-emerald-700">{overviewData?.verifiedSourcesCount ?? 5}</div>
                <div className="text-[11px] text-slate-500">The Census Act, 1948 & ORGI Archives</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Monitored States & UTs</div>
                <div className="text-3xl font-extrabold text-orange-600">{overviewData?.monitoredStatesCount ?? 36}</div>
                <div className="text-[11px] text-slate-500">Uniform Decennial Framework</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Platform Integrity</div>
                <div className="text-sm font-bold text-slate-900 pt-1">Zero Fake Live Data</div>
                <div className="text-[11px] text-emerald-600 font-medium">Strict Verification Boundary</div>
              </div>

            </div>

            {/* Platform Trust & Policy Panel */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>Admin Operating Guidelines & Trust Boundaries</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                CensusSaathi is an independent citizen educational platform. Administrators must not enter or simulate live Census numbers (such as percentage completions or active enumerator counts). All published dates remain marked as <em>Subject to Official Gazette Notification</em> until issued by the Office of the Registrar General & Census Commissioner, India.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Census Information Management */}
        {activeAdminTab === 'census-info' && (
          <div className="space-y-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
              <div>
                <h3 className="font-bold text-base text-slate-900">Decennial Census Framework</h3>
                <p className="text-xs text-slate-500">Overview of statutory phases configured in the knowledge layer</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CENSUS_PHASES.map((phase) => (
                  <div key={phase.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                        Phase {phase.id}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {phase.timelineEstimate}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">{phase.name}</h4>
                    <p className="text-xs text-slate-600">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Sources & Reference Management */}
        {activeAdminTab === 'sources' && (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">Statutory Sources & Attribution Registry</h3>
              <p className="text-xs text-slate-500">Verified official sources cited across CensusSaathi</p>
            </div>

            <div className="divide-y divide-slate-100">
              {Object.entries(OFFICIAL_SOURCES).map(([key, src]) => (
                <div key={key} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900">{src.name}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">{key}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{src.authority}</div>
                  </div>

                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 hover:underline"
                    >
                      <span>{src.shortName}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">Statutory Document</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Basic User Management */}
        {activeAdminTab === 'users' && (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900">Citizen Accounts Registry</h3>
                <p className="text-xs text-slate-500">Verified accounts registered in the database (passwords hashed with scrypt)</p>
              </div>
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                {usersList.length} Accounts
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Role</th>
                    <th className="py-2.5 px-3">Registered At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {usersList.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{u.name}</td>
                      <td className="py-2.5 px-3 text-slate-600 font-mono text-[11px]">{u.email}</td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          u.role === 'ADMIN' ? 'bg-orange-100 text-orange-800' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-400 text-[11px]">
                        {new Date(u.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
