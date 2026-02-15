'use client';
import React, { useState } from 'react';
import { 
  Database, 
  Globe, 
  Layers, 
  BarChart, 
  Clock,
  HardDrive,
  FileCode,
  ArrowLeftRight,
  Lock,
  ShieldCheck,
  RefreshCw,
  Zap,
  Users,
  Handshake,
  MessageCircle
} from 'lucide-react';
import frontendDesignData from '../data/frontend-system-design.json';

const FrontendSystemDesignCheatSheet = () => {
    const [selectedId, setSelectedId] = useState('rendering-patterns');
    const [selectedStrategyId, setSelectedStrategyId] = useState(null);
    
    const { frontendSystemDesign } = frontendDesignData;
    const concept = frontendSystemDesign.concepts.find(c => c.id === selectedId);

    const handleConceptSelect = (id) => {
        setSelectedId(id);
        const newConcept = frontendSystemDesign.concepts.find(c => c.id === id);
        if (newConcept.strategies && newConcept.strategies.length > 0) {
            setSelectedStrategyId(newConcept.strategies[0].id);
        } else {
            setSelectedStrategyId(null);
        }
    };

    const getIcon = (iconName) => {
        const icons = {
          HardDrive: <HardDrive size={20} />,
          Layers: <Layers size={20} />,
          Clock: <Clock size={20} />,
          BarChart: <BarChart size={20} />,
          Globe: <Globe size={20} />,
          Database: <Database size={20} />,
          FileCode: <FileCode size={20} />,
          ArrowLeftRight: <ArrowLeftRight size={20} />,
          Lock: <Lock size={20} />,
          ShieldCheck: <ShieldCheck size={20} />,
          RefreshCw: <RefreshCw size={20} />,
          Zap: <Zap size={20} />,
          Users: <Users size={20} />,
          Handshake: <Handshake size={20} />,
          MessageCircle: <MessageCircle size={20} />
        };
        return icons[iconName] || <Globe size={20} />;
      };

    const feDiagrams = {
        'rendering-patterns': (
            <svg width="280" height="200" viewBox="0 0 280 200">
                <text x="70" y="30" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">CSR</text>
                <rect x="20" y="40" width="100" height="120" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <rect x="30" y="50" width="80" height="10" rx="2" fill="#fff" />
                <rect x="30" y="65" width="80" height="80" rx="2" fill="#93c5fd" />
                <text x="70" y="110" textAnchor="middle" fill="#1e40af" fontSize="10">Browser HOC</text>
                
                <text x="210" y="30" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">SSR</text>
                <rect x="160" y="40" width="100" height="60" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
                <text x="210" y="75" textAnchor="middle" fill="#166534" fontSize="10">Server</text>
                
                <path d="M180,100 L180,130" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />
                 <rect x="160" y="130" width="100" height="30" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="210" y="150" textAnchor="middle" fill="#1e40af" fontSize="10">Client</text>
            </svg>
        ),
        'state-management': (
             <svg width="280" height="200" viewBox="0 0 280 200">
                <rect x="110" y="20" width="60" height="40" rx="4" fill="#d8b4fe" stroke="#9333ea" strokeWidth="2" />
                <text x="140" y="45" textAnchor="middle" fill="#581c87" fontSize="10" fontWeight="bold">Store</text>
                
                <rect x="40" y="100" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="70" y="135" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Comp A</text>
                
                <rect x="180" y="100" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="210" y="135" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Comp B</text>
                
                <path d="M120,60 L80,100" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow)" />
                <path d="M160,60 L200,100" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow)" />
                
                <path d="M70,100 L110,40" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow)" />
                <text x="85" y="80" textAnchor="middle" fill="#475569" fontSize="8">Dispatch</text>
            </svg>
        ),
        'performance': (
            <svg width="280" height="200" viewBox="0 0 280 200">
                <rect x="20" y="40" width="240" height="30" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                <text x="140" y="60" textAnchor="middle" fill="#475569" fontSize="10">Monolithic Bundle (Slow)</text>
                
                <path d="M140,80 L140,110" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
                
                <rect x="20" y="120" width="70" height="30" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
                <text x="55" y="140" textAnchor="middle" fill="#166534" fontSize="10">Main</text>
                
                <rect x="105" y="120" width="70" height="30" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="140" y="140" textAnchor="middle" fill="#1e40af" fontSize="10">Vendor</text>
                
                <rect x="190" y="120" width="70" height="30" rx="4" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
                <text x="225" y="140" textAnchor="middle" fill="#92400e" fontSize="10">Dynamic</text>
            </svg>
        ),
        'security': (
            <svg width="280" height="200" viewBox="0 0 280 200">
                <rect x="40" y="80" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="70" y="115" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">App</text>
                
                <path d="M180,110 L110,110" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="220" y="115" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">XSS / CSRF</text>
                
                <rect x="120" y="60" width="10" height="100" rx="2" fill="#22c55e" />
                <text x="125" y="50" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">CSP / Tokens</text>
            </svg>
        )
    };

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
          <h3 className="text-lg font-bold mb-4 text-center">Frontend System Design</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {frontendSystemDesign.concepts.map(c => (
              <div 
                key={c.id}
                className={`p-3 flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                  selectedId === c.id 
                    ? 'bg-blue-100 border-2 border-blue-500' 
                    : 'bg-white border border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleConceptSelect(c.id)}
              >
                <span className="mr-2">{getIcon(c.icon)}</span>
                <span className="font-medium text-xs md:text-sm">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden h-[calc(100vh-320px)] flex flex-col">
             {concept.strategies ? (
                 <div className="flex flex-col md:flex-row h-full">
                     {/* Strategy Sidebar */}
                     <div className="w-full md:w-1/3 border-r border-slate-200 overflow-y-auto bg-slate-50 p-2 space-y-1">
                         {concept.strategies.map(strategy => (
                             <button
                                 key={strategy.id}
                                 onClick={() => setSelectedStrategyId(strategy.id)}
                                 className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-all ${
                                     selectedStrategyId === strategy.id
                                     ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm'
                                     : 'text-slate-600 hover:bg-white hover:shadow-sm border border-transparent'
                                 }`}
                             >
                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                                     selectedStrategyId === strategy.id ? 'bg-blue-200 text-blue-700' : 'bg-slate-200 text-slate-500'
                                 }`}>
                                    <Zap size={16} />
                                 </div>
                                 <div>
                                     <div className="font-medium text-sm leading-tight">{strategy.title}</div>
                                 </div>
                             </button>
                         ))}
                     </div>

                     {/* Strategy Content */}
                     <div className="w-full md:w-2/3 overflow-y-auto bg-white p-6 relative">
                         {(() => {
                            const activeStrategy = concept.strategies.find(s => s.id === selectedStrategyId) || concept.strategies[0];
                            return (
                                <div className="space-y-6">
                                    <div className="border-b border-slate-100 pb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h2 className="text-xl font-bold text-slate-800">{activeStrategy.title}</h2>
                                             <div className="flex gap-2">
                                                <span className={`px-2 py-1 rounded text-xs uppercase font-bold tracking-wide ${
                                                    activeStrategy.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {activeStrategy.impact} Impact
                                                </span>
                                                <span className="px-2 py-1 rounded text-xs uppercase font-bold tracking-wide bg-blue-100 text-blue-700">
                                                    {activeStrategy.metric}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed">{activeStrategy.description}</p>
                                    </div>

                                    {activeStrategy.example && (
                                       <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg border border-slate-700">
                                           <div className="bg-[#0f172a] px-4 py-2 border-b border-slate-700 flex justify-between items-center">
                                               <span className="text-xs font-mono text-blue-400">Example Code</span>
                                               <div className="flex space-x-1.5">
                                                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                               </div>
                                           </div>
                                           <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-100 selection:bg-blue-500/30">
                                               <code>{activeStrategy.example}</code>
                                           </pre>
                                       </div>
                                   )}
                                </div>
                            );
                         })()}
                     </div>
                 </div>
             ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 overflow-y-auto">
                    <div>
                       <h4 className="text-xl font-bold text-blue-700 mb-3">{concept.name}</h4>
                       <p className="text-gray-700 mb-4">{concept.description}</p>
                       
                       {concept.types && (
                         <div className="mb-4">
                           <h5 className="font-semibold text-gray-700 mb-2">Types:</h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              {concept.types.map((t, i) => (
                                  <li key={i}><strong>{t.name}:</strong> {t.desc}</li>
                              ))}
                            </ul>
                         </div>
                       )}

                       {concept.details && (
                          <div className="mb-4">
                             <h5 className="font-semibold text-gray-700 mb-2">Key Concepts:</h5>
                             <ul className="list-disc pl-5 space-y-1 text-gray-600">
                               {concept.details.map((d, i) => <li key={i}>{d}</li>)}
                             </ul>
                          </div>
                       )}
                    </div>

                    <div className="flex flex-col items-center justify-center bg-gray-50 rounded p-4 border border-gray-100 h-full min-h-[300px]">
                       {feDiagrams[selectedId] || <div className="text-gray-400">Diagram coming soon</div>}
                    </div>
                 </div>
             )}
          </div>
      </div>
    );
};

export default FrontendSystemDesignCheatSheet;
