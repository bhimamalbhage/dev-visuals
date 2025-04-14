import React, { useState } from 'react';
import { Code, ArrowRight, GitBranch, Repeat, Clock, Zap } from 'lucide-react';

const ReactCheatSheet = () => {
  const [activeDiagram, setActiveDiagram] = useState('component-lifecycle');

  const diagrams = [
    { id: 'component-lifecycle', name: 'Component Lifecycle' },
    { id: 'hooks-overview', name: 'Hooks Overview' },
    // { id: 'jsx-syntax', name: 'JSX Syntax' },
    { id: 'state-props', name: 'State vs Props' }
  ];

  const ReactLifecycleDiagram = () => {
    const [expandedNode, setExpandedNode] = useState(null);

    const nodes = [
      { id: 'mounting', x: 50, y: 50, label: 'Mounting', description: 'Component is being created and inserted into the DOM' },
      { id: 'constructor', x: 50, y: 120, label: 'constructor()', description: 'Called before component is mounted. Initialize state and bind methods here.' },
      { id: 'render', x: 50, y: 190, label: 'render()', description: 'The only required method in a class component. Examines props/state and returns JSX.' },
      { id: 'componentDidMount', x: 50, y: 260, label: 'componentDidMount()', description: 'Invoked immediately after component is inserted into the DOM. Perfect for API calls and subscriptions.' },
      
      { id: 'updating', x: 250, y: 50, label: 'Updating', description: 'Component is being re-rendered due to changes in props or state' },
      { id: 'shouldComponentUpdate', x: 250, y: 120, label: 'shouldComponentUpdate()', description: 'Called before rendering when new props/state are received. Return false to skip rendering.' },
      { id: 'render2', x: 250, y: 190, label: 'render()', description: 'Re-evaluates the component with updated props/state.' },
      { id: 'componentDidUpdate', x: 250, y: 260, label: 'componentDidUpdate()', description: 'Called after component updates. Good place to operate on the DOM when the component has been updated.' },
      
      { id: 'unmounting', x: 450, y: 50, label: 'Unmounting', description: 'Component is being removed from the DOM' },
      { id: 'componentWillUnmount', x: 450, y: 120, label: 'componentWillUnmount()', description: 'Called immediately before a component is unmounted. Clean up subscriptions and timers here.' },
    ];

    const connections = [
      { from: 'mounting', to: 'constructor' },
      { from: 'constructor', to: 'render' },
      { from: 'render', to: 'componentDidMount' },
      { from: 'componentDidMount', to: 'updating' },
      { from: 'updating', to: 'shouldComponentUpdate' },
      { from: 'shouldComponentUpdate', to: 'render2' },
      { from: 'render2', to: 'componentDidUpdate' },
      { from: 'componentDidUpdate', to: 'unmounting' },
      { from: 'unmounting', to: 'componentWillUnmount' },
    ];

    return (
      <div className="relative w-full h-96 bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <svg width="600" height="320" className="w-full h-full">
          {connections.map((conn, idx) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            return (
              <line 
                key={idx}
                x1={fromNode.x + 80} 
                y1={fromNode.y + 15} 
                x2={toNode.x + 80} 
                y2={toNode.y + 15}
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray={conn.from.includes('update') ? "5,5" : ""}
              />
            );
          })}
          
          {nodes.map(node => (
            <g key={node.id} onClick={() => setExpandedNode(expandedNode === node.id ? null : node.id)}>
              <rect
                x={node.x}
                y={node.y}
                width="160"
                height="30"
                rx="6"
                ry="6"
                fill={expandedNode === node.id ? "#3b82f6" : "#64748b"}
                className="cursor-pointer hover:fill-blue-500 transition-colors"
              />
              <text
                x={node.x + 80}
                y={node.y + 18}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontFamily="sans-serif"
                className="cursor-pointer select-none"
              >
                {node.label}
              </text>
              
              {expandedNode === node.id && (
                <foreignObject x={node.x - 20} y={node.y + 35} width="200" height="100">
                  <div className="bg-white p-2 rounded-md shadow-lg border border-gray-200 text-xs">
                    <p className="font-bold text-gray-800">{node.label}</p>
                    <p className="text-gray-600 mt-1">{node.description}</p>
                    <div className="mt-2 bg-gray-100 p-1 rounded">
                      <code className="text-xs text-blue-600">
                        {node.id === 'constructor' && 'constructor(props) { super(props); }'}
                        {node.id === 'render' && 'render() { return <div>...</div>; }'}
                        {node.id === 'componentDidMount' && 'componentDidMount() { fetchData(); }'}
                        {node.id === 'shouldComponentUpdate' && 'shouldComponentUpdate(nextProps) { return true; }'}
                        {node.id === 'componentDidUpdate' && 'componentDidUpdate(prevProps) { if (this.props.id !== prevProps.id) { fetchData(); } }'}
                        {node.id === 'componentWillUnmount' && 'componentWillUnmount() { this.subscription.unsubscribe(); }'}
                      </code>
                    </div>
                  </div>
                </foreignObject>
              )}
            </g>
          ))}
        </svg>
        <div className="absolute bottom-2 right-2 text-xs text-gray-500">
          Click on any node to see details
        </div>
      </div>
    );
  };

  const HooksOverviewDiagram = () => {
    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mb-6 text-center w-48">
            React Hooks
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
            {[
              { name: 'useState', desc: 'Manages state in functional components', example: 'const [count, setCount] = useState(0);', icon: <Code size={18} /> },
              { name: 'useEffect', desc: 'Handles side effects in components', example: 'useEffect(() => { document.title = "Count: " + count; });', icon: <Repeat size={18} /> },
              { name: 'useContext', desc: 'Subscribes to React context', example: 'const theme = useContext(ThemeContext);', icon: <GitBranch size={18} /> },
              { name: 'useReducer', desc: 'State management for complex logic', example: 'const [state, dispatch] = useReducer(reducer, initialState);', icon: <ArrowRight size={18} /> },
              { name: 'useCallback', desc: 'Returns memoized callback', example: 'const memoizedFn = useCallback(() => { doSomething(a, b); }, [a, b]);', icon: <Zap size={18} /> },
              { name: 'useMemo', desc: 'Returns memoized value', example: 'const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b]);', icon: <Clock size={18} /> },
              { name: 'useRef', desc: 'Persists values between renders', example: 'const inputRef = useRef(null);', icon: <ArrowRight size={18} /> },
              { name: 'useLayoutEffect', desc: 'Similar to useEffect, but fires synchronously', example: 'useLayoutEffect(() => { /* DOM mutations */ });', icon: <Repeat size={18} /> },
            ].map(hook => (
              <div key={hook.name} className="bg-white p-3 rounded-md shadow border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                <h3 className="font-bold text-blue-600 flex items-center">
                  <span className="mr-2 text-blue-500">{hook.icon}</span>
                  {hook.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{hook.desc}</p>
                <pre className="mt-2 bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                  <code>{hook.example}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const JSXSyntaxDiagram = () => {
    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">JSX Syntax Overview</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-blue-600 mb-3">JSX Basics</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-3">
                <h5 className="font-semibold">Elements</h5>
                <pre className="bg-gray-100 p-2 rounded mt-1 text-sm overflow-x-auto">
                  <code>{'const element = <h1>Hello, world!</h1>;'}</code>
                </pre>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-3">
                <h5 className="font-semibold">Expressions in JSX</h5>
                <pre className="bg-gray-100 p-2 rounded mt-1 text-sm overflow-x-auto">
                  <code>{'const element = <h1>Hello, {name}!</h1>;'}</code>
                </pre>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-3">
                <h5 className="font-semibold">Attributes</h5>
                <pre className="bg-gray-100 p-2 rounded mt-1 text-sm overflow-x-auto">
                  <code>{'const element = <img src={user.avatarUrl} />;'}</code>
                </pre>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-3">
                <h5 className="font-semibold">Children</h5>
                <pre className="bg-gray-100 p-2 rounded mt-1 text-sm overflow-x-auto">
                  <code>{`const element = (
  <div>
    <h1>Hello!</h1>
    <p>Good to see you</p>
  </div>
);`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-600 mb-3">Common JSX Patterns</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-3">
                  <h5 className="font-semibold">Conditional Rendering</h5>
                  <pre className="bg-gray-100 p-2 rounded mt-1 text-sm overflow-x-auto">
                    <code>{`function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );
}`}</code>
                  </pre>
                </div>
                
                <div className="border-l-4 border-green-500 pl-3">
                  <h5 className="font-semibold">Lists & Keys</h5>
                  <pre className="bg-gray-100 p-2 rounded mt-1 text-sm overflow-x-auto">
                    <code>{`function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.toString()}>{number}</li>
      ))}
    </ul>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-600 mb-3">JSX Gotchas</h4>
              
              <div className="space-y-3">
                <div className="bg-yellow-50 p-2 rounded border border-yellow-200 text-sm">
                  <span className="font-semibold">HTML vs JSX:</span> Use <code>className</code> instead of <code>class</code>, <code>htmlFor</code> instead of <code>for</code>
                </div>
                
                <div className="bg-yellow-50 p-2 rounded border border-yellow-200 text-sm">
                  <span className="font-semibold">Self-closing tags:</span> All tags must be closed; use <code>&lt;img /&gt;</code> not <code>&lt;img&gt;</code>
                </div>
                
                <div className="bg-yellow-50 p-2 rounded border border-yellow-200 text-sm">
                  <span className="font-semibold">Style attribute:</span> Use objects not strings <code>style={{ color: 'red' }}</code>
                </div>
                
                <div className="bg-yellow-50 p-2 rounded border border-yellow-200 text-sm">
                  <span className="font-semibold">Comments:</span> Use <code>{'{/* comment */}'}</code> not <code>&lt;!-- comment --&gt;</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StatePropsComparisonDiagram = () => {
    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">State vs Props</h3>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white p-5 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-3">
                <Code size={24} />
              </div>
              <h4 className="text-xl font-bold text-blue-700">Props</h4>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full text-blue-600 mr-2 mt-1">
                  <ArrowRight size={14} />
                </div>
                <span>Passed from parent to child components (like function arguments)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full text-blue-600 mr-2 mt-1">
                  <ArrowRight size={14} />
                </div>
                <span>Immutable (read-only) within the component</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full text-blue-600 mr-2 mt-1">
                  <ArrowRight size={14} />
                </div>
                <span>Help make components reusable</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full text-blue-600 mr-2 mt-1">
                  <ArrowRight size={14} />
                </div>
                <span>Changes from parent cause re-renders</span>
              </li>
            </ul>
            
            <div className="mt-4 bg-gray-100 p-3 rounded">
              <h5 className="font-semibold mb-2">Example:</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Parent component
<UserProfile name="John" age={25} />

// Child component
function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-5 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
                <GitBranch size={24} />
              </div>
              <h4 className="text-xl font-bold text-green-700">State</h4>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mr-2 mt-1">
                  <ArrowRight size={14} />
                </div>
                <span>Managed within the component (private)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mr-2 mt-1">
                  <ArrowRight size={14} />
                </div>
                <span>Mutable and can change over time</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mr-2 mt-1">
                  <ArrowRight size={14} />
                </div>
                <span>Changes cause component to re-render</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mr-2 mt-1">
                  <ArrowRight size={14} />
                </div>
                <span>Initialized in constructor or with hooks</span>
              </li>
            </ul>
            
            <div className="mt-4 bg-gray-100 p-3 rounded">
              <h5 className="font-semibold mb-2">Example:</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Class component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <button onClick={() => {
        this.setState({ count: this.state.count + 1 });
      }}>
        Count: {this.state.count}
      </button>
    );
  }
}

// Function component with hooks
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h4 className="font-bold text-purple-600 mb-3">Key Differences</h4>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspect</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase">Props</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase">State</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Mutability</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">Immutable</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">Mutable</td>
                </tr>
                <tr>
                  <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Ownership</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">Parent component</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">Component itself</td>
                </tr>
                <tr>
                  <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Passing Down</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">Can be passed to children</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">Cannot be passed directly</td>
                </tr>
                <tr>
                  <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Updating</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">Updated by parent</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">Updated with setState/setter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderDiagram = () => {
    if (activeDiagram === 'component-lifecycle') {
      return <ReactLifecycleDiagram />;
    } else if (activeDiagram === 'hooks-overview') {
      return <HooksOverviewDiagram />;
    } else if (activeDiagram === 'jsx-syntax') {
      return <JSXSyntaxDiagram />;
    } else if (activeDiagram === 'state-props') {
      return <StatePropsComparisonDiagram />;
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
  );
};

export default ReactCheatSheet;