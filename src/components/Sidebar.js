'use client';

import React from 'react';
import { Database, Code, Server, Layout, CheckCircle2, Zap } from 'lucide-react';

const Sidebar = ({ activeTab, onTabChange = () => {} }) => {
  const navItems = [
    { id: 'system-design', label: 'System Design', icon: Layout },
    { id: 'frontend-system-design', label: 'Frontend Design', icon: Layout },
    { id: 'dsa', label: 'DSA Patterns', icon: Server },
    { id: 'react', label: 'React', icon: Code },
    { id: 'sql', label: 'SQL', icon: Database },
    { id: 'db-optimization', label: 'DB Optimization', icon: CheckCircle2 },
    { id: 'caching', label: 'Caching & Redis', icon: Zap },
  ];

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col h-screen fixed inset-y-0 left-0 z-50">
      <div className="h-16 flex items-center px-6 border-b border-slate-200 bg-white shadow-sm overflow-hidden whitespace-nowrap">
        <div className="w-8 h-8 mr-3 flex-shrink-0">
           <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="sidebar_logo_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* Outer Hexagon */}
            <path d="M256 40 L460 140 V372 L256 472 L52 372 V140 L256 40Z" 
                  fill="url(#sidebar_logo_gradient)" stroke="none" />
            {/* Inner Details */}
            <path d="M256 100 L390 170 V342 L256 412 L122 342 V170 L256 100Z" 
                  fill="#ffffff" fillOpacity="0.2" />
            <circle cx="256" cy="256" r="60" fill="white" />
            <path d="M256 196 V100" stroke="white" strokeWidth="24" strokeLinecap="round" />
            <path d="M204 286 L122 342" stroke="white" strokeWidth="24" strokeLinecap="round" />
            <path d="M308 286 L390 342" stroke="white" strokeWidth="24" strokeLinecap="round" />
            <circle cx="256" cy="100" r="30" fill="white" />
            <circle cx="122" cy="342" r="30" fill="white" />
            <circle cx="390" cy="342" r="30" fill="white" />
          </svg>
        </div>
        <span className="font-bold text-lg text-slate-800 tracking-tight">
          Dev<span className="text-blue-600">Visuals</span>
        </span>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <div className="px-2 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Library
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/60'
                    : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-200/60'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <Icon
                    size={18}
                    className={`flex-shrink-0 transition-colors duration-200 ${
                      isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-500'
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                </div>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] flex-shrink-0" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

    </aside>
  );
};

export default Sidebar;
