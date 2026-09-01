import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  ChevronDown, 
  Sparkles, 
  User, 
  Scan, 
  Menu, 
  X, 
  LogOut, 
  ShieldCheck,
  LogIn
} from 'lucide-react';
import { useLanguage } from '../i18n';
import { useAuth } from '../context/AuthContext';

export type NavTab = 'home' | 'how-it-works' | 'schedule' | 'self-enumeration' | 'data-explorer' | 'ask-ai' | 'login' | 'admin' | 'privacy';

interface NavbarProps {
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  currentLanguage: string;
  onOpenLanguageModal: () => void;
  hasEntered?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  currentLanguage,
  onOpenLanguageModal,
  hasEntered = true,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const { t } = useLanguage();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  // Close user dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'schedule', label: t.nav.schedule },
    { id: 'self-enumeration', label: t.nav.selfEnumeration },
    { id: 'data-explorer', label: t.nav.dataExplorer },
  ];

  // If on initial login screen before entering website, show minimal header with logo and language switcher
  if (!hasEntered && activeTab === 'login') {
    return (
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="CensusSaathi AI Logo" 
                className="w-8 h-8 object-contain rounded-lg shadow-xs" 
              />
              <span className="font-bold text-base tracking-tight text-slate-900">
                {t.common.appName}
              </span>
            </div>

            {/* Language Selector Trigger on Login Screen */}
            <button
              onClick={onOpenLanguageModal}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-600" />
              <span>{currentLanguage}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand Name */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/logo.png" 
              alt="CensusSaathi AI Logo" 
              className="w-8 h-8 object-contain rounded-lg shadow-xs group-hover:scale-105 transition-transform" 
            />
            <span className="font-bold text-base tracking-tight text-slate-900">
              {t.common.appName}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Selector Trigger */}
            <button
              onClick={onOpenLanguageModal}
              className="flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-600" />
              <span>{currentLanguage}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {/* Ask AI Black Button */}
            <button
              onClick={() => onNavigate('ask-ai')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm cursor-pointer ${
                activeTab === 'ask-ai'
                  ? 'bg-slate-900 text-white ring-2 ring-slate-900 ring-offset-1'
                  : 'bg-black hover:bg-slate-800 text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.nav.askAi}</span>
            </button>

            {/* User Account / Profile Menu */}
            <div className="relative" ref={userMenuRef}>
              {isAuthenticated && user ? (
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 pl-2 pr-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors shadow-xs cursor-pointer border border-slate-200"
                  title="Account menu"
                  aria-label="User account"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold uppercase">
                    {user.name ? user.name[0] : 'U'}
                  </div>
                  <span className="text-xs font-semibold max-w-[100px] truncate">
                    {user.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-500" />
                </button>
              ) : (
                <button 
                  onClick={() => onNavigate('login')}
                  className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
                  title="Login / Account"
                  aria-label="Login"
                >
                  <User className="w-4 h-4" />
                </button>
              )}

              {/* User Dropdown Menu */}
              {userMenuOpen && isAuthenticated && user && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 py-2 divide-y divide-slate-100 animate-fadeIn">
                  <div className="px-4 py-2.5 space-y-0.5">
                    <div className="text-xs font-bold text-slate-900 truncate">{user.name}</div>
                    <div className="text-[11px] text-slate-500 truncate font-mono">{user.email}</div>
                    <div className="pt-1">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200">
                        {user.role}
                      </span>
                    </div>
                  </div>

                  <div className="py-1">
                    {isAdmin && (
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onNavigate('admin');
                        }}
                        className="w-full px-4 py-2 text-left text-xs font-semibold text-orange-700 hover:bg-orange-50 flex items-center gap-2 cursor-pointer"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                        <span>Admin Dashboard</span>
                      </button>
                    )}
                  </div>

                  <div className="py-1">
                    <button
                      onClick={async () => {
                        setUserMenuOpen(false);
                        await logout();
                        try {
                          sessionStorage.removeItem('cs_guest_entered');
                        } catch {
                          // ignore
                        }
                        onNavigate('login');
                      }}
                      className="w-full px-4 py-2 text-left text-xs font-medium text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>{t.auth?.logout || 'Logout'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Viewfinder / Scan Action */}
            <button 
              className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
              title="Scan or View Mode"
              aria-label="Scan or View Mode"
            >
              <Scan className="w-4 h-4" />
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onNavigate('ask-ai')}
              className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-full text-xs font-medium cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{t.nav.askAi}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-slate-100 text-slate-900 font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            {/* Account in mobile */}
            {isAuthenticated && user ? (
              <div className="p-3 bg-slate-50 rounded-xl space-y-2">
                <div className="text-xs font-bold text-slate-900">
                  Welcome, {user.name}
                </div>
                <div className="flex items-center gap-2">
                  {isAdmin && (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigate('admin');
                      }}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-lg text-xs font-bold"
                    >
                      Admin
                    </button>
                  )}
                  <button
                    onClick={async () => {
                      setMobileMenuOpen(false);
                      await logout();
                      try {
                        sessionStorage.removeItem('cs_guest_entered');
                      } catch {
                        // ignore
                      }
                      onNavigate('login');
                    }}
                    className="px-3 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('login');
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{t.auth?.loginBtn || 'Login'}</span>
              </button>
            )}

            {/* Language Trigger in Mobile */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLanguageModal();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500" />
                <span>Language: {currentLanguage}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
