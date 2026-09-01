import React, { useState } from 'react';
import { 
  Smartphone, 
  Sparkles, 
  FileCheck2, 
  Lock, 
  QrCode, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Droplets, 
  Wifi, 
  ShieldCheck, 
  RefreshCw,
  Copy,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRANSLATIONS } from '../data/translations';
import type { LanguageCode } from '../data/translations';

interface SelfEnumerationSimulatorProps {
  currentLang: LanguageCode;
  isOpen: boolean;
  onClose: () => void;
  onOpenChecklist: () => void;
}

export const SelfEnumerationSimulator: React.FC<SelfEnumerationSimulatorProps> = ({
  currentLang,
  isOpen,
  onClose,
  onOpenChecklist,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copiedToken, setCopiedToken] = useState(false);

  // Mock Form State (Strictly client-side demo only)
  const [formData, setFormData] = useState({
    headName: "Citizen Demo",
    socialCategory: "General / Other",
    ownership: "Owned",
    dwellingRooms: "3",
    waterSource: "Treated Tap Water (Piped supply)",
    waterDistance: "Within premises",
    lightingSource: "Electricity",
    toiletAccess: "Flush latrine connected to piped sewer system",
    cookingFuel: "LPG / Piped Natural Gas (PNG)",
    hasInternet: "Yes (Broadband + Mobile 5G)",
    hasTv: "Yes",
    hasVehicle: "Two-Wheeler + Car",
    memberCount: "4",
  });

  const t = TRANSLATIONS[currentLang];

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Completed sandbox
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const resetSandbox = () => {
    setCurrentStep(1);
    setCopiedToken(false);
  };

  const copyDemoToken = () => {
    navigator.clipboard.writeText("CENSUS-2027-DEMO-9842X-TOKEN");
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2500);
  };

  return (
    <div>
      {/* Homepage Educational Explainer Section */}
      <section id="self-enumeration" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t.selfEnum.badge}</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              {t.selfEnum.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              {t.selfEnum.subtitle}
            </p>
          </div>

          {/* 4 Step Visual Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-ashoka-700 text-white font-bold flex items-center justify-center text-sm mb-4 shadow-sm">
                1
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">
                {t.selfEnum.step1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Log in to the official Census mobile app / web portal via OTP authentication using your active mobile number.
              </p>
              <div className="mt-3 text-[11px] text-ashoka-700 font-semibold bg-ashoka-50 p-2 rounded-lg border border-ashoka-200">
                Tip: Only the Head of Household or an adult family member needs to log in.
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-saffron-600 text-white font-bold flex items-center justify-center text-sm mb-4 shadow-sm">
                2
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">
                {t.selfEnum.step2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill the 31-question schedule regarding building structure, drinking water, lighting, kitchen fuel, and electronic assets.
              </p>
              <div className="mt-3 text-[11px] text-saffron-800 font-semibold bg-saffron-50 p-2 rounded-lg border border-saffron-200">
                Tip: Take your time; you can save drafts and edit before final submission.
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-4 shadow-sm">
                3
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">
                {t.selfEnum.step3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                During Phase 2, declare demographic details for each family member (age, education, languages known, occupation).
              </p>
              <div className="mt-3 text-[11px] text-blue-800 font-semibold bg-blue-50 p-2 rounded-lg border border-blue-200">
                Tip: No physical certificates or identity cards need to be uploaded.
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-sm mb-4 shadow-sm">
                4
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">
                {t.selfEnum.step4Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive an encrypted Reference ID & QR Token on SMS. When the field enumerator visits, simply share this code!
              </p>
              <div className="mt-3 text-[11px] text-emerald-800 font-semibold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                Tip: The enumerator scans the QR code in 30 seconds; no repeat interviews.
              </div>
            </div>

          </div>

          {/* Interactive Sandbox Launch Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-ashoka-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <Lock className="w-3.5 h-3.5" />
                  <span>100% Client-Side Demo Sandbox • Zero Data Collection</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                  Test-Drive the Digital Census Experience Now
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl">
                  Try our risk-free mock simulator to preview the official questions, see helpful civic explanations, and download a personalized household prep checklist.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button
                  onClick={onClose /* toggle open modal */}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold text-sm shadow-lg shadow-saffron-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>{t.selfEnum.trySandboxBtn}</span>
                </button>
                <button
                  onClick={onOpenChecklist}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>Readiness Checklist</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Modal Sandbox Simulator */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-saffron-500/20 border border-saffron-500/40 flex items-center justify-center text-saffron-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base sm:text-lg">Self-Enumeration Practice Sandbox</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      PRACTICE DEMO ONLY
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Step {currentStep} of 4 • Simulated Official Experience
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Sandbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Step Progress Indicator Bar */}
            <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span className={currentStep >= 1 ? 'text-ashoka-700 font-bold' : ''}>1. Household Info</span>
              <span>→</span>
              <span className={currentStep >= 2 ? 'text-ashoka-700 font-bold' : ''}>2. Living Amenities</span>
              <span>→</span>
              <span className={currentStep >= 3 ? 'text-ashoka-700 font-bold' : ''}>3. Assets & Tech</span>
              <span>→</span>
              <span className={currentStep >= 4 ? 'text-emerald-700 font-bold' : ''}>4. Reference Token</span>
            </div>

            {/* Modal Body: Dynamic Step Content */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
              
              {/* STEP 1: Household Ownership & Head Details */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div className="p-3.5 bg-ashoka-50 rounded-xl border border-ashoka-200 text-xs text-ashoka-900 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-ashoka-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Educational Note:</strong> In Phase 1, only the name and status of the Head of Household is recorded. Full individual names are captured in Phase 2.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Head of Household Name (Sample)
                      </label>
                      <input
                        type="text"
                        value={formData.headName}
                        onChange={(e) => setFormData({...formData, headName: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600"
                        placeholder="e.g. Ramesh Kumar"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Household Social Category
                      </label>
                      <select
                        value={formData.socialCategory}
                        onChange={(e) => setFormData({...formData, socialCategory: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>General / Other</option>
                        <option>Scheduled Caste (SC)</option>
                        <option>Scheduled Tribe (ST)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Ownership Status of House
                      </label>
                      <select
                        value={formData.ownership}
                        onChange={(e) => setFormData({...formData, ownership: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>Owned (स्वयं का)</option>
                        <option>Rented (किराए का)</option>
                        <option>Any other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Number of Dwelling Rooms
                      </label>
                      <select
                        value={formData.dwellingRooms}
                        onChange={(e) => setFormData({...formData, dwellingRooms: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>1 Room</option>
                        <option>2 Rooms</option>
                        <option>3 Rooms</option>
                        <option>4+ Rooms</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Basic Living Amenities */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                    <Droplets className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Educational Note:</strong> Water and sanitation statistics directly inform state budget allocations for Jal Jeevan Mission and municipal sewerage projects.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Main Drinking Water Source
                      </label>
                      <select
                        value={formData.waterSource}
                        onChange={(e) => setFormData({...formData, waterSource: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>Treated Tap Water (Piped supply)</option>
                        <option>Untreated Tap Water</option>
                        <option>Handpump / Tubewell</option>
                        <option>Covered Well</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Source Location
                      </label>
                      <select
                        value={formData.waterDistance}
                        onChange={(e) => setFormData({...formData, waterDistance: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>Within premises (घर के अंदर)</option>
                        <option>Near premises (&lt;100m)</option>
                        <option>Away</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Main Cooking Fuel Used
                      </label>
                      <select
                        value={formData.cookingFuel}
                        onChange={(e) => setFormData({...formData, cookingFuel: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>LPG / Piped Natural Gas (PNG)</option>
                        <option>Electricity / Induction</option>
                        <option>Biogas</option>
                        <option>Firewood / Biomass</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Latrine Facility Access
                      </label>
                      <select
                        value={formData.toiletAccess}
                        onChange={(e) => setFormData({...formData, toiletAccess: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>Flush latrine connected to piped sewer system</option>
                        <option>Flush latrine connected to septic tank</option>
                        <option>Twin-pit latrine</option>
                        <option>Public / Shared Community Latrine</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Assets & Digital Connectivity */}
              {currentStep === 3 && (
                <div className="space-y-5">
                  <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <Wifi className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Educational Note:</strong> Asset questions measure digital inclusion (BharatNet, mobile penetration) across urban and rural India.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Access to Internet
                      </label>
                      <select
                        value={formData.hasInternet}
                        onChange={(e) => setFormData({...formData, hasInternet: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>Yes (Broadband + Mobile 5G)</option>
                        <option>Yes (Mobile Internet only)</option>
                        <option>No Internet Access</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Television Availability
                      </label>
                      <select
                        value={formData.hasTv}
                        onChange={(e) => setFormData({...formData, hasTv: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Vehicles Possessed
                      </label>
                      <select
                        value={formData.hasVehicle}
                        onChange={(e) => setFormData({...formData, hasVehicle: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>Two-Wheeler + Car</option>
                        <option>Two-Wheeler only</option>
                        <option>Bicycle only</option>
                        <option>None</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Total Persons Residing
                      </label>
                      <select
                        value={formData.memberCount}
                        onChange={(e) => setFormData({...formData, memberCount: e.target.value})}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-ashoka-600 bg-white"
                      >
                        <option>1 - 2 Persons</option>
                        <option>3 - 4 Persons</option>
                        <option>5 - 6 Persons</option>
                        <option>7+ Persons</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Mock Reference Token Slip Generated */}
              {currentStep === 4 && (
                <div className="space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Practice Self-Enumeration Completed!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                      In the real Census 2027 portal, you will be issued an encrypted Reference Token like the sample below:
                    </p>
                  </div>

                  {/* Simulated Reference Slip Card */}
                  <div className="bg-slate-50 border-2 border-dashed border-ashoka-300 rounded-2xl p-6 max-w-md mx-auto space-y-4 shadow-sm text-left">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div>
                        <div className="text-[10px] font-bold uppercase text-slate-400">Sample Reference Slip</div>
                        <div className="font-bold text-sm text-slate-900">Census 2027 Self-Enumeration</div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-ashoka-700 text-white flex items-center justify-center">
                        <QrCode className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Head of Household:</span>
                        <span className="font-semibold">{formData.headName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Ownership Status:</span>
                        <span className="font-semibold">{formData.ownership}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Residing Persons:</span>
                        <span className="font-semibold">{formData.memberCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Sample Reference Token:</span>
                        <span className="font-mono font-bold text-ashoka-700">CENSUS-2027-DEMO-9842X</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={copyDemoToken}
                        className="w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedToken ? 'Copied Sample Token!' : 'Copy Sample Token'}</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    When the enumerator visits your doorstep during their field round, you simply show this SMS/Token. They will verify it in 30 seconds.
                  </p>
                </div>
              )}

            </div>

            {/* Modal Footer Navigation */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              {currentStep > 1 && currentStep < 4 ? (
                <button
                  onClick={handlePrevStep}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : currentStep === 4 ? (
                <button
                  onClick={resetSandbox}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Restart Practice</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-ashoka-700 to-ashoka-900 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] flex items-center gap-1.5 transition-transform"
                >
                  <span>{currentStep === 3 ? 'Generate Sample Token' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                >
                  Done Exploring
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
