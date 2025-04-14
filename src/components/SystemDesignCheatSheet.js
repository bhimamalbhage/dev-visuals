import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Globe, 
  Layers, 
  Shield, 
  BarChart, 
  Clock,
  HardDrive
} from 'lucide-react';

const SystemDesignCheatSheet = () => {
  const [activeDiagram, setActiveDiagram] = useState('architecture-patterns');

  const diagrams = [
    { id: 'architecture-patterns', name: 'Architecture Patterns' },
    // We'll add more tabs later:
    // { id: 'scalability', name: 'Scalability' },
    // { id: 'databases', name: 'Database Selection' },
    // { id: 'caching', name: 'Caching Strategies' },
    // { id: 'api-design', name: 'API Design' }
  ];

  const ArchitecturePatternsDiagram = () => {
    const [selectedPattern, setSelectedPattern] = useState('microservices');

    const patterns = [
      {
        id: 'monolithic',
        name: 'Monolithic',
        icon: <HardDrive size={20} />,
        description: 'A single, unified codebase where all components and modules are combined into one application.',
        advantages: [
          'Simple development and deployment',
          'Easier testing and debugging',
          'Good performance for small applications',
          'Simpler team structure initially'
        ],
        disadvantages: [
          'Difficult to scale individual components',
          'Technology stack tied to initial choices',
          'Larger codebases get unwieldy over time',
          'Continuous deployment becomes challenging'
        ],
        diagram: (
          <svg width="280" height="200" viewBox="0 0 280 200">
            <rect x="40" y="20" width="200" height="160" rx="8" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
            <rect x="60" y="40" width="160" height="30" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="140" y="60" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">UI Layer</text>
            <rect x="60" y="85" width="160" height="30" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
            <text x="140" y="105" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="bold">Business Logic</text>
            <rect x="60" y="130" width="160" height="30" rx="4" fill="#fed7aa" stroke="#f97316" strokeWidth="2" />
            <text x="140" y="150" textAnchor="middle" fill="#9a3412" fontSize="14" fontWeight="bold">Data Access</text>
            <text x="140" y="190" textAnchor="middle" fill="#475569" fontSize="12">Single Deployment Unit</text>
          </svg>
        ),
        example: "Traditional enterprise applications like older banking systems, internal corporate tools, or simple CRUD applications."
      },
      {
        id: 'microservices',
        name: 'Microservices',
        icon: <Layers size={20} />,
        description: 'An architectural approach where an application is built as a collection of small, independently deployable services.',
        advantages: [
          'Independent scaling of services',
          'Technology diversity across services',
          'Resilience (failure isolation)',
          'Easier continuous deployment',
          'Teams can develop independently'
        ],
        disadvantages: [
          'Increased operational complexity',
          'Network latency between services',
          'Debugging across services is challenging',
          'Data consistency challenges',
          'Higher infrastructure costs'
        ],
        diagram: (
          <svg width="280" height="200" viewBox="0 0 280 200">
            <rect x="30" y="30" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="60" y="65" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">User Service</text>
            
            <rect x="110" y="30" width="60" height="60" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
            <text x="140" y="65" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Order Service</text>
            
            <rect x="190" y="30" width="60" height="60" rx="4" fill="#fed7aa" stroke="#f97316" strokeWidth="2" />
            <text x="220" y="65" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="bold">Payment Service</text>
            
            <rect x="30" y="110" width="60" height="60" rx="4" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
            <text x="60" y="145" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Notification Service</text>
            
            <rect x="110" y="110" width="60" height="60" rx="4" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
            <text x="140" y="145" textAnchor="middle" fill="#3730a3" fontSize="10" fontWeight="bold">Inventory Service</text>
            
            <rect x="190" y="110" width="60" height="60" rx="4" fill="#d8b4fe" stroke="#a855f7" strokeWidth="2" />
            <text x="220" y="145" textAnchor="middle" fill="#6b21a8" fontSize="10" fontWeight="bold">Analytics Service</text>
            
            <line x1="60" y1="90" x2="140" y2="110" stroke="#64748b" strokeWidth="1.5" />
            <line x1="140" y1="90" x2="60" y2="110" stroke="#64748b" strokeWidth="1.5" />
            <line x1="140" y1="90" x2="140" y2="110" stroke="#64748b" strokeWidth="1.5" />
            <line x1="140" y1="90" x2="220" y2="110" stroke="#64748b" strokeWidth="1.5" />
            <line x1="220" y1="90" x2="140" y2="110" stroke="#64748b" strokeWidth="1.5" />
          </svg>
        ),
        example: "Modern distributed systems like Netflix, Uber, or Amazon's retail platform where different teams own different services."
      },
      {
        id: 'serverless',
        name: 'Serverless',
        icon: <Clock size={20} />,
        description: 'A cloud computing execution model where the cloud provider dynamically manages the allocation of resources.',
        advantages: [
          'Zero infrastructure management',
          'Pay-per-use pricing model',
          'Automatic scaling',
          'Faster time to market',
          'Focus on code, not infrastructure'
        ],
        disadvantages: [
          'Cold start latency',
          'Limited execution duration',
          'Vendor lock-in concerns',
          'Limited local testing',
          'Complex debugging'
        ],
        diagram: (
          <svg width="280" height="200" viewBox="0 0 280 200">
            <rect x="10" y="20" width="260" height="40" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
            <text x="140" y="45" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="bold">Cloud Provider</text>
            
            <rect x="20" y="80" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="45" y="105" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Function 1</text>
            
            <rect x="80" y="80" width="50" height="40" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
            <text x="105" y="105" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Function 2</text>
            
            <rect x="140" y="80" width="50" height="40" rx="4" fill="#fed7aa" stroke="#f97316" strokeWidth="2" />
            <text x="165" y="105" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="bold">Function 3</text>
            
            <rect x="200" y="80" width="50" height="40" rx="4" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
            <text x="225" y="105" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Function 4</text>
            
            <rect x="20" y="140" width="230" height="30" rx="4" fill="#d8b4fe" stroke="#a855f7" strokeWidth="2" />
            <text x="135" y="160" textAnchor="middle" fill="#6b21a8" fontSize="12" fontWeight="bold">Managed Services (DB, Auth, Storage)</text>
            
            <line x1="45" y1="60" x2="45" y2="80" stroke="#64748b" strokeWidth="1.5" />
            <line x1="105" y1="60" x2="105" y2="80" stroke="#64748b" strokeWidth="1.5" />
            <line x1="165" y1="60" x2="165" y2="80" stroke="#64748b" strokeWidth="1.5" />
            <line x1="225" y1="60" x2="225" y2="80" stroke="#64748b" strokeWidth="1.5" />
          </svg>
        ),
        example: "AWS Lambda functions for image processing, API Gateway backends, or event-triggered workflows like form submissions or IoT events."
      },
      {
        id: 'eventdriven',
        name: 'Event-Driven',
        icon: <BarChart size={20} />,
        description: 'A design pattern where the flow of the program is determined by events like user actions, sensor outputs, or messages from other programs.',
        advantages: [
          'Loose coupling between components',
          'Good for asynchronous workflows',
          'Highly scalable and reactive',
          'Better fault isolation',
          'Easy to extend with new event handlers'
        ],
        disadvantages: [
          'Complex event flows can be hard to debug',
          'Event versioning challenges',
          'Eventual consistency complexities',
          'Potentially higher latency',
          'Ordering guarantees may be difficult'
        ],
        diagram: (
          <svg width="280" height="200" viewBox="0 0 280 200">
            <rect x="90" y="20" width="100" height="30" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="140" y="40" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Event Producer</text>
            
            <rect x="90" y="80" width="100" height="40" rx="4" fill="#d8b4fe" stroke="#a855f7" strokeWidth="2" />
            <text x="140" y="100" textAnchor="middle" fill="#6b21a8" fontSize="12" fontWeight="bold">Event Bus /</text>
            <text x="140" y="115" textAnchor="middle" fill="#6b21a8" fontSize="12" fontWeight="bold">Message Queue</text>
            
            <rect x="20" y="150" width="70" height="30" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
            <text x="55" y="170" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Consumer A</text>
            
            <rect x="105" y="150" width="70" height="30" rx="4" fill="#fed7aa" stroke="#f97316" strokeWidth="2" />
            <text x="140" y="170" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="bold">Consumer B</text>
            
            <rect x="190" y="150" width="70" height="30" rx="4" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
            <text x="225" y="170" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Consumer C</text>
            
            <line x1="140" y1="50" x2="140" y2="80" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,2" />
            <line x1="140" y1="120" x2="140" y2="135" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,2" />
            <line x1="140" y1="135" x2="55" y2="150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,2" />
            <line x1="140" y1="135" x2="140" y2="150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,2" />
            <line x1="140" y1="135" x2="225" y2="150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,2" />
          </svg>
        ),
        example: "IoT systems, real-time analytics platforms, or financial trading platforms where events trigger specific actions or workflows."
      }
    ];

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">System Architecture Patterns</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {patterns.map(pattern => (
            <div 
              key={pattern.id}
              className={`p-3 flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                selectedPattern === pattern.id 
                  ? 'bg-blue-100 border-2 border-blue-500' 
                  : 'bg-white border border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedPattern(pattern.id)}
            >
              <span className="mr-2">{pattern.icon}</span>
              <span className="font-medium">{pattern.name}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                {patterns.find(p => p.id === selectedPattern)?.name} Architecture
              </h4>
              
              <p className="text-gray-700 mb-4">
                {patterns.find(p => p.id === selectedPattern)?.description}
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Advantages:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {patterns.find(p => p.id === selectedPattern)?.advantages.map((adv, idx) => (
                    <li key={idx}>{adv}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Disadvantages:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {patterns.find(p => p.id === selectedPattern)?.disadvantages.map((dis, idx) => (
                    <li key={idx}>{dis}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-start">
              <div className="mb-4">
                {patterns.find(p => p.id === selectedPattern)?.diagram}
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md border border-gray-200 w-full mt-2">
                <h5 className="font-semibold text-gray-700 mb-1">Example Use Cases:</h5>
                <p className="text-gray-600 text-sm">
                  {patterns.find(p => p.id === selectedPattern)?.example}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDiagram = () => {
    if (activeDiagram === 'architecture-patterns') {
      return <ArchitecturePatternsDiagram />;
    }
    
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500">Select a diagram to view</p>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Diagram tabs */}
      <div className="mb-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {diagrams.map(diagram => (
            <button
              key={diagram.id}
              className={`px-3 py-1 rounded-md text-sm whitespace-nowrap ${
                activeDiagram === diagram.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
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
  );
};

export default SystemDesignCheatSheet;