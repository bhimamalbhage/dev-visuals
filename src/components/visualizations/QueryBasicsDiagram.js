'use client';
import React, { useState } from 'react';
import { Terminal, Lightbulb } from 'lucide-react';

const QueryBasicsDiagram = () => {
    const [activeSection, setActiveSection] = useState("select");
  
    const sections = [
      { id: "select", name: "SELECT", color: "blue" },
      { id: "where", name: "WHERE", color: "emerald" },
      { id: "groupby", name: "GROUP BY", color: "cyan" },
      { id: "having", name: "HAVING", color: "yellow" },
      { id: "orderby", name: "ORDER BY", color: "rose" },
    ];
  
    // Helper to get Tailwind classes based on color name
    const getColorClasses = (colorName) => {
        const map = {
            blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
            emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-200' },
            cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600', light: 'bg-cyan-50', border: 'border-cyan-200' },
            yellow: { bg: 'bg-yellow-500', text: 'text-yellow-700', light: 'bg-yellow-50', border: 'border-yellow-200' },
            rose: { bg: 'bg-rose-500', text: 'text-rose-600', light: 'bg-rose-50', border: 'border-rose-200' },
        };
        return map[colorName] || map.blue;
    };

    const content = {
      select: {
        description: "The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.",
        syntax: "SELECT column1, column2 FROM table_name;",
        examples: [
          { name: "Select All", code: "SELECT * FROM Customers;" },
          { name: "Specific Columns", code: "SELECT CustomerName, City FROM Customers;" },
          { name: "Distinct Values", code: "SELECT DISTINCT Country FROM Customers;" },
        ]
      },
      where: {
        description: "The WHERE clause is used to filter records. It extracts only those records that fulfill a specified condition.",
        syntax: "SELECT * FROM table_name WHERE condition;",
        examples: [
          { name: "Equal", code: "SELECT * FROM Products WHERE Price = 18;" },
          { name: "Greater Than", code: "SELECT * FROM Products WHERE Price > 30;" },
          { name: "Pattern Matching", code: "SELECT * FROM Customers WHERE City LIKE 'L%';" },
        ]
      },
      groupby: {
        description: "The GROUP BY statement groups rows that have the same values into summary rows, like 'find the number of customers in each country'.",
        syntax: "SELECT col, COUNT(*) FROM table GROUP BY col;",
        examples: [
          { name: "Count by Group", code: "SELECT COUNT(ID), Country FROM Customers GROUP BY Country;" },
          { name: "Sum by Group", code: "SELECT Item, SUM(Qty) FROM Orders GROUP BY Item;" },
        ]
      },
      having: {
        description: "The HAVING clause was added because the WHERE keyword cannot be used with aggregate functions.",
        syntax: "SELECT col, COUNT(*) FROM table GROUP BY col HAVING COUNT(*) > 5;",
        examples: [
          { name: "Filter Groups", code: "SELECT COUNT(ID), Country FROM Customers GROUP BY Country HAVING COUNT(ID) > 5;" },
        ]
      },
      orderby: {
        description: "The ORDER BY keyword is used to sort the result-set in ascending or descending order.",
        syntax: "SELECT * FROM table ORDER BY column ASC|DESC;",
        examples: [
          { name: "Ascending", code: "SELECT * FROM Customers ORDER BY Country;" },
          { name: "Descending", code: "SELECT * FROM Customers ORDER BY Country DESC;" },
        ]
      },
    };
  
    const currentTheme = getColorClasses(sections.find(s => s.id === activeSection)?.color);

    return (
      <div className="w-full space-y-6">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1 bg-slate-100/50 rounded-xl border border-slate-200">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const theme = getColorClasses(section.color);
            return (
                <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive 
                    ? `bg-white text-slate-800 shadow-sm ring-1 ring-slate-200` 
                    : `text-slate-500 hover:text-slate-700 hover:bg-slate-200/50`
                }`}
                >
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isActive ? theme.bg : 'bg-slate-300'}`}></span>
                {section.name}
                </button>
            )
          })}
        </div>
  
        {/* Main Content Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
            {/* Left Info Pane */}
            <div className={`p-6 md:w-5/12 border-b md:border-b-0 md:border-r border-slate-100 ${currentTheme.light}`}>
                <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${currentTheme.text}`}>
                        {sections.find((s) => s.id === activeSection)?.name}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm">
                        {content[activeSection].description}
                    </p>
                </div>

                <div className="bg-white/80 rounded-lg p-3 ring-1 ring-slate-200 shadow-sm backdrop-blur-sm">
                     <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Syntax</h4>
                     <code className="text-sm font-mono text-slate-800 break-all">
                        {content[activeSection].syntax}
                     </code>
                </div>
            </div>

            {/* Right Examples Pane */}
            <div className="p-6 md:w-7/12 bg-white flex flex-col space-y-4">
                <h4 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2 flex items-center">
                    <Terminal size={16} className="mr-2 text-slate-400" />
                    Examples
                </h4>
                
                <div className="space-y-3">
                    {content[activeSection].examples.map((example, index) => (
                        <div key={index} className="group">
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-1 px-1">
                                <span>{example.name}</span>
                            </div>
                            <div className="bg-slate-900 rounded-lg p-3 group-hover:ring-1 group-hover:ring-slate-300 transition-all">
                                <code className="text-emerald-400 font-mono text-xs block">
                                    {example.code}
                                </code>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        {/* Execution Order Hint */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                <Lightbulb size={18} />
            </div>
            <div>
                <h4 className="text-sm font-bold text-blue-900">Order of Execution</h4>
                <p className="text-xs text-blue-700 mt-1 mb-2">
                    SQL queries are not executed in the order they are written.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold">
                    <span className="bg-white px-2 py-1 rounded border border-blue-200 text-blue-800">1. FROM</span>
                    <span className="bg-white px-2 py-1 rounded border border-blue-200 text-blue-800">2. WHERE</span>
                    <span className="bg-white px-2 py-1 rounded border border-blue-200 text-blue-800">3. GROUP BY</span>
                    <span className="bg-white px-2 py-1 rounded border border-blue-200 text-blue-800">4. HAVING</span>
                    <span className="bg-white px-2 py-1 rounded border border-blue-200 text-blue-800">5. SELECT</span>
                    <span className="bg-white px-2 py-1 rounded border border-blue-200 text-blue-800">6. ORDER BY</span>
                </div>
            </div>
        </div>

      </div>
    );
  };
  
  export default QueryBasicsDiagram;
