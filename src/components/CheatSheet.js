'use client';
import React, { useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "./Sidebar";
import SqlJoinsDiagram from "./visualizations/SqlJoinsDiagram";
import QueryBasicsDiagram from "./visualizations/QueryBasicsDiagram";
import ReactCheatSheet from "./ReactCheatSheet";
import SystemDesignCheatSheet from "./SystemDesignCheatSheet";
import DSAPattern from "./DSAPattern";

const CheatSheet = () => {
  const [selectedTopic, setSelectedTopic] = useState("system-design");
  const [activeDiagram, setActiveDiagram] = useState("joins");

  // Topic configuration
  const diagrams = {
    sql: [
      { id: "joins", name: "SQL Joins", component: SqlJoinsDiagram },
      { id: "query-basics", name: "Query Basics", component: QueryBasicsDiagram },
      // Placeholders for other SQL topics if they were implemented or just keep them as tabs
      { id: "data-types", name: "Data Types", component: () => <div className="p-8 text-center text-slate-500">Visualization coming soon</div> },
      { id: "indexes", name: "Indexes", component: () => <div className="p-8 text-center text-slate-500">Visualization coming soon</div> },
      { id: "aggregations", name: "Aggregations", component: () => <div className="p-8 text-center text-slate-500">Visualization coming soon</div> },
    ],
    // Other topics handle their own internal navigation usually, but let's see how they were implemented.
    // ReactCheatSheet, SystemDesignCheatSheet, DSAPattern seem to be full page components.
  };

  const renderContent = () => {
    switch (selectedTopic) {
      case "sql":
        const ActiveComponent = diagrams.sql.find(d => d.id === activeDiagram)?.component || SqlJoinsDiagram;
        return (
          <div className="space-y-6">
             {/* Sub-navigation for SQL */}
            <div className="flex overflow-x-auto pb-2 space-x-2 border-b border-slate-200 no-scrollbar">
              {diagrams.sql.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDiagram(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                    activeDiagram === tab.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            
            <ActiveComponent />
          </div>
        );
      case "react":
        return <ReactCheatSheet />;
      case "dsa":
        return <DSAPattern />;
      case "system-design":
        return <SystemDesignCheatSheet />;
      default:
        return <div className="p-10 text-center text-slate-500">Select a topic from the sidebar</div>;
    }
  };

  const topicTitles = {
    sql: "Structured Query Language",
    react: "React.js Ecosystem",
    dsa: "Data Structures & Algorithms",
    "system-design": "System Design Architecture",
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar activeTab={selectedTopic} onTabChange={(id) => { setSelectedTopic(id); setActiveDiagram("joins"); }} />

      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {topicTitles[selectedTopic] || "Developer Cheatsheets"}
                    </h1>
                    <p className="text-slate-500 text-sm mt-1">
                        Interactive visual guides for modern developers.
                    </p>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search topics..." 
                        className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64 transition-all shadow-sm"
                    />
                </div>
            </div>

            {/* Content Area */}
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default CheatSheet;
