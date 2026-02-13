'use client';
import React, { useState } from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';

const SqlJoinsDiagram = () => {
    const joins = [
        {
          id: "inner",
          name: "INNER JOIN",
          description: "Returns records that have matching values in both tables",
          syntax: "SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;",
          example: `SELECT Orders.OrderID, Customers.CustomerName
  FROM Orders
  INNER JOIN Customers
  ON Orders.CustomerID = Customers.CustomerID;`,
          use_case: "When you want data that exists in both tables",
        },
        {
          id: "left",
          name: "LEFT JOIN",
          description: "Returns all records from the left table, and matched records from the right table",
          syntax: "SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column;",
          example: `SELECT Customers.CustomerName, Orders.OrderID
  FROM Customers
  LEFT JOIN Orders
  ON Customers.CustomerID = Orders.CustomerID;`,
          use_case: "When you want all records from the first table regardless of matches",
        },
        {
          id: "right",
          name: "RIGHT JOIN",
          description: "Returns all records from the right table, and matched records from the left table",
          syntax: "SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;",
          example: `SELECT Orders.OrderID, Employees.LastName
  FROM Orders
  RIGHT JOIN Employees
  ON Orders.EmployeeID = Employees.EmployeeID;`,
          use_case: "When you want all records from the second table regardless of matches",
        },
        {
          id: "full",
          name: "FULL OUTER JOIN",
          description: "Returns all records when there is a match in either left or right table",
          syntax: "SELECT columns FROM table1 FULL OUTER JOIN table2 ON table1.column = table2.column;",
          example: `SELECT Customers.CustomerName, Orders.OrderID
  FROM Customers
  FULL OUTER JOIN Orders
  ON Customers.CustomerID = Orders.CustomerID;`,
          use_case: "When you want to see all records from both tables regardless of matches",
        },
        {
          id: "self",
          name: "SELF JOIN",
          description: "Joins a table to itself as if it were two tables",
          syntax: "SELECT columns FROM table1 t1, table1 t2 WHERE condition;",
          example: `SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
  FROM Customers A, Customers B
  WHERE A.CustomerID <> B.CustomerID
  AND A.City = B.City 
  ORDER BY A.City;`,
          use_case: "When you need to compare rows within the same table",
        },
        {
          id: "cross",
          name: "CROSS JOIN",
          description: "Returns the Cartesian product of both tables (all possible combinations)",
          syntax: "SELECT columns FROM table1 CROSS JOIN table2;",
          example: `SELECT Products.ProductName, Categories.CategoryName
  FROM Products
  CROSS JOIN Categories;`,
          use_case: "When you need all possible combinations of rows from two tables",
        },
      ];
  
    const [selectedJoin, setSelectedJoin] = useState(joins[0]);
  
    return (
      <div className="w-full h-full flex flex-col space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {joins.slice(0, 6).map((join) => (
            <button
              key={join.id}
              onClick={() => setSelectedJoin(join)}
              className={`relative flex flex-col items-center p-4 rounded-xl transition-all duration-200 border cursor-pointer group ${
                selectedJoin.id === join.id
                  ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20"
                  : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm"
              }`}
            >
              <div className="absolute top-3 left-3">
                <div className={`w-3 h-3 rounded-full ${selectedJoin.id === join.id ? 'bg-blue-500' : 'bg-slate-200 group-hover:bg-blue-200'}`} />
              </div>
              <div className={`text-sm font-semibold mb-3 ${selectedJoin.id === join.id ? 'text-blue-700' : 'text-slate-600'}`}>
                {join.name}
              </div>
              
              <svg width="120" height="80" viewBox="0 0 150 100" className="opacity-90">
                {/* Base Circles */}
                <circle cx="60" cy="50" r="40" fill={selectedJoin.id === join.id ? "#e0e7ff" : "#f1f5f9"} stroke={selectedJoin.id === join.id ? "#6366f1" : "#cbd5e1"} strokeWidth="1.5" />
                <circle cx="90" cy="50" r="40" fill={selectedJoin.id === join.id ? "#c7d2fe" : "#e2e8f0"} stroke={selectedJoin.id === join.id ? "#6366f1" : "#cbd5e1"} strokeWidth="1.5" />
  
                {/* Interactions */}
                {join.id === "inner" && (
                  <path d="M60,10 A40,40 0 0 1 60,90 A40,40 0 0 1 60,10 Z M90,10 A40,40 0 0 0 90,90 A40,40 0 0 0 90,10 Z" clipPath="url(#intersect)" fill="#4f46e5" fillOpacity="0.8" />
                )}
                
                {/* Manual intersection for better control */}
                 {join.id === "inner" && (
                     <path d="M90,14.6 L90,85.4 A40,40 0 0 1 60,85.4 L60,14.6 A40,40 0 0 1 90,14.6 Z" fill="none" /> 
                 )}
                 {/* Actually let's use the simple circle overlap logic from before but cleaner */}
                 {join.id === "inner" && (
                    <circle cx="75" cy="50" r="25" fill="#4f46e5" fillOpacity="0.8" /> // Approximation for visual simplicity
                 )}
  
                {join.id === "left" && (
                  <path d="M60,10 A40,40 0 0 1 60,90 A40,40 0 0 1 60,10 Z" fill="#4f46e5" fillOpacity="0.8" />
                )}
  
                {join.id === "right" && (
                  <path d="M90,10 A40,40 0 0 0 90,90 A40,40 0 0 0 90,10 Z" fill="#4f46e5" fillOpacity="0.8" />
                )}
  
                {join.id === "full" && (
                 <g>
                  <circle cx="60" cy="50" r="40" fill="#4f46e5" fillOpacity="0.8" />
                  <circle cx="90" cy="50" r="40" fill="#4f46e5" fillOpacity="0.8" />
                 </g>
                )}
  
                {join.id === "self" && (
                  <g>
                    <circle cx="60" cy="50" r="30" fill="#4f46e5" fillOpacity="0.2" stroke="#4f46e5" strokeWidth="2" />
                    <path d="M 85 50 A 30 30 0 1 1 60 20" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4,4" />
                    <polygon points="60,20 55,28 65,28" fill="#4f46e5" />
                  </g>
                )}
  
                {join.id === "cross" && (
                  <g>
                    <line x1="30" y1="50" x2="120" y2="50" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="75" y1="10" x2="75" y2="90" stroke="#4f46e5" strokeWidth="2" />
                    <circle cx="75" cy="50" r="4" fill="#6366f1" />
                    <circle cx="30" cy="50" r="4" fill="#6366f1" />
                    <circle cx="120" cy="50" r="4" fill="#6366f1" />
                    <circle cx="75" cy="10" r="4" fill="#6366f1" />
                    <circle cx="75" cy="90" r="4" fill="#6366f1" />
                  </g>
                )}
  
                {/* Labels */}
                {join.id !== "cross" && join.id !== "self" && (
                    <>
                    <text x="40" y="55" className="text-[10px] font-bold fill-current text-slate-500" textAnchor="middle">A</text>
                    <text x="110" y="55" className="text-[10px] font-bold fill-current text-slate-500" textAnchor="middle">B</text>
                    </>
                )}
              </svg>
            </button>
          ))}
        </div>
  
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
            <div className="p-6 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                        {selectedJoin.id} JOIN
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">{selectedJoin.name}</h2>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">Description</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{selectedJoin.description}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">Common Use Case</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{selectedJoin.use_case}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-2">Syntax</h3>
                        <div className="bg-slate-900 rounded-lg p-3 overflow-x-auto">
                            <code className="text-blue-300 font-mono text-xs">{selectedJoin.syntax}</code>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="p-6 lg:w-1/2 bg-slate-50/50 flex flex-col">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Example</h3>
                <div className="bg-white border border-slate-200 rounded-lg p-4 mb-4 flex-grow shadow-sm">
                    <pre className="text-xs font-mono text-slate-700 overflow-x-auto whitespace-pre-wrap">
                        {selectedJoin.example}
                    </pre>
                </div>
  
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start space-x-3">
                    <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-xs font-bold text-amber-800 mb-0.5">Pro Tip</h4>
                        <p className="text-xs text-amber-700 leading-relaxed">
                            {selectedJoin.id === "inner" && "Most performant join. Use it as your default choice when you only need matching records."}
                            {selectedJoin.id === "left" && "Great for finding 'orphaned' records. Check for NULLs in the right table to find non-matches."}
                            {selectedJoin.id === "right" && "Rarely used. You can almost always rewrite this as a LEFT JOIN for better readability."}
                            {selectedJoin.id === "full" && "Can be very slow on large tables. Ensure you filter the results if possible."}
                            {selectedJoin.id === "self" && "Essential for hierarchical data like organizational charts or category trees."}
                            {selectedJoin.id === "cross" && "Be careful! Generates N x M rows. A 100-row table joined with a 100-row table creates 10,000 rows."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default SqlJoinsDiagram;
