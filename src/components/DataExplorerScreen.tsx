import React, { useState } from 'react';
import { 
  Clock, 
  TrendingUp, 
  GraduationCap, 
  Building2, 
  BarChart3, 
  Sparkles, 
  ChevronDown 
} from 'lucide-react';
import { SourceBadge } from './SourceBadge';
import { useLanguage } from '../i18n';

export const DataExplorerScreen: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('All India');
  const [selectedIndicator, setSelectedIndicator] = useState('Population & Growth');
  const [sliderYear, setSliderYear] = useState(2011);
  const [showAiModal, setShowAiModal] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            <Clock className="w-3 h-3 text-slate-500" />
            <span>{t.dataExplorer.badge}</span>
            <SourceBadge sourceId="HISTORICAL_CENSUS_ARCHIVES" size="sm" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.dataExplorer.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.dataExplorer.subtitle}
          </p>
        </div>

        {/* Filter Control Bar */}
        <div className="bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
            
            {/* Region Dropdown */}
            <div className="md:col-span-3">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                {t.dataExplorer.filterRegion}
              </label>
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="appearance-none w-full bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-xs font-semibold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 cursor-pointer"
                >
                  <option value="All India">All India</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Bihar">Bihar</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Gujarat">Gujarat</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Indicator Focus Dropdown */}
            <div className="md:col-span-4">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                {t.dataExplorer.filterIndicator}
              </label>
              <div className="relative">
                <select
                  value={selectedIndicator}
                  onChange={(e) => setSelectedIndicator(e.target.value)}
                  className="appearance-none w-full bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-xs font-semibold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 cursor-pointer"
                >
                  <option value="Population & Growth">Population & Growth</option>
                  <option value="Literacy & Education">Literacy & Education</option>
                  <option value="Gender Ratio">Gender Ratio</option>
                  <option value="Urbanization">Urbanization</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Time Period Range Slider */}
            <div className="md:col-span-3">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                  {t.dataExplorer.filterTimePeriod.replace('{year}', String(sliderYear))}
                </span>
              </div>
              <input
                type="range"
                min="1951"
                max="2011"
                step="10"
                value={sliderYear}
                onChange={(e) => setSliderYear(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* Apply Filters Button */}
            <div className="md:col-span-2">
              <button 
                onClick={() => {}}
                className="w-full bg-black hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                {t.dataExplorer.applyFiltersBtn}
              </button>
            </div>

          </div>
        </div>

        {/* Visual Metric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Area: 2x2 Grid of Visual Cards (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1: Population Growth Trend */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm border-t-[3px] border-t-orange-500 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    {t.dataExplorer.card1Title}
                  </h3>
                  <TrendingUp className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.dataExplorer.card1Subtitle}
                </p>
              </div>

              {/* Upward Curve Chart */}
              <div className="h-32 sm:h-36 relative flex items-end justify-center py-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" fill="none">
                  <path
                    d="M 10 90 Q 90 80, 130 40 T 190 15"
                    stroke="#0f172a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Endpoint Orange Dot */}
                  <circle cx="190" cy="15" r="5" fill="#f97316" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex justify-end pt-1">
                <SourceBadge sourceId="HISTORICAL_CENSUS_ARCHIVES" size="sm" />
              </div>
            </div>

            {/* Card 2: Literacy & Education */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm border-t-[3px] border-t-slate-900 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    {t.dataExplorer.card2Title}
                  </h3>
                  <GraduationCap className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.dataExplorer.card2Subtitle}
                </p>
              </div>

              {/* Circular Donut Ring Progress */}
              <div className="h-32 sm:h-36 flex items-center justify-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    {/* Background Ring */}
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="3.5"
                    />
                    {/* Progress Ring (~74%) */}
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#064e3b"
                      strokeWidth="4"
                      strokeDasharray="74, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <SourceBadge sourceId="HISTORICAL_CENSUS_ARCHIVES" size="sm" />
              </div>
            </div>

            {/* Card 3: Rural vs Urban Split */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm border-t-[3px] border-t-orange-500 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    {t.dataExplorer.card3Title}
                  </h3>
                  <Building2 className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.dataExplorer.card3Subtitle}
                </p>
              </div>

              {/* Progress Bar with Labels */}
              <div className="space-y-2 py-4">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>{t.dataExplorer.card3Rural}</span>
                  <span>{t.dataExplorer.card3Urban}</span>
                </div>
                <div className="h-3.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
                  <div className="h-full bg-[#0f172a] rounded-l-full" style={{ width: '68.8%' }}></div>
                  <div className="h-full bg-slate-200 rounded-r-full" style={{ width: '31.2%' }}></div>
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <SourceBadge sourceId="HISTORICAL_CENSUS_ARCHIVES" size="sm" />
              </div>
            </div>

            {/* Card 4: State Comparison */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm border-t-[3px] border-t-slate-900 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    {t.dataExplorer.card4Title}
                  </h3>
                  <BarChart3 className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.dataExplorer.card4Subtitle}
                </p>
              </div>

              {/* Horizontal Bar Comparison */}
              <div className="space-y-2.5 py-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-700 w-6">UP</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-black h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-700 w-6">MH</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-black h-full rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-700 w-6">BR</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-black h-full rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <SourceBadge sourceId="HISTORICAL_CENSUS_ARCHIVES" size="sm" />
              </div>
            </div>

          </div>

          {/* Right Area: AI Data Insights Card (4 Cols) */}
          <div className="lg:col-span-4 bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-lg text-slate-900">
                  {t.dataExplorer.aiInsightsTitle}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.dataExplorer.aiInsightsDesc}
              </p>
            </div>

            <div>
              <button
                onClick={() => setShowAiModal(true)}
                className="w-full bg-black hover:bg-slate-800 text-white rounded-xl py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t.dataExplorer.explainDataBtn}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal / Dialog for AI Insights explanation */}
        {showAiModal && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <h3 className="font-bold text-base text-slate-900">
                    {t.dataExplorer.modalTitle.replace('{region}', selectedRegion)}
                  </h3>
                </div>
                <button 
                  onClick={() => setShowAiModal(false)}
                  className="text-slate-400 hover:text-slate-700 text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed">
                {t.dataExplorer.modalPoints.map((point, idx) => (
                  <p key={idx}>• {point}</p>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <SourceBadge sourceId="HISTORICAL_CENSUS_ARCHIVES" size="sm" />
                <button
                  onClick={() => setShowAiModal(false)}
                  className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  {t.common.gotIt}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
