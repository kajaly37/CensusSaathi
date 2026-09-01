import React, { useState } from 'react';
import { 
  BarChart3, 
  Info, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { HISTORICAL_CENSUS_METRICS } from '../data/censusData';
import { TRANSLATIONS } from '../data/translations';
import type { LanguageCode } from '../data/translations';

interface DataExplorerProps {
  currentLang: LanguageCode;
}

export const DataExplorer: React.FC<DataExplorerProps> = ({ currentLang }) => {
  const [activeMetricTab, setActiveMetricTab] = useState<'literacy' | 'amenities' | 'sexRatio' | 'urbanization'>('literacy');
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  const t = TRANSLATIONS[currentLang];

  const getMetricConfig = () => {
    switch (activeMetricTab) {
      case 'literacy':
        return {
          title: "National Literacy Rate Growth (1951 – 2027)",
          description: "Tracks the rise in literate citizens aged 7+ over 8 decennial counts.",
          dataKey1: "literacy",
          name1: "Literacy Rate (%)",
          color1: "#2563eb",
          unit: "%",
          domain: [0, 100]
        };
      case 'amenities':
        return {
          title: "Household Living Amenities Access (1951 – 2027)",
          description: "Percentage of households with access to piped tap water and domestic electricity.",
          dataKey1: "electricityPercent",
          name1: "Electricity Access (%)",
          color1: "#f97316",
          dataKey2: "tapWaterPercent",
          name2: "Tap Water Access (%)",
          color2: "#059669",
          unit: "%",
          domain: [0, 100]
        };
      case 'sexRatio':
        return {
          title: "Sex Ratio Evolution (Females per 1,000 Males)",
          description: "Historical sex ratio benchmarks across decennial Census reports.",
          dataKey1: "sexRatio",
          name1: "Sex Ratio (Females / 1000 Males)",
          color1: "#7c3aed",
          unit: "",
          domain: [850, 1000]
        };
      case 'urbanization':
        return {
          title: "Urbanization & Digital Inclusion (1951 – 2027)",
          description: "Proportion of population living in statutory urban areas and digital connectivity.",
          dataKey1: "urbanization",
          name1: "Urban Population (%)",
          color1: "#0284c7",
          dataKey2: "internetPercent",
          name2: "Internet Access (%)",
          color2: "#10b981",
          unit: "%",
          domain: [0, 100]
        };
    }
  };

  const config = getMetricConfig();

  return (
    <section id="data-explorer" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-ashoka-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t.dataExplorer.badge}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.dataExplorer.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.dataExplorer.subtitle}
          </p>
        </div>

        {/* Verification Status Legend Pill */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-xs font-medium">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>1951 – 2011: Verified Official ORGI Historical Census Records</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>2027: Statistical Benchmark Projection for Educational Demonstration</span>
          </span>
        </div>

        {/* Metric Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveMetricTab('literacy')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeMetricTab === 'literacy'
                ? 'bg-ashoka-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.dataExplorer.literacyTab}
          </button>
          <button
            onClick={() => setActiveMetricTab('amenities')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeMetricTab === 'amenities'
                ? 'bg-ashoka-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.dataExplorer.amenitiesTab}
          </button>
          <button
            onClick={() => setActiveMetricTab('sexRatio')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeMetricTab === 'sexRatio'
                ? 'bg-ashoka-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.dataExplorer.sexRatioTab}
          </button>
          <button
            onClick={() => setActiveMetricTab('urbanization')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeMetricTab === 'urbanization'
                ? 'bg-ashoka-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.dataExplorer.urbanizationTab}
          </button>
        </div>

        {/* Chart Visualization Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 font-display">
                {config.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {config.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setChartType('line')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  chartType === 'line' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                Line Trend
              </button>
              <button
                onClick={() => setChartType('bar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  chartType === 'bar' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                Bar Chart
              </button>
            </div>
          </div>

          {/* Recharts Canvas */}
          <div className="h-80 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'line' ? (
                <LineChart data={HISTORICAL_CENSUS_METRICS} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" stroke="#64748b" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 12 }} domain={config.domain} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '12px' }}
                    itemStyle={{ color: '#93c5fd' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                  <Line 
                    type="monotone" 
                    dataKey={config.dataKey1} 
                    name={config.name1} 
                    stroke={config.color1} 
                    strokeWidth={3} 
                    activeDot={{ r: 8 }} 
                  />
                  {config.dataKey2 && (
                    <Line 
                      type="monotone" 
                      dataKey={config.dataKey2} 
                      name={config.name2} 
                      stroke={config.color2} 
                      strokeWidth={3} 
                    />
                  )}
                </LineChart>
              ) : (
                <BarChart data={HISTORICAL_CENSUS_METRICS} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" stroke="#64748b" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 12 }} domain={config.domain} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '12px' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                  <Bar dataKey={config.dataKey1} name={config.name1} fill={config.color1} radius={[6, 6, 0, 0]} />
                  {config.dataKey2 && (
                    <Bar dataKey={config.dataKey2} name={config.name2} fill={config.color2} radius={[6, 6, 0, 0]} />
                  )}
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Historical Data Citation Note */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2 text-xs text-slate-500">
            <Info className="w-4 h-4 text-ashoka-600 shrink-0 mt-0.5" />
            <span>{t.dataExplorer.dataSourceCitation}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
