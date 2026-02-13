'use client';
import React, { useState } from 'react';
import { 
  Database, 
  Server, 
  Search, 
  Filter, 
  Zap, 
  Layers, 
  Network, 
  HardDrive 
} from 'lucide-react';
import dbOptimizationData from '../data/database-optimization.json';

const DatabaseOptimizationCheatSheet = () => {
  const [activeStep, setActiveStep] = useState('schema-design');
  const activeStepData = dbOptimizationData.databaseOptimization.steps.find(s => s.id === activeStep);

  const getIcon = (stepId) => {
    switch(stepId) {
      case 'schema-design': return <Database size={20} />;
      case 'indexing': return <Search size={20} />;
      case 'query-tuning': return <Filter size={20} />;
      case 'caching-layer': return <Zap size={20} />;
      case 'connection-pooling': return <Network size={20} />;
      case 'sharding-replication': return <Layers size={20} />;
      case 'pagination': return <Layers size={20} />;
      case 'async-processing': return <Zap size={20} />;
      case 'monitoring': return <HardDrive size={20} />;
      default: return <Server size={20} />;
    }
  };

  const renderDiagram = (stepId) => {
    switch(stepId) {
      case 'schema-design':
        return (
          <div className="w-full flex justify-center">
             <svg width="400" height="250" viewBox="0 0 400 250">
               {/* Bad Design */}
               <rect x="20" y="20" width="140" height="200" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
               <text x="90" y="45" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Monolithic</text>
               <line x1="20" y1="55" x2="160" y2="55" stroke="#ef4444" strokeWidth="1" />
               <text x="30" y="80" fill="#7f1d1d" fontSize="10">user_id (PK)</text>
               <text x="30" y="100" fill="#7f1d1d" fontSize="10">username</text>
               <text x="30" y="120" fill="#7f1d1d" fontSize="10">email</text>
               <text x="30" y="140" fill="#7f1d1d" fontSize="10">address_street</text>
               <text x="30" y="160" fill="#7f1d1d" fontSize="10">preferences</text>
               
               {/* Arrow */}
               <line x1="170" y1="120" x2="200" y2="120" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

               {/* Good Design */}
               <rect x="210" y="20" width="150" height="90" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
               <text x="285" y="45" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Users (Auth)</text>
               <line x1="210" y1="55" x2="360" y2="55" stroke="#22c55e" strokeWidth="1" />
               <text x="220" y="75" fill="#14532d" fontSize="10">id, username, email</text>

               <rect x="210" y="130" width="150" height="90" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
               <text x="285" y="155" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Profiles</text>
               <line x1="210" y1="165" x2="360" y2="165" stroke="#22c55e" strokeWidth="1" />
               <text x="220" y="185" fill="#14532d" fontSize="10">user_id (FK)</text>
               <text x="220" y="205" fill="#14532d" fontSize="10">address, settings</text>
             </svg>
          </div>
        );
      case 'indexing':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
               {/* Table Scan */}
               <g transform="translate(20, 20)">
                 <rect x="0" y="0" width="80" height="150" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
                 <text x="40" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">Scan</text>
                 <line x1="40" y1="30" x2="40" y2="140" stroke="#ef4444" strokeWidth="2" />
                 <text x="40" y="80" textAnchor="middle" fill="#ef4444" fontSize="10" transform="rotate(-90, 40, 80)">Slow O(N)</text>
               </g>

               {/* B-Tree Visualization */}
               <g transform="translate(130, 20)">
                  <circle cx="100" cy="20" r="15" fill="#bfdbfe" stroke="#3b82f6" />
                  <text x="100" y="25" textAnchor="middle" fontSize="10">50</text>
                  
                  <circle cx="50" cy="70" r="15" fill="#bfdbfe" stroke="#3b82f6" />
                  <text x="50" y="75" textAnchor="middle" fontSize="10">25</text>
                  
                  <circle cx="150" cy="70" r="15" fill="#bfdbfe" stroke="#3b82f6" />
                  <text x="150" y="75" textAnchor="middle" fontSize="10">75</text>

                  <line x1="90" y1="30" x2="60" y2="60" stroke="#64748b" />
                  <line x1="110" y1="30" x2="140" y2="60" stroke="#64748b" />
                  
                  <rect x="20" y="110" width="200" height="30" rx="4" fill="#dbeafe" stroke="#3b82f6" />
                  <text x="120" y="130" textAnchor="middle" fontSize="10" fill="#1e40af">Sorted Data Pages</text>
                  
                  <line x1="50" y1="85" x2="50" y2="110" stroke="#64748b" />
                  <line x1="150" y1="85" x2="150" y2="110" stroke="#64748b" />
                  
                  <text x="200" y="50" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">Index O(log N)</text>
               </g>
            </svg>
          </div>
        );
      case 'query-tuning':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
               {/* Bad Query */}
               <g transform="translate(20, 20)">
                 <rect x="0" y="0" width="140" height="60" rx="4" fill="#fee2e2" stroke="#ef4444" />
                 <text x="70" y="25" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">SELECT *</text>
                 <text x="70" y="45" textAnchor="middle" fill="#7f1d1d" fontSize="10">WHERE YEAR(dt) = 2023</text>
                 <text x="70" y="80" textAnchor="middle" fill="#ef4444" fontSize="10">Non-SARGable</text>
                 <text x="70" y="95" textAnchor="middle" fill="#ef4444" fontSize="10">(No Index Use)</text>
               </g>

               {/* Arrow */}
               <path d="M170,50 L230,50" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

               {/* Good Query */}
               <g transform="translate(240, 20)">
                 <rect x="0" y="0" width="140" height="60" rx="4" fill="#dcfce7" stroke="#22c55e" />
                 <text x="70" y="25" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">SELECT id, name</text>
                 <text x="70" y="45" textAnchor="middle" fill="#14532d" fontSize="10">WHERE dt {'>='} '2023-01-01'</text>
                 <text x="70" y="80" textAnchor="middle" fill="#22c55e" fontSize="10">Usage Index</text>
                 <text x="70" y="95" textAnchor="middle" fill="#22c55e" fontSize="10">Fast Range Scan</text>
               </g>
            </svg>
          </div>
        );
      case 'caching-layer': 
        return (
           <div className="w-full flex justify-center">
             <svg width="400" height="200" viewBox="0 0 400 200">
               <rect x="20" y="70" width="60" height="60" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
               <text x="50" y="105" textAnchor="middle" fill="#4338ca" fontWeight="bold">App</text>

               <rect x="160" y="20" width="80" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
               <text x="200" y="55" textAnchor="middle" fill="#b45309" fontWeight="bold">Cache</text>
               <text x="200" y="70" textAnchor="middle" fill="#b45309" fontSize="10">(Redis)</text>

               <rect x="160" y="120" width="80" height="60" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
               <text x="200" y="155" textAnchor="middle" fill="#1e40af" fontWeight="bold">DB</text>

               {/* Arrows */}
               <path d="M80,80 L150,50" stroke="#d97706" strokeWidth="2" markerEnd="url(#arrow)" />
               <text x="100" y="60" fontSize="10" fill="#d97706">1. Get?</text>

               <path d="M150,40 L80,70" stroke="#d97706" strokeWidth="2" strokeDasharray="4,2" />
               <text x="130" y="90" fontSize="10" fill="#d97706">2. Hit</text>

               <path d="M80,120 L150,150" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow)" />
               <text x="90" y="150" fontSize="10" fill="#2563eb">3. Miss (Fallback)</text>
             </svg>
           </div>
        );
      case 'connection-pooling':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
              <rect x="20" y="20" width="60" height="160" rx="4" fill="#e0e7ff" stroke="#6366f1" />
              <text x="50" y="100" textAnchor="middle" transform="rotate(-90, 50, 100)" fill="#4338ca" fontWeight="bold">App Instances</text>

              <rect x="150" y="50" width="100" height="100" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
              <text x="200" y="70" textAnchor="middle" fill="#475569" fontWeight="bold">Connection Pool</text>
              
              <circle cx="170" cy="100" r="5" fill="#22c55e" />
              <circle cx="190" cy="100" r="5" fill="#22c55e" />
              <circle cx="210" cy="100" r="5" fill="#22c55e" />
              <circle cx="230" cy="100" r="5" fill="#cbd5e1" />
              <text x="200" y="120" textAnchor="middle" fontSize="10" fill="#475569">Reused Connections</text>

              <rect x="300" y="20" width="80" height="160" rx="4" fill="#dbeafe" stroke="#2563eb" />
              <text x="340" y="100" textAnchor="middle" transform="rotate(90, 340, 100)" fill="#1e40af" fontWeight="bold">Database</text>

              <line x1="80" y1="60" x2="150" y2="80" stroke="#6366f1" strokeWidth="1" />
              <line x1="80" y1="100" x2="150" y2="100" stroke="#6366f1" strokeWidth="1" />
              <line x1="80" y1="140" x2="150" y2="120" stroke="#6366f1" strokeWidth="1" />
              
              <line x1="250" y1="100" x2="300" y2="100" stroke="#22c55e" strokeWidth="2" />
            </svg>
          </div>
        );
      case 'sharding-replication':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
              {/* Shard 1 */}
              <g transform="translate(20, 40)">
                <rect x="0" y="0" width="100" height="80" rx="4" fill="#dbeafe" stroke="#2563eb" />
                <text x="50" y="20" textAnchor="middle" fill="#1e40af" fontWeight="bold">Shard 1</text>
                <text x="50" y="40" textAnchor="middle" fontSize="10" fill="#1e40af">Users A-M</text>
                
                {/* Replica */}
                <rect x="10" y="90" width="80" height="40" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
                <text x="50" y="115" textAnchor="middle" fontSize="10" fill="#64748b">Replica</text>
                <path d="M50,80 L50,90" stroke="#94a3b8" strokeDasharray="2,2" />
              </g>

              {/* Router */}
              <circle cx="200" cy="100" r="30" fill="#fcd34d" stroke="#d97706" />
              <text x="200" y="105" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">Router</text>

              {/* Shard 2 */}
              <g transform="translate(280, 40)">
                <rect x="0" y="0" width="100" height="80" rx="4" fill="#dbeafe" stroke="#2563eb" />
                <text x="50" y="20" textAnchor="middle" fill="#1e40af" fontWeight="bold">Shard 2</text>
                <text x="50" y="40" textAnchor="middle" fontSize="10" fill="#1e40af">Users N-Z</text>

                {/* Replica */}
                <rect x="10" y="90" width="80" height="40" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
                <text x="50" y="115" textAnchor="middle" fontSize="10" fill="#64748b">Replica</text>
                <path d="M50,80 L50,90" stroke="#94a3b8" strokeDasharray="2,2" />
              </g>

              <path d="M170,100 L120,80" stroke="#d97706" markerEnd="url(#arrow)" />
              <path d="M230,100 L280,80" stroke="#d97706" markerEnd="url(#arrow)" />
            </svg>
          </div>
        );
      case 'pagination':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
               {/* Offset Based */}
               <g transform="translate(20, 20)">
                 <rect x="0" y="0" width="140" height="150" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
                 <text x="70" y="25" textAnchor="middle" fill="#475569" fontWeight="bold">Offset Pagination</text>
                 
                 <rect x="20" y="40" width="100" height="20" rx="2" fill="#cbd5e1" />
                 <rect x="20" y="65" width="100" height="20" rx="2" fill="#cbd5e1" />
                 <rect x="20" y="90" width="100" height="20" rx="2" fill="#cbd5e1" />
                 <text x="70" y="130" textAnchor="middle" fontSize="10" fill="#64748b">Skips N rows...</text>
                 
                 <path d="M140,80 L160,80" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
                 <text x="150" y="70" textAnchor="middle" fill="#ef4444" fontSize="10">Slow</text>
               </g>

               {/* Cursor Based */}
               <g transform="translate(240, 20)">
                 <rect x="0" y="0" width="140" height="150" rx="4" fill="#dcfce7" stroke="#22c55e" />
                 <text x="70" y="25" textAnchor="middle" fill="#166534" fontWeight="bold">Cursor Based</text>
                 
                 <rect x="20" y="40" width="100" height="20" rx="2" fill="#86efac" />
                 <rect x="20" y="65" width="100" height="20" rx="2" fill="#86efac" />
                 <text x="70" y="100" textAnchor="middle" fontSize="10" fill="#14532d">WHERE id {'>'} last_id</text>
                 <text x="70" y="115" textAnchor="middle" fontSize="10" fill="#14532d">LIMIT 10</text>
                 
                 <path d="M-20,80 L0,80" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />
                 <text x="-10" y="70" textAnchor="middle" fill="#22c55e" fontSize="10">Fast</text>
               </g>
            </svg>
          </div>
        );
      case 'async-processing':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
               {/* User Request */}
               <rect x="20" y="80" width="60" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" />
               <text x="50" y="105" textAnchor="middle" fontSize="10" fill="#1e40af">Request</text>

               {/* API */}
               <rect x="120" y="60" width="60" height="80" rx="4" fill="#e0e7ff" stroke="#6366f1" />
               <text x="150" y="105" textAnchor="middle" fontWeight="bold" fill="#4338ca">API</text>

               {/* Queue */}
               <g transform="translate(220, 80)">
                   <rect x="0" y="0" width="80" height="40" rx="4" fill="#fef3c7" stroke="#d97706" />
                   <text x="40" y="25" textAnchor="middle" fontSize="10" fill="#92400e">Message Queue</text>
                   <circle cx="15" cy="20" r="3" fill="#d97706" />
                   <circle cx="25" cy="20" r="3" fill="#d97706" />
                   <circle cx="35" cy="20" r="3" fill="#d97706" />
               </g>

               {/* Worker */}
               <rect x="340" y="80" width="50" height="40" rx="4" fill="#f3e8ff" stroke="#a855f7" />
               <text x="365" y="105" textAnchor="middle" fontSize="10" fill="#6b21a8">Worker</text>

               {/* Arrows */}
               <path d="M80,100 L120,100" stroke="#64748b" markerEnd="url(#arrow)" />
               <path d="M180,100 L220,100" stroke="#64748b" markerEnd="url(#arrow)" />
               <path d="M300,100 L340,100" stroke="#64748b" markerEnd="url(#arrow)" />
               
               {/* Immediate Response */}
               <path d="M150,60 L150,30 L50,30 L50,80" stroke="#22c55e" strokeDasharray="4,2" fill="none" />
               <text x="100" y="25" textAnchor="middle" fontSize="10" fill="#15803d">202 Accepted</text>
            </svg>
           </div>
        );
      case 'monitoring':
        return (
          <div className="w-full flex justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200">
               {/* Dashboard Frame */}
               <rect x="40" y="20" width="320" height="160" rx="8" fill="#1e293b" stroke="#334155" />
               <rect x="40" y="20" width="320" height="30" rx="8" fill="#334155" />
               <circle cx="55" cy="35" r="4" fill="#ef4444" />
               <circle cx="70" cy="35" r="4" fill="#f59e0b" />
               <circle cx="85" cy="35" r="4" fill="#22c55e" />
               <text x="200" y="40" textAnchor="middle" fontSize="12" fill="#94a3b8">DB Performance Monitor</text>

               {/* Graph 1 */}
               <g transform="translate(60, 70)">
                   <rect x="0" y="0" width="130" height="80" rx="4" fill="#0f172a" stroke="#475569" />
                   <text x="65" y="15" textAnchor="middle" fontSize="10" fill="#cbd5e1">Query Latency</text>
                   <polyline points="10,60 30,50 50,55 70,30 90,40 110,20 120,25" fill="none" stroke="#22c55e" strokeWidth="2" />
               </g>

               {/* Graph 2 */}
               <g transform="translate(210, 70)">
                   <rect x="0" y="0" width="130" height="80" rx="4" fill="#0f172a" stroke="#475569" />
                   <text x="65" y="15" textAnchor="middle" fontSize="10" fill="#cbd5e1">CPU Usage</text>
                   <rect x="20" y="60" width="15" height="10" fill="#3b82f6" />
                   <rect x="45" y="40" width="15" height="30" fill="#3b82f6" />
                   <rect x="70" y="50" width="15" height="20" fill="#3b82f6" />
                   <rect x="95" y="30" width="15" height="40" fill="#ef4444" />
               </g>
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

  const [showDeepDive, setShowDeepDive] = useState(false);

  const renderDeepDiveModal = () => {
    if (!showDeepDive || !activeStepData.deepDive) return null;

    return (
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
          {/* Modal Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h3 className="text-xl font-bold text-slate-800 flex items-center">
              <Zap className="mr-2 text-yellow-500" size={24} />
              Deep Dive: {activeStepData.title}
            </h3>
            <button 
              onClick={() => setShowDeepDive(false)}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {activeStepData.deepDive.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-lg font-bold text-blue-700 border-l-4 border-blue-500 pl-3">
                  {section.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {section.content}
                </p>
                
                {section.list && (
                  <ul className="list-disc list-inside space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-700">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.code && (
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-blue-300">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}

                {section.comparison && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                      <div className="text-xs font-bold text-red-600 uppercase mb-2">Bad Practice</div>
                      <pre className="text-xs font-mono text-red-800 whitespace-pre-wrap">
                        {section.comparison.bad}
                      </pre>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                      <div className="text-xs font-bold text-green-600 uppercase mb-2">Best Practice</div>
                      <pre className="text-xs font-mono text-green-800 whitespace-pre-wrap">
                        {section.comparison.good}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Modal Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
            <button 
              onClick={() => setShowDeepDive(false)}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition-colors"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-140px)]">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-700">Optimization Steps</h3>
          <p className="text-xs text-slate-500">Sequential performance guide</p>
        </div>
        <div className="overflow-y-auto flex-1 p-2 space-y-1">
          {dbOptimizationData.databaseOptimization.steps.map((step) => (
            <button
              key={step.id}
              onClick={() => { setActiveStep(step.id); setShowDeepDive(false); }}
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
         {activeStepData && (
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
                         {activeStepData.deepDive && (
                           <button 
                             onClick={() => setShowDeepDive(true)}
                             className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                           >
                             <Zap size={16} />
                             <span>Deep Dive</span>
                           </button>
                         )}
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">
                         {activeStepData.description}
                     </p>
                 </div>

                 {/* Scrollable Content */}
                 <div className="flex-1 overflow-y-auto p-6">
                     {/* Diagram Section */}
                     <div className="mb-8 bg-slate-50 rounded-xl border border-slate-200 p-4 flex justify-center items-center overflow-hidden">
                        {renderDiagram(activeStepData.id)}
                     </div>

                     {/* Strategies Grid */}
                     <div className="mb-6">
                         <h4 className="font-semibold text-slate-800 flex items-center mb-3">
                             <Zap size={16} className="mr-2 text-yellow-500" />
                             Key Strategies
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
                         <h4 className="text-sm font-bold text-blue-800 mb-1 uppercase tracking-wider">Real World Example</h4>
                         <p className="text-sm text-blue-700">
                             {activeStepData.example}
                         </p>
                     </div>
                 </div>
             </div>
         )}
         {renderDeepDiveModal()}
      </div>
    </div>
  );
};

export default DatabaseOptimizationCheatSheet;
