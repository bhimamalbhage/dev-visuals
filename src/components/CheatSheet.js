import React, { useState } from 'react';
import { AlignJustify, Code, Database, FileCode, Layout, Search, X, BookOpen, Terminal, Server } from 'lucide-react';

const CheatSheet = () => {
  const [selectedTopic, setSelectedTopic] = useState('sql');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDiagram, setActiveDiagram] = useState('joins');

  const topics = [
    { id: 'sql', name: 'SQL', icon: <Database size={20} /> },
    { id: 'react', name: 'React', icon: <Code size={20} /> },
    { id: 'javascript', name: 'JavaScript', icon: <FileCode size={20} /> },
    { id: 'oops', name: 'OOPs', icon: <Layout size={20} /> },
    { id: 'system-design', name: 'System Design', icon: <Server size={20} /> }
  ];

  const diagrams = {
    sql: [
      { id: 'joins', name: 'SQL Joins' },
      { id: 'query-basics', name: 'Query Basics' },
      { id: 'data-types', name: 'Data Types' },
      { id: 'indexes', name: 'Indexes' },
      { id: 'aggregations', name: 'Aggregations' }
    ],
    react: [
      { id: 'component-lifecycle', name: 'Component Lifecycle' },
      { id: 'hooks-overview', name: 'Hooks Overview' },
      { id: 'jsx-syntax', name: 'JSX Syntax' }
    ],
    javascript: [
      { id: 'data-types', name: 'Data Types' },
      { id: 'array-methods', name: 'Array Methods' }
    ],
    oops: [
      { id: 'inheritance', name: 'Inheritance' },
      { id: 'polymorphism', name: 'Polymorphism' }
    ],
    'system-design': [
      { id: 'microservices', name: 'Microservices' },
      { id: 'db-scaling', name: 'Database Scaling' }
    ]
  };

  // Helper function to get color based on name
  const getColor = (colorName) => {
    const colorMap = {
      'blue': '#3b82f6',
      'green': '#10b981',
      'purple': '#8b5cf6',
      'orange': '#f97316',
      'pink': '#ec4899'
    };
    return colorMap[colorName] || '#3b82f6';
  };

  const SqlJoinsDiagram = () => {
    const joins = [
      { 
        id: 'inner', 
        name: 'INNER JOIN', 
        description: 'Returns records that have matching values in both tables',
        syntax: 'SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;',
        example: `SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;`,
        use_case: 'When you want data that exists in both tables'
      },
      { 
        id: 'left', 
        name: 'LEFT JOIN', 
        description: 'Returns all records from the left table, and matched records from the right table',
        syntax: 'SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column;',
        example: `SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;`,
        use_case: 'When you want all records from the first table regardless of matches'
      },
      { 
        id: 'right', 
        name: 'RIGHT JOIN', 
        description: 'Returns all records from the right table, and matched records from the left table',
        syntax: 'SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;',
        example: `SELECT Orders.OrderID, Employees.LastName
FROM Orders
RIGHT JOIN Employees
ON Orders.EmployeeID = Employees.EmployeeID;`,
        use_case: 'When you want all records from the second table regardless of matches'
      },
      { 
        id: 'full', 
        name: 'FULL OUTER JOIN', 
        description: 'Returns all records when there is a match in either left or right table',
        syntax: 'SELECT columns FROM table1 FULL OUTER JOIN table2 ON table1.column = table2.column;',
        example: `SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;`,
        use_case: 'When you want to see all records from both tables regardless of matches'
      },
      {
        id: 'self',
        name: 'SELF JOIN',
        description: 'Joins a table to itself as if it were two tables',
        syntax: 'SELECT columns FROM table1 t1, table1 t2 WHERE condition;',
        example: `SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City 
ORDER BY A.City;`,
        use_case: 'When you need to compare rows within the same table'
      },
      {
        id: 'cross',
        name: 'CROSS JOIN',
        description: 'Returns the Cartesian product of both tables (all possible combinations)',
        syntax: 'SELECT columns FROM table1 CROSS JOIN table2;',
        example: `SELECT Products.ProductName, Categories.CategoryName
FROM Products
CROSS JOIN Categories;`,
        use_case: 'When you need all possible combinations of rows from two tables'
      }
    ];

    const [selectedJoin, setSelectedJoin] = useState(joins[0]);

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-bold mb-6 text-center">SQL Joins Visualization</h3>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            {joins.slice(0, 6).map(join => (
              <div 
                key={join.id} 
                className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all ${selectedJoin.id === join.id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border border-gray-200 hover:border-blue-300'}`}
                onClick={() => setSelectedJoin(join)}
              >
                <div className="text-center mb-2 font-semibold">{join.name}</div>
                <svg width="120" height="80" viewBox="0 0 150 100">
                  <circle cx="60" cy="50" r="40" fill="#93c5fd" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="90" cy="50" r="40" fill="#bfdbfe" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="2" />
                  
                  {join.id === 'inner' && (
                    <circle cx="75" cy="50" r="25" fill="#2563eb" fillOpacity="0.7" />
                  )}
                  
                  {join.id === 'left' && (
                    <path d="M60,10 A40,40 0 0 1 60,90 A40,40 0 0 1 60,10 Z" fill="#2563eb" fillOpacity="0.7" />
                  )}
                  
                  {join.id === 'right' && (
                    <path d="M90,10 A40,40 0 0 0 90,90 A40,40 0 0 0 90,10 Z" fill="#2563eb" fillOpacity="0.7" />
                  )}
                  
                  {join.id === 'full' && (
                    <path d="M60,10 A40,40 0 0 1 60,90 A40,40 0 0 1 60,10 Z M90,10 A40,40 0 0 0 90,90 A40,40 0 0 0 90,10 Z" fill="#2563eb" fillOpacity="0.7" />
                  )}
                  
                  {join.id === 'self' && (
                    <g>
                      <circle cx="60" cy="50" r="25" fill="#2563eb" fillOpacity="0.7" />
                      <path d="M 85 50 A 30 30 0 1 1 60 20" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="5,5" />
                      <polygon points="60,20 55,30 65,30" fill="#2563eb" />
                    </g>
                  )}
                  
                  {join.id === 'cross' && (
                    <g>
                      <line x1="20" y1="50" x2="130" y2="50" stroke="#2563eb" strokeWidth="3" />
                      <line x1="75" y1="10" x2="75" y2="90" stroke="#2563eb" strokeWidth="3" />
                      <circle cx="75" cy="50" r="8" fill="#2563eb" />
                    </g>
                  )}
                  
                  <text x="40" y="50" textAnchor="middle" fill="#1e40af" fontWeight="bold">A</text>
                  <text x="110" y="50" textAnchor="middle" fill="#1e40af" fontWeight="bold">B</text>
                </svg>
              </div>
            ))}
          </div>
          
          <div className="flex-grow bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-blue-700 border-b border-blue-200 pb-2">{selectedJoin.name}</h4>
                <div>
                  <h5 className="font-semibold text-gray-700">Description:</h5>
                  <p className="text-gray-600">{selectedJoin.description}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700">Common Use Case:</h5>
                  <p className="text-gray-600">{selectedJoin.use_case}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700">Syntax:</h5>
                  <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                    <code className="text-blue-600">{selectedJoin.syntax}</code>
                  </pre>
                </div>
              </div>
              
              <div className="space-y-4">
                <h5 className="font-semibold text-gray-700">Example:</h5>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto h-44">
                  <code className="text-blue-600">{selectedJoin.example}</code>
                </pre>
                
                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800 flex items-center">
                    <BookOpen size={16} className="mr-1" /> Pro Tip:
                  </h5>
                  <p className="text-yellow-700 text-sm mt-1">
                    {selectedJoin.id === 'inner' && "INNER JOIN is the most commonly used join and has the best performance. Use when you only need matching records."}
                    {selectedJoin.id === 'left' && "Always check for NULL values in the result set when using LEFT JOIN to identify records that don't have matches."}
                    {selectedJoin.id === 'right' && "RIGHT JOIN is less common; the same result can often be achieved by swapping tables and using LEFT JOIN."}
                    {selectedJoin.id === 'full' && "FULL OUTER JOIN can be resource-intensive. Consider if you really need all records from both tables."}
                    {selectedJoin.id === 'self' && "Self joins are powerful for hierarchical data like employee-manager relationships or category trees."}
                    {selectedJoin.id === 'cross' && "Use CROSS JOIN with caution as it produces a row for every combination of rows in the tables, which can be very large."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const QueryBasicsDiagram = () => {
    const [activeSection, setActiveSection] = useState('select');
    
    const sections = [
      { id: 'select', name: 'SELECT', color: 'blue' },
      { id: 'where', name: 'WHERE', color: 'green' },
      { id: 'groupby', name: 'GROUP BY', color: 'purple' },
      { id: 'having', name: 'HAVING', color: 'orange' },
      { id: 'orderby', name: 'ORDER BY', color: 'pink' }
    ];
    
    const content = {
      select: {
        description: "The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.",
        syntax: "SELECT column1, column2, ... FROM table_name;",
        examples: [
          { name: "Select All", code: "SELECT * FROM Customers;" },
          { name: "Select Specific Columns", code: "SELECT CustomerName, City FROM Customers;" },
          { name: "Select Distinct Values", code: "SELECT DISTINCT Country FROM Customers;" },
          { name: "Select with Calculation", code: "SELECT ProductName, Price * Quantity AS Total FROM OrderDetails;" }
        ]
      },
      where: {
        description: "The WHERE clause is used to filter records. It extracts only those records that fulfill a specified condition.",
        syntax: "SELECT column1, column2, ... FROM table_name WHERE condition;",
        examples: [
          { name: "Equal", code: "SELECT * FROM Products WHERE Price = 18;" },
          { name: "Greater Than", code: "SELECT * FROM Products WHERE Price > 30;" },
          { name: "Between Range", code: "SELECT * FROM Products WHERE Price BETWEEN 50 AND 60;" },
          { name: "Pattern Matching", code: "SELECT * FROM Customers WHERE City LIKE 'L%';" },
          { name: "Multiple Conditions", code: "SELECT * FROM Customers WHERE Country='Germany' AND City='Berlin';" }
        ]
      },
      groupby: {
        description: "The GROUP BY statement groups rows that have the same values into summary rows, like 'find the number of customers in each country'.",
        syntax: "SELECT column_name(s), aggregate_function(column_name) FROM table_name WHERE condition GROUP BY column_name(s);",
        examples: [
          { name: "Count by Group", code: "SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;" },
          { name: "Sum by Group", code: "SELECT ProductID, SUM(Quantity) AS TotalOrdered FROM OrderDetails GROUP BY ProductID;" },
          { name: "Multiple Columns", code: "SELECT ShipperID, ProductID, SUM(Quantity) FROM Orders GROUP BY ShipperID, ProductID;" }
        ]
      },
      having: {
        description: "The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.",
        syntax: "SELECT column_name(s), aggregate_function(column_name) FROM table_name WHERE condition GROUP BY column_name(s) HAVING condition;",
        examples: [
          { name: "Filter Groups", code: "SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 5;" },
          { name: "With Sum", code: "SELECT ProductID, SUM(Quantity) AS Total FROM OrderDetails GROUP BY ProductID HAVING SUM(Quantity) > 100;" }
        ]
      },
      orderby: {
        description: "The ORDER BY keyword is used to sort the result-set in ascending or descending order.",
        syntax: "SELECT column1, column2, ... FROM table_name ORDER BY column1, column2, ... ASC|DESC;",
        examples: [
          { name: "Ascending Order", code: "SELECT * FROM Customers ORDER BY Country;" },
          { name: "Descending Order", code: "SELECT * FROM Customers ORDER BY Country DESC;" },
          { name: "Multiple Columns", code: "SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;" }
        ]
      }
    };
    
    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">SQL Query Basics</h3>
        
        <div className="flex space-x-2 mb-6">
          {sections.map(section => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded-md font-medium ${activeSection === section.id 
                ? `bg-${section.color}-500 text-white` 
                : `bg-gray-200 text-gray-700 hover:bg-gray-300`}`}
              onClick={() => setActiveSection(section.id)}
              style={activeSection === section.id ? {backgroundColor: getColor(section.color)} : {}}
            >
              {section.name}
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-6 border-b pb-4 border-gray-200">
            <h4 className="text-xl font-bold mb-2" style={{color: getColor(sections.find(s => s.id === activeSection)?.color)}}>
              {sections.find(s => s.id === activeSection)?.name}
            </h4>
            <p className="text-gray-700">{content[activeSection].description}</p>
          </div>
          
          <div className="mb-6">
            <h5 className="font-semibold text-gray-700 mb-2">Syntax:</h5>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
              <code className="text-blue-600">{content[activeSection].syntax}</code>
            </pre>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Examples:</h5>
            <div className="space-y-4">
              {content[activeSection].examples.map((example, index) => (
                <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                  <div className="bg-gray-100 px-3 py-1 border-b border-gray-200 font-medium text-sm">
                    {example.name}
                  </div>
                  <pre className="p-3 text-sm overflow-x-auto m-0">
                    <code className="text-blue-600">{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
            <h5 className="font-semibold text-gray-700 mb-2 flex items-center">
              <Terminal size={16} className="mr-2" /> Query Order of Execution:
            </h5>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li className={activeSection === 'select' ? 'font-bold text-blue-700' : ''}>FROM - Specifies tables to query</li>
              <li className={activeSection === 'where' ? 'font-bold text-green-700' : ''}>WHERE - Filters rows</li>
              <li className={activeSection === 'groupby' ? 'font-bold text-purple-700' : ''}>GROUP BY - Groups rows</li>
              <li className={activeSection === 'having' ? 'font-bold text-orange-700' : ''}>HAVING - Filters groups</li>
              <li className={activeSection === 'select' ? 'font-bold text-blue-700' : ''}>SELECT - Returns columns</li>
              <li className={activeSection === 'orderby' ? 'font-bold text-pink-700' : ''}>ORDER BY - Sorts results</li>
              <li>LIMIT/OFFSET - Limits number of returned rows</li>
            </ol>
          </div>
        </div>
      </div>
    );
  };

  const SqlDataTypesDiagram = () => {
    const dataTypeCategories = [
      {
        name: "Numeric Types",
        types: [
          { name: "INTEGER", description: "A whole number without a decimal point", example: "42", range: "-2,147,483,648 to 2,147,483,647" },
          { name: "SMALLINT", description: "A small integer", example: "1024", range: "-32,768 to 32,767" },
          { name: "BIGINT", description: "A large integer", example: "9223372036854775807", range: "-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807" },
          { name: "DECIMAL(p,s)", description: "Exact numeric with precision p and scale s", example: "123.45", range: "Depends on precision" },
          { name: "NUMERIC(p,s)", description: "Exact numeric with precision p and scale s", example: "123.45", range: "Depends on precision" },
          { name: "FLOAT", description: "Approximate numeric value", example: "3.14159", range: "±1.79E+308 (varies by database)" },
          { name: "REAL", description: "Single precision floating point", example: "3.14", range: "±3.40E+38 (varies by database)" }
        ]
      },
      {
        name: "String Types",
        types: [
          { name: "CHAR(n)", description: "Fixed-length character string", example: "'text'", range: "1 to 255 characters (varies)" },
          { name: "VARCHAR(n)", description: "Variable-length character string", example: "'text'", range: "1 to 65,535 characters (varies)" },
          { name: "TEXT", description: "Variable-length character string", example: "'long text...'", range: "Up to 65,535 characters (varies)" },
          { name: "NVARCHAR(n)", description: "Variable-length Unicode string", example: "N'text'", range: "1 to 4,000 characters (varies)" },
          { name: "CLOB", description: "Character Large Object", example: "Very long text...", range: "Up to 2GB (varies)" }
        ]
      },
      {
        name: "Date and Time Types",
        types: [
          { name: "DATE", description: "Date value (year, month, day)", example: "'2023-04-13'", range: "1000-01-01 to 9999-12-31 (varies)" },
          { name: "TIME", description: "Time value (hour, minute, second)", example: "'13:45:30'", range: "00:00:00 to 23:59:59" },
          { name: "DATETIME", description: "Date and time value", example: "'2023-04-13 13:45:30'", range: "Varies by database" },
          { name: "TIMESTAMP", description: "Date and time with time zone", example: "'2023-04-13 13:45:30+00'", range: "Varies by database" },
          { name: "INTERVAL", description: "Time period", example: "INTERVAL '1' DAY", range: "Varies by database" }
        ]
      },
      {
        name: "Binary Types",
        types: [
          { name: "BINARY(n)", description: "Fixed-length binary data", example: "0x1234", range: "1 to 255 bytes (varies)" },
          { name: "VARBINARY(n)", description: "Variable-length binary data", example: "0x1234", range: "1 to 65,535 bytes (varies)" },
          { name: "BLOB", description: "Binary Large Object", example: "Binary data...", range: "Up to 4GB (varies)" }
        ]
      },
      {
        name: "Boolean Type",
        types: [
          { name: "BOOLEAN", description: "Logical boolean (true/false)", example: "TRUE, FALSE", range: "TRUE, FALSE, NULL" }
        ]
      },
      {
        name: "Other Types",
        types: [
          { name: "JSON", description: "JSON data", example: "{'name': 'John', 'age': 30}", range: "Varies by database" },
          { name: "XML", description: "XML data", example: "<person><n>John</n></person>", range: "Varies by database" },
          { name: "UUID", description: "Universally Unique Identifier", example: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11", range: "128-bit value" },
          { name: "ENUM", description: "Enumeration of strings", example: "ENUM('small', 'medium', 'large')", range: "Limited by definition" }
        ]
      }
    ];

    const [activeCategory, setActiveCategory] = useState(dataTypeCategories[0].name);

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">SQL Data Types</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {dataTypeCategories.map(category => (
            <button
              key={category.name}
              className={`px-3 py-1 rounded-md text-sm ${
                activeCategory === category.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <h4 className="text-xl font-bold mb-4 text-blue-700">{activeCategory}</h4>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Range</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dataTypeCategories.find(c => c.name === activeCategory)?.types.map((type, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-blue-600">{type.name}</td>
                    <td className="px-6 py-4 text-gray-700">{type.description}</td>
                    <td className="px-6 py-4">
                      <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">{type.example}</code>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{type.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
            <h5 className="font-semibold text-blue-700 mb-2">Usage Tips:</h5>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              {activeCategory === "Numeric Types" && (
                <>
                  <li>Use INTEGER for whole numbers when possible</li>
                  <li>Use DECIMAL/NUMERIC for exact financial calculations</li>
                  <li>FLOAT/REAL may have precision issues for exact values</li>
                </>
              )}
              {activeCategory === "String Types" && (
                <>
                  <li>Use VARCHAR instead of CHAR when the length varies</li>
                  <li>Set appropriate length constraints to save storage</li>
                  <li>Use TEXT for very long strings without specific length</li>
                </>
              )}
              {activeCategory === "Date and Time Types" && (
                <>
                  <li>Store dates in ISO format (YYYY-MM-DD) for consistency</li>
                  <li>Use TIMESTAMP for event logging with time zone awareness</li>
                  <li>Consider time zones when working with global applications</li>
                </>
              )}
              {activeCategory === "Binary Types" && (
                <>
                  <li>Use BLOB for storing images, documents, or other binary files</li>
                  <li>Consider file system storage for very large binaries</li>
                </>
              )}
              {activeCategory === "Boolean Type" && (
                <>
                  <li>Some databases use TINYINT(1) instead of BOOLEAN</li>
                  <li>TRUE can be represented as 1, FALSE as 0</li>
                </>
              )}
              {activeCategory === "Other Types" && (
                <>
                  <li>JSON type allows for flexible schema design</li>
                  <li>Use UUID for globally unique identifiers</li>
                  <li>ENUM provides type safety but can be difficult to alter later</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const SqlIndexesDiagram = () => {
    const indexTypes = [
      {
        name: "B-Tree Index",
        description: "The default index type in most databases. Balanced tree structure for efficient lookups, range queries, and sorting.",
        benefits: ["Good for equality (=) and range (>, <, BETWEEN) searches", "Supports sorting operations (ORDER BY)", "Works well with high-cardinality columns"],
        limitations: ["Less efficient for low-cardinality columns", "Not ideal for full text searches", "Storage overhead increases with index size"],
        example: "CREATE INDEX idx_customer_name ON Customers(CustomerName);"
      },
      {
        name: "Unique Index",
        description: "Ensures all values in the indexed column(s) are unique. Prevents duplicate values in the column(s).",
        benefits: ["Enforces data integrity", "Improves query performance", "Can be used to implement primary and unique keys"],
        limitations: ["Cannot insert duplicate values", "Slightly more overhead than non-unique indexes"],
        example: "CREATE UNIQUE INDEX idx_email ON Users(Email);"
      },
      {
        name: "Composite Index",
        description: "An index on multiple columns. The order of columns is important for query optimization.",
        benefits: ["Useful for queries that filter on multiple columns", "Can improve performance of JOIN operations", "Can cover more queries with fewer indexes"],
        limitations: ["Only effective when leading columns are in the filter", "More maintenance overhead than single-column indexes"],
        example: "CREATE INDEX idx_last_first ON Employees(LastName, FirstName);"
      },
      {
        name: "Full-Text Index",
        description: "Specialized index type designed for text searching in documents or large text fields.",
        benefits: ["Enables efficient text searches", "Supports linguistic matching", "Can handle stemming, synonyms, and stop words"],
        limitations: ["Higher storage and maintenance overhead", "Not available in all databases", "May not perform well for non-text operations"],
        example: "CREATE FULLTEXT INDEX idx_product_description ON Products(Description);"
      },
      {
        name: "Hash Index",
        description: "Uses a hash function to map key values to index entries. Very fast for exact match lookups.",
        benefits: ["Extremely fast for equality searches", "Constant-time lookup performance", "Compact storage for some implementations"],
        limitations: ["Cannot support range-based queries", "No sorting capability", "Not efficient for partial matches (LIKE)"],
        example: "CREATE INDEX idx_customer_id ON Customers USING HASH (CustomerID);"
      }
    ];

    const [selectedIndex, setSelectedIndex] = useState(indexTypes[0]);

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">SQL Indexes</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-6">
          {indexTypes.map(indexType => (
            <button
              key={indexType.name}
              className={`px-3 py-2 rounded-md text-sm ${selectedIndex.name === indexType.name 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setSelectedIndex(indexType)}
            >
              {indexType.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg p-4 shadow">
            <h4 className="text-xl font-bold text-blue-700 mb-4">{selectedIndex.name}</h4>
            <p className="text-gray-700 mb-6">{selectedIndex.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {selectedIndex.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-2">Limitations</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {selectedIndex.limitations.map((limitation, idx) => (
                    <li key={idx}>{limitation}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-lg font-semibold text-gray-800 mb-2">Example</h5>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                <code className="text-blue-600">{selectedIndex.example}</code>
              </pre>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="text-lg font-bold mb-4 text-gray-800">Index Guidelines</h4>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                <h5 className="font-semibold text-blue-700">When to Use Indexes</h5>
                <ul className="list-disc pl-5 mt-2 text-sm text-blue-800 space-y-1">
                  <li>Columns used in WHERE clauses</li>
                  <li>Columns used in JOIN conditions</li>
                  <li>Columns used in ORDER BY or GROUP BY</li>
                  <li>Large tables with frequent queries</li>
                  <li>Columns with high cardinality (many unique values)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100">
                <h5 className="font-semibold text-yellow-700">When to Avoid Indexes</h5>
                <ul className="list-disc pl-5 mt-2 text-sm text-yellow-800 space-y-1">
                  <li>Small tables (full table scans are often faster)</li>
                  <li>Columns rarely used in queries</li>
                  <li>Columns with low cardinality (few unique values)</li>
                  <li>Tables with frequent INSERT/UPDATE operations</li>
                  <li>Columns containing large values (BLOBs, TEXT)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-3 rounded-md border border-green-100">
                <h5 className="font-semibold text-green-700">Performance Tips</h5>
                <ul className="list-disc pl-5 mt-2 text-sm text-green-800 space-y-1">
                  <li>Put most selective columns first in composite indexes</li>
                  <li>Consider covering indexes for frequent queries</li>
                  <li>Remove unused indexes to improve write performance</li>
                  <li>Regularly rebuild indexes on fragmented tables</li>
                  <li>Monitor index usage with database tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SqlAggregationsDiagram = () => {
    const aggregations = [
      {
        name: "COUNT",
        description: "Counts the number of rows or non-NULL values in a column",
        syntax: "COUNT(*) or COUNT(column_name)",
        examples: [
          { label: "Count all rows", code: "SELECT COUNT(*) FROM Customers;" },
          { label: "Count non-NULL values", code: "SELECT COUNT(City) FROM Customers;" },
          { label: "Count with grouping", code: "SELECT Country, COUNT(*) FROM Customers GROUP BY Country;" },
          { label: "Count distinct values", code: "SELECT COUNT(DISTINCT Country) FROM Customers;" }
        ]
      },
      {
        name: "SUM",
        description: "Calculates the sum of a set of values",
        syntax: "SUM(column_name)",
        examples: [
          { label: "Sum a column", code: "SELECT SUM(Quantity) FROM OrderDetails;" },
          { label: "Sum with condition", code: "SELECT SUM(Price) FROM Products WHERE CategoryID = 1;" },
          { label: "Sum with calculation", code: "SELECT SUM(Price * Quantity) FROM OrderDetails;" },
          { label: "Sum by group", code: "SELECT ProductID, SUM(Quantity) FROM OrderDetails GROUP BY ProductID;" }
        ]
      },
      {
        name: "AVG",
        description: "Calculates the average of a set of values",
        syntax: "AVG(column_name)",
        examples: [
          { label: "Average value", code: "SELECT AVG(Price) FROM Products;" },
          { label: "Average with filters", code: "SELECT AVG(Price) FROM Products WHERE CategoryID = 2;" },
          { label: "Average by group", code: "SELECT CategoryID, AVG(Price) FROM Products GROUP BY CategoryID;" },
          { label: "Average with HAVING", code: "SELECT CategoryID, AVG(Price) FROM Products GROUP BY CategoryID HAVING AVG(Price) > 20;" }
        ]
      },
      {
        name: "MIN / MAX",
        description: "Returns the minimum or maximum value in a set",
        syntax: "MIN(column_name) or MAX(column_name)",
        examples: [
          { label: "Find minimum", code: "SELECT MIN(Price) FROM Products;" },
          { label: "Find maximum", code: "SELECT MAX(Price) FROM Products;" },
          { label: "Min/Max with grouping", code: "SELECT CategoryID, MIN(Price), MAX(Price) FROM Products GROUP BY CategoryID;" },
          { label: "Find record with max value", code: "SELECT * FROM Products WHERE Price = (SELECT MAX(Price) FROM Products);" }
        ]
      },
      {
        name: "GROUP_CONCAT",
        description: "Concatenates values from multiple rows into a single string",
        syntax: "GROUP_CONCAT(column_name)",
        examples: [
          { label: "Basic concatenation", code: "SELECT CategoryID, GROUP_CONCAT(ProductName) FROM Products GROUP BY CategoryID;" },
          { label: "With separator", code: "SELECT CategoryID, GROUP_CONCAT(ProductName SEPARATOR ', ') FROM Products GROUP BY CategoryID;" },
          { label: "With ordering", code: "SELECT CategoryID, GROUP_CONCAT(ProductName ORDER BY Price DESC) FROM Products GROUP BY CategoryID;" },
          { label: "With DISTINCT", code: "SELECT GROUP_CONCAT(DISTINCT City ORDER BY City) FROM Customers;" }
        ]
      }
    ];

    const [selectedAgg, setSelectedAgg] = useState(aggregations[0]);

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">SQL Aggregation Functions</h3>
        
        <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
          {aggregations.map(agg => (
            <button
              key={agg.name}
              className={`px-4 py-2 rounded-md font-medium whitespace-nowrap ${selectedAgg.name === agg.name
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setSelectedAgg(agg)}
            >
              {agg.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-bold text-blue-700 mb-2">{selectedAgg.name}</h4>
            <p className="text-gray-700 mb-4">{selectedAgg.description}</p>
            
            <div className="mb-6">
              <h5 className="font-semibold text-gray-700 mb-2">Syntax:</h5>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                <code className="text-blue-600">{selectedAgg.syntax}</code>
              </pre>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
              <h5 className="font-semibold text-blue-700 mb-2">Key Points:</h5>
              <ul className="list-disc pl-5 space-y-1 text-blue-800 text-sm">
                {selectedAgg.name === "COUNT" && (
                  <>
                    <li>COUNT(*) includes NULL values, COUNT(column) excludes them</li>
                    <li>Often used with GROUP BY to count items per category</li>
                    <li>DISTINCT keyword removes duplicates before counting</li>
                    <li>One of the most commonly used aggregate functions</li>
                  </>
                )}
                {selectedAgg.name === "SUM" && (
                  <>
                    <li>Only works with numeric columns</li>
                    <li>Ignores NULL values</li>
                    <li>Can be used with mathematical expressions</li>
                    <li>Often used for financial and quantity calculations</li>
                  </>
                )}
                {selectedAgg.name === "AVG" && (
                  <>
                    <li>Only works with numeric columns</li>
                    <li>Ignores NULL values (potentially skewing results)</li>
                    <li>May need to use COALESCE to handle NULL values</li>
                    <li>Consider using with ROUND() for cleaner output</li>
                  </>
                )}
                {selectedAgg.name === "MIN / MAX" && (
                  <>
                    <li>Works with numbers, text, and dates</li>
                    <li>Ignores NULL values</li>
                    <li>Often used to find boundaries in data sets</li>
                    <li>Can be used in subqueries to find records with extreme values</li>
                  </>
                )}
                {selectedAgg.name === "GROUP_CONCAT" && (
                  <>
                    <li>MySQL/MariaDB specific (other DBs have equivalents)</li>
                    <li>SQL Server uses STRING_AGG(), PostgreSQL uses STRING_AGG() or ARRAY_AGG()</li>
                    <li>Useful for creating comma-separated lists from rows</li>
                    <li>May have length limitations based on DB settings</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h5 className="font-semibold text-gray-700 mb-3">Examples:</h5>
            <div className="space-y-4">
              {selectedAgg.examples.map((example, idx) => (
                <div key={idx} className="border border-gray-200 rounded-md overflow-hidden">
                  <div className="bg-gray-100 px-3 py-1 border-b border-gray-200 font-medium text-sm">
                    {example.label}
                  </div>
                  <pre className="p-3 text-sm overflow-x-auto m-0">
                    <code className="text-blue-600">{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-100">
              <h5 className="font-semibold text-yellow-700 mb-2">Common Pitfalls:</h5>
              <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-1">
                {selectedAgg.name === "COUNT" && (
                  <>
                    <li>Forgetting that COUNT(column) excludes NULL values</li>
                    <li>Using COUNT in a SELECT without GROUP BY returns only one row</li>
                    <li>Can be slow on large tables without proper indexing</li>
                  </>
                )}
                {selectedAgg.name === "SUM" && (
                  <>
                    <li>NULL values are ignored, which may lead to unexpected results</li>
                    <li>Potential for overflow with very large sums</li>
                    <li>Type conversion issues when mixing data types</li>
                  </>
                )}
                {selectedAgg.name === "AVG" && (
                  <>
                    <li>NULL values are excluded from both count and sum</li>
                    <li>May return unexpected decimal precision</li>
                    <li>Consider using weighted averages for some calculations</li>
                  </>
                )}
                {selectedAgg.name === "MIN / MAX" && (
                  <>
                    <li>String comparisons follow collation rules</li>
                    <li>Date formats must be consistent for proper comparisons</li>
                    <li>May be slow without proper indexing</li>
                  </>
                )}
                {selectedAgg.name === "GROUP_CONCAT" && (
                  <>
                    <li>Default output length may be limited (adjust group_concat_max_len)</li>
                    <li>Order of concatenation not guaranteed without ORDER BY</li>
                    <li>Not available in all database systems</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDiagram = () => {
    if (selectedTopic === 'sql') {
      if (activeDiagram === 'joins') {
        return <SqlJoinsDiagram />;
      } else if (activeDiagram === 'query-basics') {
        return <QueryBasicsDiagram />;
      } else if (activeDiagram === 'data-types') {
        return <SqlDataTypesDiagram />;
      } else if (activeDiagram === 'indexes') {
        return <SqlIndexesDiagram />;
      } else if (activeDiagram === 'aggregations') {
        return <SqlAggregationsDiagram />;
      }
    }
    
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500">Select a topic and diagram to view</p>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile menu button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md"
      >
        {menuOpen ? <X size={20} /> : <AlignJustify size={20} />}
      </button>
      
      {/* Sidebar */}
      <div className={`w-64 bg-white shadow-md z-40 transition-all ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static h-full`}>
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-700">Dev Visuals</h1>
          <p className="text-xs text-gray-500">Visual Programming Cheatsheets</p>
        </div>
        
        <div className="p-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
          </div>
        </div>
        
        <nav className="p-3">
          <ul className="space-y-1">
            {topics.map(topic => (
              <li key={topic.id}>
                <button
                  className={`w-full flex items-center p-2 rounded-md ${selectedTopic === topic.id ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => {
                    setSelectedTopic(topic.id);
                    setActiveDiagram(diagrams[topic.id][0]?.id);
                    setMenuOpen(false);
                  }}
                >
                  <span className="mr-2">{topic.icon}</span>
                  {topic.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {topics.find(t => t.id === selectedTopic)?.name || 'Select a Topic'}
          </h2>
        </header>
        
        {/* Diagram tabs */}
        <div className="mb-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {diagrams[selectedTopic]?.map(diagram => (
              <button
                key={diagram.id}
                className={`px-3 py-1 rounded-md text-sm whitespace-nowrap ${activeDiagram === diagram.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveDiagram(diagram.id)}
              >
                {diagram.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Diagram display */}
        <div className="mt-4">
          {renderDiagram()}
        </div>
      </div>
    </div>
  );
};

export default CheatSheet;