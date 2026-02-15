'use client';
import React, { useState } from 'react';
import { 
  Database, 
  Server, 
  Zap, 
  Layers, 
  Network, 
  HardDrive,
  CloudLightning,
  ShieldAlert,
  Clock,
  Trash2,
  Box,
  Cpu
} from 'lucide-react';
import cachingData from '../data/caching.json';

const CachingCheatSheet = () => {
  const [activeStep, setActiveStep] = useState('write-policies');
  // Add safety check in case data file structure is different or empty
  const activeStepData = cachingData?.caching?.steps?.find(s => s.id === activeStep) || {
      id: 'error',
      title: 'Error Loading Data',
      description: 'Could not load caching data.',
      strategies: [],
      example: ''
  };

  const getIcon = (stepId) => {
    switch(stepId) {
      case 'write-policies': return <Zap size={20} />;
      case 'eviction-policies': return <Trash2 size={20} />;
      case 'redis-structures': return <Layers size={20} />;
      case 'redis-internals': return <Cpu size={20} />;
      case 'cache-hazards': return <ShieldAlert size={20} />;
      case 'advanced-patterns': return <Network size={20} />;
      default: return <Server size={20} />;
    }
  };

  const renderDiagram = (stepId) => {
    switch(stepId) {
      case 'write-policies':
        return (
          <div className="w-full flex justify-center">
             <svg width="400" height="220" viewBox="0 0 400 220">
               {/* Application */}
               <rect x="20" y="80" width="60" height="60" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
               <text x="50" y="115" textAnchor="middle" fill="#4338ca" fontWeight="bold">App</text>

               {/* Cache */}
               <rect x="160" y="20" width="80" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
               <text x="200" y="55" textAnchor="middle" fill="#b45309" fontWeight="bold">Cache</text>

               {/* DB */}
               <rect x="160" y="140" width="80" height="60" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
               <text x="200" y="175" textAnchor="middle" fill="#1e40af" fontWeight="bold">DB</text>

               {/* Strategies Text */}
               <text x="300" y="40" fontSize="10" fontWeight="bold" fill="#64748b">Write-Through</text>
               <path d="M90,90 L150,50" stroke="#d97706" markerEnd="url(#arrow)" />
               <path d="M250,50 L250,150" stroke="#d97706" strokeDasharray="4,2" />
               <text x="260" y="100" fontSize="10" fill="#d97706">Sync Write</text>

               <text x="300" y="160" fontSize="10" fontWeight="bold" fill="#64748b">Cache-Aside</text>
               <path d="M90,130 L150,170" stroke="#2563eb" markerEnd="url(#arrow)" />
               <text x="100" y="160" fontSize="10" fill="#2563eb">1. Update DB</text>
               <path d="M150,160 L180,90" stroke="#ef4444" strokeDasharray="2,2" />
               <text x="190" y="120" fontSize="10" fill="#ef4444">2. Invalidate</text>
             </svg>
          </div>
        );
      case 'eviction-policies':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
               {/* Cache Container */}
               <rect x="100" y="40" width="200" height="120" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
               <text x="200" y="30" textAnchor="middle" fill="#64748b" fontSize="12">Cache Memory (Max Size)</text>

               {/* Items */}
               <rect x="120" y="60" width="160" height="20" rx="4" fill="#fee2e2" stroke="#ef4444" opacity="0.5" />
               <text x="200" y="75" textAnchor="middle" fontSize="10" fill="#7f1d1d">Item A (Accessed 2h ago)</text>

               <rect x="120" y="90" width="160" height="20" rx="4" fill="#dbeafe" stroke="#3b82f6" />
               <text x="200" y="105" textAnchor="middle" fontSize="10" fill="#1e40af">Item B (Accessed 5m ago)</text>

               <rect x="120" y="120" width="160" height="20" rx="4" fill="#dcfce7" stroke="#22c55e" />
               <text x="200" y="135" textAnchor="middle" fontSize="10" fill="#14532d">Item C (Just added)</text>

               {/* New Item Incoming */}
               <g transform="translate(20, 100)">
                 <rect x="0" y="0" width="60" height="30" rx="4" fill="#fef3c7" stroke="#d97706" />
                 <text x="30" y="20" textAnchor="middle" fontSize="10" fill="#92400e">New Item</text>
                 <path d="M65,15 L95,15" stroke="#d97706" strokeWidth="2" markerEnd="url(#arrow)" />
               </g>

               {/* Eviction Arrow */}
               <path d="M285,70 L350,70" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
               <text x="320" y="60" textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="bold">Evict (LRU)</text>
            </svg>
          </div>
        );
      case 'redis-structures':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="220" viewBox="0 0 400 220">
               {/* String */}
               <g transform="translate(20, 20)">
                 <rect x="0" y="0" width="80" height="40" rx="4" fill="#e0e7ff" stroke="#6366f1" />
                 <text x="40" y="25" textAnchor="middle" fontSize="12" fill="#4338ca" fontWeight="bold">String</text>
                 <text x="40" y="55" textAnchor="middle" fontSize="10" fill="#6366f1">Key: Value</text>
               </g>

               {/* List */}
               <g transform="translate(140, 20)">
                 <rect x="0" y="0" width="100" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" />
                 <text x="50" y="25" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">List</text>
                 <rect x="10" y="10" width="20" height="20" fill="#93c5fd" rx="2" />
                 <rect x="40" y="10" width="20" height="20" fill="#93c5fd" rx="2" />
                 <rect x="70" y="10" width="20" height="20" fill="#93c5fd" rx="2" />
                 <line x1="30" y1="20" x2="40" y2="20" stroke="#1e40af" />
                 <line x1="60" y1="20" x2="70" y2="20" stroke="#1e40af" />
               </g>

               {/* Hash */}
               <g transform="translate(260, 20)">
                 <rect x="0" y="0" width="100" height="60" rx="4" fill="#dcfce7" stroke="#22c55e" />
                 <text x="50" y="20" textAnchor="middle" fontSize="12" fill="#14532d" fontWeight="bold">Hash</text>
                 <text x="50" y="35" textAnchor="middle" fontSize="10" fill="#166534">field1: val1</text>
                 <text x="50" y="50" textAnchor="middle" fontSize="10" fill="#166534">field2: val2</text>
               </g>

               {/* Set */}
               <g transform="translate(50, 100)">
                 <circle cx="40" cy="40" r="40" fill="#fef3c7" stroke="#d97706" />
                 <text x="40" y="20" textAnchor="middle" fontSize="12" fill="#92400e" fontWeight="bold">Set</text>
                 <circle cx="30" cy="40" r="5" fill="#d97706" />
                 <circle cx="50" cy="50" r="5" fill="#d97706" />
                 <circle cx="40" cy="60" r="5" fill="#d97706" />
                 <text x="40" y="95" textAnchor="middle" fontSize="10" fill="#92400e">Unique Unordered</text>
               </g>

               {/* Sorted Set */}
               <g transform="translate(200, 100)">
                 <rect x="0" y="10" width="140" height="60" rx="4" fill="#f3e8ff" stroke="#a855f7" />
                 <text x="70" y="0" textAnchor="middle" fontSize="12" fill="#6b21a8" fontWeight="bold">Sorted Set (ZSET)</text>
                 <line x1="10" y1="30" x2="130" y2="30" stroke="#a855f7" />
                 <line x1="10" y1="50" x2="130" y2="50" stroke="#a855f7" />
                 <circle cx="20" cy="30" r="5" fill="#d8b4fe" />
                 <circle cx="70" cy="40" r="5" fill="#c084fc" />
                 <circle cx="120" cy="50" r="5" fill="#a855f7" />
                 <text x="70" y="95" textAnchor="middle" fontSize="10" fill="#6b21a8">Ordered by Score</text>
               </g>
            </svg>
          </div>
        );
      case 'cache-hazards': 
         return (
            <div className="w-full flex justify-center">
              <svg width="400" height="200" viewBox="0 0 400 200">
                {/* Users */}
                <g transform="translate(20, 50)">
                   <circle cx="10" cy="10" r="5" fill="#64748b" />
                   <circle cx="10" cy="30" r="5" fill="#64748b" />
                   <circle cx="10" cy="50" r="5" fill="#64748b" />
                   <text x="30" y="35" fontSize="10" fill="#64748b">Many Requests</text>
                </g>

                {/* Cache - Broken */}
                <g transform="translate(120, 40)">
                   <rect x="0" y="0" width="60" height="80" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2" />
                   <text x="30" y="45" textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="bold">MISS</text>
                   <text x="30" y="60" textAnchor="middle" fontSize="8" fill="#7f1d1d">(Expired/Empty)</text>
                </g>

                {/* DB - Overloaded */}
                <g transform="translate(250, 40)">
                   <rect x="0" y="0" width="80" height="80" rx="4" fill="#b91c1c" stroke="#7f1d1d" />
                   <text x="40" y="45" textAnchor="middle" fontSize="12" fill="#fee2e2" fontWeight="bold">DATABASE</text>
                   <text x="40" y="60" textAnchor="middle" fontSize="10" fill="#fee2e2">OVERLOAD!</text>
                </g>

                {/* Arrows */}
                <path d="M50,80 L110,80" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
                <path d="M190,80 L240,80" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrow)" />
                
                <text x="150" y="20" textAnchor="middle" fontSize="12" fill="#ef4444" fontWeight="bold">Avalanche / Breakdown</text>
              </svg>
            </div>
         );
      case 'advanced-patterns':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
              {/* Client */}
              <circle cx="50" cy="100" r="20" fill="#e0e7ff" stroke="#6366f1" />
              <text x="50" y="105" textAnchor="middle" fontSize="10" fill="#4338ca">Client</text>

              {/* Shards */}
              <g transform="translate(150, 40)">
                 <rect x="0" y="0" width="60" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" />
                 <text x="30" y="25" textAnchor="middle" fontSize="10" fill="#1e40af">Shard 1</text>
                 <text x="30" y="55" textAnchor="middle" fontSize="8" fill="#64748b">Slots 0-5000</text>
              </g>

              <g transform="translate(150, 100)">
                 <rect x="0" y="0" width="60" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" />
                 <text x="30" y="25" textAnchor="middle" fontSize="10" fill="#1e40af">Shard 2</text>
                 <text x="30" y="55" textAnchor="middle" fontSize="8" fill="#64748b">Slots 5001-10k</text>
              </g>

              <g transform="translate(150, 160)">
                 <rect x="0" y="0" width="60" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" />
                 <text x="30" y="25" textAnchor="middle" fontSize="10" fill="#1e40af">Shard 3</text>
                 <text x="30" y="55" textAnchor="middle" fontSize="8" fill="#64748b">Slots 10k-16k</text>
              </g>

              {/* Hashing */}
              <path d="M70,100 L140,60" stroke="#94a3b8" strokeDasharray="4,2" />
              <path d="M70,100 L140,120" stroke="#94a3b8" strokeDasharray="4,2" />
              <path d="M70,100 L140,180" stroke="#94a3b8" strokeDasharray="4,2" />

              <rect x="90" y="80" width="40" height="40" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
              <text x="110" y="105" textAnchor="middle" fontSize="8" fill="#475569">HASH</text>
            </svg>
          </div>
        );
      case 'redis-internals':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="220" viewBox="0 0 400 220">
               {/* Connections */}
               <g transform="translate(20, 20)">
                 <circle cx="10" cy="10" r="5" fill="#64748b" />
                 <circle cx="10" cy="30" r="5" fill="#64748b" />
                 <circle cx="10" cy="50" r="5" fill="#64748b" />
                 <text x="25" y="35" fontSize="10" fill="#64748b">Clients (Thousands)</text>
               </g>

               {/* Multiplexer */}
               <rect x="80" y="20" width="40" height="60" rx="4" fill="#e0e7ff" stroke="#6366f1" />
               <text x="100" y="55" textAnchor="middle" fontSize="10" fill="#4338ca" transform="rotate(-90, 100, 55)">Multiplexer</text>

               {/* Event Loop */}
               <circle cx="200" cy="50" r="30" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
               <text x="200" y="45" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="bold">Event Loop</text>
               <text x="200" y="60" textAnchor="middle" fontSize="8" fill="#92400e">(Single Thread)</text>
               
               <path d="M180,40 A20,20 0 1,1 220,60" fill="none" stroke="#d97706" markerEnd="url(#arrow)" />

               {/* File Execution */}
               <rect x="280" y="20" width="80" height="60" rx="4" fill="#dcfce7" stroke="#22c55e" />
               <text x="320" y="45" textAnchor="middle" fontSize="10" fill="#14532d" fontWeight="bold">Command</text>
               <text x="320" y="60" textAnchor="middle" fontSize="10" fill="#14532d">Executor</text>

               {/* Persistence */}
               <g transform="translate(100, 120)">
                   <rect x="0" y="0" width="200" height="80" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeDasharray="4,2" />
                   <text x="100" y="20" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="bold">Persistence (Forked Process)</text>
                   
                   <rect x="20" y="30" width="60" height="40" rx="4" fill="#fee2e2" stroke="#ef4444" />
                   <text x="50" y="55" textAnchor="middle" fontSize="10" fill="#7f1d1d">RDB</text>

                   <rect x="100" y="30" width="80" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" />
                   <text x="140" y="55" textAnchor="middle" fontSize="10" fill="#1e40af">AOF (Log)</text>
               </g>

               {/* Arrows */}
               <path d="M40,30 L80,30" stroke="#64748b" markerEnd="url(#arrow)" />
               <path d="M120,50 L170,50" stroke="#6366f1" markerEnd="url(#arrow)" />
               <path d="M230,50 L280,50" stroke="#d97706" markerEnd="url(#arrow)" />
               
               <path d="M200,80 L200,120" stroke="#94a3b8" strokeDasharray="2,2" markerEnd="url(#arrow)" />
               <text x="210" y="100" fontSize="8" fill="#64748b">Fork()</text>
            </svg>
          </div>
        );
      default:
        return (
            <div className="flex items-center justify-center p-12 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                <div className="text-center">
                    <HardDrive size={48} className="mx-auto mb-2 opacity-50" />
                    <span className="text-sm">Diagram for {activeStepData?.title}</span>
                </div>
            </div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-140px)]">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-700">Caching Guide</h3>
          <p className="text-xs text-slate-500">Mastering Redis & distributed caching</p>
        </div>
        <div className="overflow-y-auto flex-1 p-2 space-y-1">
          {cachingData?.caching?.steps?.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-all ${
                activeStep === step.id
                  ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 border border-transparent'
              }`}
            >
              <div className={`p-2 rounded-md mr-3 ${
                activeStep === step.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
              }`}>
                {getIcon(step.id)}
              </div>
              <div className="font-medium text-sm truncate">{step.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-2/3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col relative">
         <div className="flex flex-col h-full">
             {/* Header */}
             <div className="p-6 border-b border-slate-100">
                 <div className="flex items-center justify-between mb-2">
                     <div className="flex items-center">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                            {getIcon(activeStepData.id)}
                        </div>
                        <h2 className="text-xl font-bold text-slate-800">{activeStepData.title}</h2>
                     </div>
                 </div>
                 <p className="text-slate-600 text-sm leading-relaxed">
                     {activeStepData.description}
                 </p>
             </div>

             {/* Scrollable Content */}
             <div className="flex-1 overflow-y-auto p-6">
                 {/* Diagram Section */}
                 <div className="mb-8 bg-slate-50 rounded-xl border border-slate-200 p-4 flex justify-center items-center overflow-hidden min-h-[250px]">
                    {renderDiagram(activeStepData.id)}
                 </div>

                 {/* Strategies Grid */}
                 <div className="mb-6">
                     <h4 className="font-semibold text-slate-800 flex items-center mb-3">
                         <Zap size={16} className="mr-2 text-yellow-500" />
                         Key Concepts
                     </h4>
                     <div className="grid grid-cols-1 gap-3">
                         {activeStepData.strategies.map((strat, i) => (
                             <div key={i} className="p-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 shadow-sm hover:border-blue-200 transition-colors">
                                 • {strat}
                             </div>
                         ))}
                     </div>
                 </div>

                 {/* Example Box */}
                 <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                     <h4 className="text-sm font-bold text-blue-800 mb-1 uppercase tracking-wider">Example Usage</h4>
                     <p className="text-sm text-blue-700">
                         {activeStepData.example}
                     </p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default CachingCheatSheet;
