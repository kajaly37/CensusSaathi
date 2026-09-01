import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import type { NavTab } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { HowItWorksScreen } from './components/HowItWorksScreen';
import { ScheduleScreen } from './components/ScheduleScreen';
import { PrivacySecurityScreen } from './components/PrivacySecurityScreen';
import { SelfEnumerationScreen } from './components/SelfEnumerationScreen';
import { DataExplorerScreen } from './components/DataExplorerScreen';
import { AskAiScreen } from './components/AskAiScreen';
import { LoginScreen } from './components/LoginScreen';
import { AdminDashboardScreen } from './components/AdminDashboardScreen';
import { LanguageSelectionModal } from './components/LanguageSelectionModal';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './i18n';
import { AuthProvider } from './context/AuthContext';

const VALID_TABS: NavTab[] = [
  'home',
  'how-it-works',
  'schedule',
  'self-enumeration',
  'data-explorer',
  'ask-ai',
  'login',
  'admin',
  'privacy'
];

function parseHashRoute(): NavTab | null {
  if (typeof window === 'undefined') return null;
  const raw = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
  if (VALID_TABS.includes(raw as NavTab)) {
    return raw as NavTab;
  }
  return null;
}

function AppContent() {
  const [hasEntered, setHasEntered] = useState<boolean>(() => {
    try {
      const hash = parseHashRoute();
      if (hash && hash !== 'login') {
        return true;
      }
      return Boolean(localStorage.getItem('cs_auth_token') || sessionStorage.getItem('cs_guest_entered'));
    } catch {
      return false;
    }
  });

  const [activeTab, setActiveTab] = useState<NavTab>(() => {
    try {
      const hash = parseHashRoute();
      if (hash) {
        return hash;
      }
      const entered = Boolean(localStorage.getItem('cs_auth_token') || sessionStorage.getItem('cs_guest_entered'));
      return entered ? 'home' : 'login';
    } catch {
      return 'login';
    }
  });

  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);
  const { languageOption, setLanguage } = useLanguage();

  // Synchronize hash routing with browser history (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const hashTab = parseHashRoute();
      if (hashTab) {
        setActiveTab(hashTab);
        if (hashTab !== 'login') {
          setHasEntered(true);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Automatically scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleEnterWebsite = () => {
    try {
      sessionStorage.setItem('cs_guest_entered', 'true');
    } catch {
      // ignore
    }
    setHasEntered(true);
    setActiveTab('home');
    window.location.hash = 'home';
  };

  const handleNavigate = useCallback((tab: NavTab) => {
    if (tab === 'login') {
      try {
        sessionStorage.removeItem('cs_guest_entered');
      } catch {
        // ignore
      }
      setHasEntered(false);
    } else {
      setHasEntered(true);
    }
    setActiveTab(tab);
    window.location.hash = tab;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        currentLanguage={languageOption.name}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        hasEntered={hasEntered}
      />

      {/* Main Screen Content View */}
      <main className="flex-grow">
        {activeTab === 'login' && (
          <LoginScreen 
            onNavigate={(tab) => {
              if (tab === 'home') {
                handleEnterWebsite();
              } else {
                handleNavigate(tab);
              }
            }} 
            onLoginSuccess={() => handleEnterWebsite()}
          />
        )}

        {activeTab === 'home' && (
          <HomeScreen onNavigate={handleNavigate} />
        )}

        {activeTab === 'how-it-works' && (
          <HowItWorksScreen onNavigate={handleNavigate} />
        )}

        {activeTab === 'schedule' && (
          <ScheduleScreen onNavigate={handleNavigate} />
        )}

        {activeTab === 'self-enumeration' && (
          <SelfEnumerationScreen onNavigate={handleNavigate} />
        )}

        {activeTab === 'data-explorer' && (
          <DataExplorerScreen />
        )}

        {activeTab === 'privacy' && (
          <PrivacySecurityScreen />
        )}

        {activeTab === 'ask-ai' && (
          <AskAiScreen 
            onNavigate={handleNavigate}
            currentLanguage={languageOption.name}
            currentLanguageCode={languageOption.upperCode}
            onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
          />
        )}

        {activeTab === 'admin' && (
          <AdminDashboardScreen onNavigate={handleNavigate} />
        )}
      </main>

      {/* Language Selection Modal */}
      <LanguageSelectionModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        selectedLanguage={languageOption.name}
        onSelectLanguage={(lang) => setLanguage(lang.code)}
      />

      {/* Unified Global Footer */}
      <Footer 
        onNavigatePrivacy={() => handleNavigate('privacy')} 
        onNavigateHowItWorks={() => handleNavigate('how-it-works')}
      />

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
