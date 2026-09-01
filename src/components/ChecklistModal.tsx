import React, { useState } from 'react';
import { 
  FileCheck2, 
  CheckSquare, 
  Square, 
  Printer, 
  Copy, 
  Check, 
  X, 
  Info
} from 'lucide-react';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChecklistModal: React.FC<ChecklistModalProps> = ({ isOpen, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'dob': true,
    'education': true,
    'water': false,
    'fuel': false,
    'languages': false,
    'occupation': false,
    'mobile': true
  });
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checklistGroups = [
    {
      groupTitle: "Phase 1: Household & Amenities Details",
      items: [
        { id: 'mobile', text: "Active Mobile Number of Head of Household (for OTP verification during digital self-enumeration)." },
        { id: 'ownership', text: "House Ownership Status (Owned, Rented, or Other)." },
        { id: 'water', text: "Main Drinking Water Source & whether it is within or near the premises." },
        { id: 'toilet', text: "Type of Latrine used (connected to piped sewer, septic tank, or twin-pit)." },
        { id: 'fuel', text: "Primary Cooking Fuel used (LPG/PNG connection, biogas, electricity, firewood)." },
        { id: 'assets', text: "Count of basic electronic assets (Internet connection type, TV, Smart phone/Laptop, Two-wheeler/Car)." }
      ]
    },
    {
      groupTitle: "Phase 2: Individual Family Member Details (For Each Person)",
      items: [
        { id: 'dob', text: "Exact Date of Birth and completed age in years for every family member." },
        { id: 'marital', text: "Marital Status and age at marriage (for married individuals)." },
        { id: 'education', text: "Highest Educational Qualification attained (e.g., 10th, 12th, Graduate, Post-Graduate)." },
        { id: 'languages', text: "Mother Tongue + up to 2 other languages spoken fluently." },
        { id: 'occupation', text: "Primary Occupation / Nature of Industry or Service (Main worker, marginal, or student/homemaker)." },
        { id: 'migration', text: "Place of Birth & Place of Last Residence (if migrated for employment/education/marriage)." }
      ]
    }
  ];

  const handleCopyText = () => {
    const textToCopy = `📋 CENSUS 2027 HOUSEHOLD READINESS CHECKLIST (Prepared via CensusSaathi AI)\n\n` +
      `Phase 1 Items:\n` +
      `- Active mobile number ready for OTP\n` +
      `- House ownership status (Owned/Rented)\n` +
      `- Drinking water source & lighting type\n` +
      `- Latrine type and drainage system\n` +
      `- Cooking fuel used (LPG/PNG)\n` +
      `- Electronic assets summary (Internet, Smartphone, TV)\n\n` +
      `Phase 2 Items:\n` +
      `- Date of birth & age of all members\n` +
      `- Highest education levels for each member\n` +
      `- Mother tongue & 2 secondary languages\n` +
      `- Primary occupation and industry\n` +
      `- Migration history & last residence\n\n` +
      `⚠️ Note: No original documents, Bank accounts, or OTPs need to be shared with enumerators!`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg">Household Preparation Checklist</div>
              <p className="text-xs text-slate-400">What to keep handy before self-enumeration or enumerator visit</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Checklist"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Informative banner */}
        <div className="p-3.5 bg-amber-50 border-b border-amber-200 text-xs text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>No Physical Documents Required:</strong> You do NOT need to submit paper certificates. This checklist is simply to help you recall accurate details quickly.
          </span>
        </div>

        {/* Checklist Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {checklistGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {group.groupTitle}
              </h4>

              <div className="space-y-2">
                {group.items.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-all ${
                        isChecked 
                          ? 'bg-emerald-50/60 border-emerald-300 text-slate-900 shadow-2xs' 
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-emerald-600">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                      <span className={`text-xs sm:text-sm ${isChecked ? 'font-medium' : ''}`}>
                        {item.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {Object.values(checkedItems).filter(Boolean).length} items prepared
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Checklist!' : 'Copy to Clipboard'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Checklist</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
