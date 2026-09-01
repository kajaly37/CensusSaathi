import React, { useState } from 'react';
import { 
  ArrowRight, 
  Lock, 
  Mail, 
  User as UserIcon, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../i18n';
import type { NavTab } from './Navbar';

interface LoginScreenProps {
  onNavigate: (tab: NavTab) => void;
  onLoginSuccess?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate, onLoginSuccess }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { login, register, authError, clearAuthError } = useAuth();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMessage(null);
    clearAuthError();

    if (isRegisterMode && !name.trim()) {
      setLocalError(t.auth?.nameRequired || 'Name is required');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setLocalError(t.auth?.validEmailRequired || 'A valid email is required');
      return;
    }

    if (!password || password.length < 6) {
      setLocalError(t.auth?.passwordMinLength || 'Password must be at least 6 characters');
      return;
    }

    setIsSubmitting(true);

    try {
      if (isRegisterMode) {
        await register(name.trim(), email.trim(), password);
        setSuccessMessage(t.auth?.accountCreated || 'Account successfully created! Redirecting...');
      } else {
        await login(email.trim(), password);
        setSuccessMessage(t.auth?.welcomeBack || 'Welcome back! Redirecting...');
      }

      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          onNavigate('home');
        }
      }, 600);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Authentication failed';
      setLocalError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeError = localError || authError;

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-stitch-mesh py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
        
        {/* Brand Logo & Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2.5">
            <img 
              src="/logo.png" 
              alt="CensusSaathi AI Logo" 
              className="w-10 h-10 object-contain rounded-xl" 
            />
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              {t.common.appName}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-2">
            {isRegisterMode 
              ? (t.auth?.createAccountTitle || 'Create your account') 
              : (t.auth?.welcomeBack || 'Welcome back')}
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
            {isRegisterMode
              ? (t.auth?.createAccountSubtitle || 'Sign up to personalize your Census guidance and schedules.')
              : (t.auth?.loginSubtitle || 'Enter your credentials to access your CensusSaathi account.')}
          </p>
        </div>

        {/* Error / Success Banners */}
        {activeError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-red-800 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <span>{activeError}</span>
          </div>
        )}

        {successMessage && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-emerald-800 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name field (Register only) */}
          {isRegisterMode && (
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                {t.auth?.nameLabel || 'Full Name'}
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 transition-all"
                />
              </div>
            </div>
          )}

          {/* Email field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              {t.auth?.emailLabel || 'Email Address'}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 transition-all"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              {t.auth?.passwordLabel || 'Password'}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>
                {isSubmitting 
                  ? (t.common.loading || 'Processing...')
                  : isRegisterMode 
                  ? (t.auth?.createAccountBtn || 'Create Account') 
                  : (t.auth?.loginBtn || 'Login')}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>

        {/* Mode Switch (Login / Create Account) */}
        <div className="pt-3 text-center border-t border-slate-100 space-y-3">
          <div className="text-xs text-slate-500">
            {isRegisterMode ? (
              <span>
                {t.auth?.alreadyHaveAccount || 'Already have an account?'}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsRegisterMode(false);
                    setLocalError(null);
                    clearAuthError();
                  }}
                  className="font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
                >
                  {t.auth?.loginLink || 'Login here'}
                </button>
              </span>
            ) : (
              <span>
                {t.auth?.dontHaveAccount || "Don't have an account?"}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsRegisterMode(true);
                    setLocalError(null);
                    clearAuthError();
                  }}
                  className="font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
                >
                  {t.auth?.createAccountLink || 'Create Account'}
                </button>
              </span>
            )}
          </div>

          {/* Continue as Guest Button */}
          <div>
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              {t.auth?.continueAsGuest || 'Continue as Guest'}
            </button>
          </div>
        </div>

        {/* Privacy & Trust Notice */}
        <div className="pt-2">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-start gap-2 text-[11px] text-slate-500 leading-normal">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span>
              {t.auth?.authPrivacyNotice || 'CensusSaathi accounts are independent citizen accounts. Logging in is optional and does not submit official responses to the Government of India.'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
