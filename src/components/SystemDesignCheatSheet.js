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
  Zap
} from 'lucide-react';
import systemDesignData from '../data/system-design.json';

const SystemDesignCheatSheet = () => {
  const [activeDiagram, setActiveDiagram] = useState('architecture-patterns');

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
      Zap: <Zap size={20} />
    };
    return icons[iconName] || <Globe size={20} />;
  };

  // Diagram SVG definitions
  const architectureDiagrams = {
    monolithic: (
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
    microservices: (
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
    serverless: (
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
    eventdriven: (
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
    )
  };

  const scalabilityDiagrams = {
    'vertical-scaling': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <rect x="100" y="40" width="80" height="120" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="140" y="100" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">Server</text>
        <text x="140" y="120" textAnchor="middle" fill="#1e40af" fontSize="10">(More CPU/RAM)</text>
        
        <path d="M140,35 L140,15 L135,20 M140,15 L145,20" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <path d="M140,165 L140,185 L135,180 M140,185 L145,180" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <path d="M95,100 L75,100 L80,95 M75,100 L80,105" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <path d="M185,100 L205,100 L200,95 M205,100 L200,105" stroke="#3b82f6" strokeWidth="2" fill="none" />
      </svg>
    ),
    'horizontal-scaling': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <rect x="40" y="40" width="100" height="20" rx="4" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
        <text x="90" y="54" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Load Balancer</text>
        
        <rect x="25" y="100" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="55" y="135" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Server 1</text>
        
        <rect x="110" y="100" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="140" y="135" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Server 2</text>
        
        <rect x="195" y="100" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="225" y="135" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Server 3</text>

        <line x1="90" y1="60" x2="55" y2="100" stroke="#64748b" strokeWidth="1.5" />
        <line x1="90" y1="60" x2="140" y2="100" stroke="#64748b" strokeWidth="1.5" />
        <line x1="90" y1="60" x2="225" y2="100" stroke="#64748b" strokeWidth="1.5" />
      </svg>
    ),
    'load-balancing': (
      <svg width="280" height="200" viewBox="0 0 280 200">
         <circle cx="140" cy="30" r="15" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
         <text x="140" y="34" textAnchor="middle" fill="#7f1d1d" fontSize="8">Client</text>

         <rect x="100" y="70" width="80" height="30" rx="4" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
         <text x="140" y="90" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">LB</text>
         <text x="140" y="80" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">L4 / L7</text>

         <rect x="40" y="140" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
         <rect x="115" y="140" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
         <rect x="190" y="140" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />

         <line x1="140" y1="45" x2="140" y2="70" stroke="#64748b" strokeWidth="1.5" />
         <line x1="140" y1="100" x2="65" y2="140" stroke="#64748b" strokeWidth="1.5" />
         <line x1="140" y1="100" x2="140" y2="140" stroke="#64748b" strokeWidth="1.5" />
         <line x1="140" y1="100" x2="215" y2="140" stroke="#64748b" strokeWidth="1.5" />
      </svg>
    ),
    'reverse-proxy': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <circle cx="40" cy="100" r="20" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
        <text x="40" y="104" textAnchor="middle" fill="#7f1d1d" fontSize="10">Client</text>

        <rect x="100" y="60" width="40" height="80" rx="4" fill="#d8b4fe" stroke="#9333ea" strokeWidth="2" />
        <text x="120" y="100" textAnchor="middle" fill="#581c87" fontSize="10" fontWeight="bold" transform="rotate(-90, 120, 100)">Nginx</text>

        <rect x="190" y="30" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <rect x="190" y="80" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <rect x="190" y="130" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />

        <line x1="60" y1="100" x2="100" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="140" y1="80" x2="190" y2="50" stroke="#64748b" strokeWidth="1.5" />
        <line x1="140" y1="100" x2="190" y2="100" stroke="#64748b" strokeWidth="1.5" />
        <line x1="140" y1="120" x2="190" y2="150" stroke="#64748b" strokeWidth="1.5" />
      </svg>
    ),
    'cdn': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <path d="M140,100 m-90,0 a90,90 0 1,0 180,0 a90,90 0 1,0 -180,0" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5,5" />
        <text x="140" y="20" textAnchor="middle" fill="#0e7490" fontSize="10">Global Distribution</text>

        <rect x="120" y="80" width="40" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="140" y="105" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Origin</text>

        <circle cx="140" cy="50" r="15" fill="#a5f3fc" stroke="#0891b2" strokeWidth="2" />
        <text x="140" y="54" textAnchor="middle" fill="#0e7490" fontSize="8">Edge</text>

        <circle cx="70" cy="100" r="15" fill="#a5f3fc" stroke="#0891b2" strokeWidth="2" />
        <text x="70" y="104" textAnchor="middle" fill="#0e7490" fontSize="8">Edge</text>

        <circle cx="210" cy="100" r="15" fill="#a5f3fc" stroke="#0891b2" strokeWidth="2" />
        <text x="210" y="104" textAnchor="middle" fill="#0e7490" fontSize="8">Edge</text>

        <circle cx="140" cy="150" r="15" fill="#a5f3fc" stroke="#0891b2" strokeWidth="2" />
        <text x="140" y="154" textAnchor="middle" fill="#0e7490" fontSize="8">Edge</text>

        <circle cx="40" cy="150" r="10" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
        <text x="40" y="170" textAnchor="middle" fill="#7f1d1d" fontSize="8">User</text>

        <line x1="45" y1="145" x2="60" y2="110" stroke="#64748b" strokeWidth="1.5" />
      </svg>
    )
  };

  const networkingDiagrams = {
    'dns': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <circle cx="40" cy="100" r="15" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
        <text x="40" y="125" textAnchor="middle" fill="#7f1d1d" fontSize="10">User</text>

        <rect x="90" y="85" width="40" height="30" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="110" y="105" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">Resolver</text>

        <rect x="180" y="30" width="60" height="25" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <text x="210" y="47" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Root (.)</text>

        <rect x="180" y="85" width="60" height="25" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <text x="210" y="102" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">TLD (.com)</text>

        <rect x="180" y="140" width="60" height="25" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <text x="210" y="157" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Auth (google)</text>

        <path d="M55,100 L90,100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M130,90 L180,45" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
        <path d="M130,100 L180,100" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
        <path d="M130,110 L180,155" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
      </svg>
    ),
    'tcp-udp': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <rect x="30" y="30" width="80" height="140" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="70" y="50" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">TCP</text>
        <text x="70" y="80" textAnchor="middle" fill="#1e40af" fontSize="9">Handshake</text>
        <path d="M45,90 L95,90 M45,100 L95,100 M45,110 L95,110" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="70" y="130" textAnchor="middle" fill="#1e40af" fontSize="9">Reliable</text>
        <text x="70" y="150" textAnchor="middle" fill="#1e40af" fontSize="9">Ordered</text>

        <rect x="170" y="30" width="80" height="140" rx="4" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
        <text x="210" y="50" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">UDP</text>
        <text x="210" y="80" textAnchor="middle" fill="#991b1b" fontSize="9">No Handshake</text>
        <path d="M185,90 L235,95 M185,105 L235,100 M185,115 L235,115" stroke="#ef4444" strokeWidth="1.5" />
        <text x="210" y="130" textAnchor="middle" fill="#991b1b" fontSize="9">Fast</text>
        <text x="210" y="150" textAnchor="middle" fill="#991b1b" fontSize="9">Lossy</text>
      </svg>
    ),
    'http-https': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <text x="60" y="80" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="bold">HTTP</text>
        <rect x="85" y="70" width="110" height="15" fill="#e2e8f0" />
        <text x="140" y="82" textAnchor="middle" fill="#64748b" fontSize="10">Plain Text</text>
        
        <text x="60" y="130" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">HTTPS</text>
        <rect x="85" y="120" width="110" height="20" rx="10" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <path d="M95,130 L185,130" stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2"/>
        <circle cx="140" cy="130" r="6" fill="#166534" />
        <path d="M137,128 L140,132 L143,128" stroke="white" strokeWidth="1.5" fill="none" />
        <text x="220" y="134" textAnchor="middle" fill="#166534" fontSize="10">Encrypted</text>
      </svg>
    ),
    'tls-ssl': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <rect x="20" y="40" width="60" height="120" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="50" y="30" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Client</text>
        
        <rect x="200" y="40" width="60" height="120" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <text x="230" y="30" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Server</text>

        <path d="M80,60 L200,60" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
        <text x="140" y="55" textAnchor="middle" fill="#475569" fontSize="8">Client Hello</text>

        <path d="M200,80 L80,80" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
        <text x="140" y="75" textAnchor="middle" fill="#475569" fontSize="8">Server Hello + Cert</text>

        <path d="M80,100 L200,100" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
        <text x="140" y="95" textAnchor="middle" fill="#475569" fontSize="8">Key Exchange</text>

        <rect x="100" y="125" width="80" height="20" rx="4" fill="#fcd34d" stroke="#d97706" strokeWidth="1" />
        <text x="140" y="138" textAnchor="middle" fill="#92400e" fontSize="9">Secure Session</text>
      </svg>
    ),
    'websockets': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <rect x="20" y="60" width="60" height="80" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="50" y="50" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Client</text>

        <rect x="200" y="60" width="60" height="80" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <text x="230" y="50" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Server</text>

        <path d="M80,80 L200,80" stroke="#64748b" strokeWidth="2" />
        <path d="M80,120 L200,120" stroke="#64748b" strokeWidth="2" />
        
        <circle cx="140" cy="80" r="4" fill="#3b82f6" />
        <circle cx="160" cy="120" r="4" fill="#22c55e" />
        <circle cx="120" cy="120" r="4" fill="#22c55e" />

        <text x="140" y="100" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Bidirectional</text>
        <text x="140" y="112" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Persistent</text>
      </svg>
    ),
    'grpc': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        <rect x="30" y="60" width="60" height="80" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
         <text x="60" y="100" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Client</text>
         
         <rect x="190" y="60" width="60" height="80" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
         <text x="220" y="100" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Server</text>
         
         <rect x="105" y="85" width="70" height="30" rx="4" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
         <text x="140" y="104" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">ProtoBuf</text>

         <path d="M90,100 L105,100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
         <path d="M175,100 L190,100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
      </svg>
    ),
    'forward-reverse-proxy': (
      <svg width="280" height="200" viewBox="0 0 280 200">
        {/* Forward Proxy Section */}
        <text x="70" y="20" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Forward Proxy</text>
        
        <circle cx="30" cy="50" r="12" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="30" y="75" textAnchor="middle" fill="#1e40af" fontSize="8">Client</text>
        
        <rect x="60" y="40" width="20" height="40" rx="2" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
        <text x="70" y="90" textAnchor="middle" fill="#92400e" fontSize="8">Proxy</text>
        
        <rect x="110" y="40" width="20" height="40" rx="2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <text x="120" y="90" textAnchor="middle" fill="#166534" fontSize="8">Server</text>
        
        <path d="M42,50 L60,50" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M80,50 L110,50" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Reverse Proxy Section */}
        <text x="210" y="20" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Reverse Proxy</text>
        
        <circle cx="170" cy="50" r="12" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
        <text x="170" y="75" textAnchor="middle" fill="#1e40af" fontSize="8">Client</text>
        
        <rect x="200" y="40" width="20" height="40" rx="2" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
        <text x="210" y="90" textAnchor="middle" fill="#92400e" fontSize="8">Proxy</text>
        
        <rect x="250" y="30" width="20" height="20" rx="2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <rect x="250" y="60" width="20" height="20" rx="2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
        <text x="260" y="90" textAnchor="middle" fill="#166534" fontSize="8">Servers</text>
        
        <path d="M182,50 L200,50" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M220,50 L250,40" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M220,50 L250,70" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        
        {/* Visual Notes */}
        <rect x="20" y="110" width="100" height="70" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <text x="70" y="125" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="bold">Forward Usage</text>
        <text x="70" y="140" textAnchor="middle" fill="#64748b" fontSize="8">Anonymity</text>
        <text x="70" y="152" textAnchor="middle" fill="#64748b" fontSize="8">Content Filtering</text>
        <text x="70" y="164" textAnchor="middle" fill="#64748b" fontSize="8">Bypassing Blocks</text>
        
        <rect x="160" y="110" width="100" height="70" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <text x="210" y="125" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="bold">Reverse Usage</text>
        <text x="210" y="140" textAnchor="middle" fill="#64748b" fontSize="8">Load Balancing</text>
        <text x="210" y="152" textAnchor="middle" fill="#64748b" fontSize="8">Caching / SSL</text>
        <text x="210" y="164" textAnchor="middle" fill="#64748b" fontSize="8">Security</text>
      </svg>
    )
  };

  const ArchitecturePatternsDiagram = () => {
    const [selectedPattern, setSelectedPattern] = useState('microservices');
    const { architecturePatterns } = systemDesignData.systemDesign;

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">System Architecture Patterns</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {architecturePatterns.map(pattern => (
            <div 
              key={pattern.id}
              className={`p-3 flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                selectedPattern === pattern.id 
                  ? 'bg-blue-100 border-2 border-blue-500' 
                  : 'bg-white border border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedPattern(pattern.id)}
            >
              <span className="mr-2">{getIcon(pattern.icon)}</span>
              <span className="font-medium">{pattern.name}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                {architecturePatterns.find(p => p.id === selectedPattern)?.name} Architecture
              </h4>
              
              <p className="text-gray-700 mb-4">
                {architecturePatterns.find(p => p.id === selectedPattern)?.description}
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Advantages:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {architecturePatterns.find(p => p.id === selectedPattern)?.advantages.map((adv, idx) => (
                    <li key={idx}>{adv}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Disadvantages:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {architecturePatterns.find(p => p.id === selectedPattern)?.disadvantages.map((dis, idx) => (
                    <li key={idx}>{dis}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-start">
              <div className="mb-4">
                {architectureDiagrams[selectedPattern]}
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md border border-gray-200 w-full mt-2">
                <h5 className="font-semibold text-gray-700 mb-1">Example Use Cases:</h5>
                <p className="text-gray-600 text-sm">
                  {architecturePatterns.find(p => p.id === selectedPattern)?.example}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ScalabilityDiagram = () => {
    const [selectedConcept, setSelectedConcept] = useState('vertical-scaling');
    const { scalabilityConcepts } = systemDesignData.systemDesign;

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">Scalability Concepts</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {scalabilityConcepts.map(concept => (
            <div 
              key={concept.id}
              className={`p-3 flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                selectedConcept === concept.id 
                  ? 'bg-blue-100 border-2 border-blue-500' 
                  : 'bg-white border border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedConcept(concept.id)}
            >
              <span className="mr-2">{getIcon(concept.icon)}</span>
              <span className="font-medium">{concept.name}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <h4 className="text-xl font-bold text-blue-700 mb-3">
                {scalabilityConcepts.find(c => c.id === selectedConcept)?.name}
               </h4>
               <p className="text-gray-700 mb-4">
                 {scalabilityConcepts.find(c => c.id === selectedConcept)?.description}
               </p>
               
               <div className="mb-4">
                 <h5 className="font-semibold text-green-700 mb-2">Pros:</h5>
                 <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {scalabilityConcepts.find(c => c.id === selectedConcept)?.pros.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                 </ul>
               </div>

               <div>
                 <h5 className="font-semibold text-red-700 mb-2">Cons:</h5>
                 <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {scalabilityConcepts.find(c => c.id === selectedConcept)?.cons.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                 </ul>
               </div>
                
               {/* Display extra types if available (e.g. for Load Balancing) */}
               {scalabilityConcepts.find(c => c.id === selectedConcept)?.types && (
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Types:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {scalabilityConcepts.find(c => c.id === selectedConcept)?.types.map((t, i) => (
                        <li key={i}><strong>{t.name}:</strong> {t.desc}</li>
                      ))}
                    </ul>
                  </div>
               )}

            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded p-4">
              {scalabilityDiagrams[selectedConcept]}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const NetworkingDiagram = () => {
    const [selectedId, setSelectedId] = useState('dns');
    const { networking } = systemDesignData.systemDesign;
    const concept = networking.concepts[selectedId];

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">Networking & Infrastructure</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {networking.diagrams.map(d => (
            <div 
              key={d.id}
              className={`p-3 flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                selectedId === d.id 
                  ? 'bg-blue-100 border-2 border-blue-500' 
                  : 'bg-white border border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedId(d.id)}
            >
              <span className="mr-2">{getIcon(d.icon)}</span>
              <span className="font-medium">{d.name}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <h4 className="text-xl font-bold text-blue-700 mb-3">{concept.title}</h4>
               <p className="text-gray-700 mb-4">{concept.description}</p>
               
               {concept.details && (
                 <ul className="list-disc pl-5 space-y-1 text-gray-600">
                   {concept.details.map((item, i) => <li key={i}>{item}</li>)}
                 </ul>
               )}

               {concept.comparison && (
                 <div className="overflow-x-auto">
                   <table className="min-w-full text-sm text-left text-gray-600 border">
                     <thead className="bg-gray-100 text-gray-700 font-bold">
                       <tr>
                         <th className="px-2 py-1 border">Feature</th>
                         {concept.comparison && concept.comparison.length > 0 && Object.keys(concept.comparison[0])
                           .filter(k => k !== 'feature')
                           .map(key => (
                             <th key={key} className="px-2 py-1 border capitalize">
                               {key === 'tcp' || key === 'udp' ? key.toUpperCase() : key.replace('-', ' ')}
                             </th>
                           ))
                         }
                       </tr>
                     </thead>
                     <tbody>
                       {concept.comparison.map((row, i) => (
                         <tr key={i} className="border-b">
                           <td className="px-2 py-1 font-semibold border-r">{row.feature}</td>
                           {Object.keys(concept.comparison[0])
                             .filter(k => k !== 'feature')
                             .map((key, idx, arr) => (
                               <td key={idx} className={`px-2 py-1 ${idx < arr.length - 1 ? 'border-r' : ''}`}>
                                 {row[key]}
                               </td>
                             ))
                           }
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               )}

               {concept.features && (
                 <ul className="list-disc pl-5 space-y-1 text-gray-600">
                   {concept.features.map((item, i) => <li key={i}>{item}</li>)}
                 </ul>
               )}

               {concept.steps && (
                  <div className="bg-gray-50 p-3 rounded border">
                    <h5 className="font-semibold text-sm mb-2">Handshake Steps:</h5>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                      {concept.steps.map((step, i) => <li key={i} className="list-none">{step}</li>)}
                    </ol>
                  </div>
               )}

               {concept.benefits && (
                 <ul className="list-disc pl-5 space-y-1 text-gray-600">
                   {concept.benefits.map((item, i) => <li key={i}>{item}</li>)}
                 </ul>
               )}

            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded p-4">
              {networkingDiagrams[selectedId]}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DatabasesDiagram = () => {
      const [type, setType] = useState('sql-vs-nosql'); 
      const { databases } = systemDesignData.systemDesign;

      return (
          <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
              <h3 className="text-lg font-bold mb-4 text-center">Databases & Storage</h3>
              <div className="flex justify-center space-x-2 mb-6">
                  {databases.tabs.map(tab => (
                      <button 
                        key={tab.id}
                        onClick={() => setType(tab.id)} 
                        className={`px-3 py-1 rounded ${type === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      >
                        {tab.name}
                      </button>
                  ))}
              </div>

              <div className="bg-white p-6 rounded shadow">
                  {type === 'sql-vs-nosql' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="border p-4 rounded bg-blue-50">
                              <h4 className="font-bold text-lg mb-2 text-blue-800">{databases.sql.title}</h4>
                              <ul className="list-disc pl-5 text-sm space-y-1">
                                  {databases.sql.items.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                              <div className="mt-4 flex justify-center">
                                <Database size={48} className="text-blue-500" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">{databases.sql.examples}</p>
                          </div>
                          <div className="border p-4 rounded bg-green-50">
                              <h4 className="font-bold text-lg mb-2 text-green-800">{databases.nosql.title}</h4>
                              <ul className="list-disc pl-5 text-sm space-y-1">
                                  {databases.nosql.items.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                               <div className="mt-4 flex justify-center">
                                <div className="flex">
                                    <FileCode size={40} className="text-green-500" />
                                    <FileCode size={40} className="text-green-500 -ml-4" />
                                </div>
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">{databases.nosql.examples}</p>
                          </div>
                      </div>
                  )}

                  {type === 'cap' && (
                       <div className="text-center">
                           <h4 className="font-bold text-xl mb-4">{databases.cap.title}</h4>
                           <p className="mb-4 text-gray-600 max-w-lg mx-auto">
                               {databases.cap.description}
                           </p>
                           <div className="flex justify-center items-center space-x-4">
                                <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center border-4 border-red-400 font-bold text-red-800">Consistency</div>
                                <div className="w-32 h-32 rounded-full bg-yellow-100 flex items-center justify-center border-4 border-yellow-400 font-bold text-yellow-800">Availability</div>
                                <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center border-4 border-blue-400 font-bold text-blue-800">Partition Tolerance</div>
                           </div>
                           <p className="mt-6 text-sm text-gray-500">
                               {databases.cap.note}
                           </p>
                       </div>
                  )}
                  {type === 'sharding' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                             <h4 className="font-bold text-blue-700">{databases.replication.title}</h4>
                             <p className="text-sm text-gray-600 mb-2">{databases.replication.description}</p>
                             <ul className="list-disc pl-5 text-xs">
                                 {databases.replication.items.map((item, i) => <li key={i}>{item}</li>)}
                             </ul>
                         </div>
                         <div>
                             <h4 className="font-bold text-purple-700">{databases.sharding.title}</h4>
                             <p className="text-sm text-gray-600 mb-2">{databases.sharding.description}</p>
                             <ul className="list-disc pl-5 text-xs">
                                 {databases.sharding.items.map((item, i) => <li key={i}>{item}</li>)}
                             </ul>
                         </div>
                      </div>
                  )}
              </div>
          </div>
      )
  }

  const CachingDiagram = () => {
      const { caching } = systemDesignData.systemDesign;
      return (
          <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
             <h3 className="text-lg font-bold mb-4 text-center">Caching Strategies</h3>
             <div className="grid grid-cols-1 gap-6">
                 <div className="bg-white p-4 rounded shadow">
                     <h4 className="font-bold text-blue-600 mb-2">{caching.layers.title}</h4>
                     <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 text-sm">
                         {caching.layers.items.map((layer, index) => (
                             <React.Fragment key={index}>
                                <div className={`p-3 rounded text-center w-full md:w-1/5 border ${
                                    index === 0 ? 'bg-gray-100 border-gray-300' :
                                    index === 1 ? 'bg-purple-100 border-purple-300' :
                                    index === 2 ? 'bg-blue-100 border-blue-300' :
                                    'bg-green-100 border-green-300'
                                }`}>
                                    <div className="font-bold">{layer.name}</div>
                                    <div className="text-xs text-gray-500">{layer.desc}</div>
                                </div>
                                {index < caching.layers.items.length - 1 && <div className="hidden md:block">→</div>}
                             </React.Fragment>
                         ))}
                     </div>
                 </div>

                 <div className="bg-white p-4 rounded shadow">
                     <h4 className="font-bold text-red-600 mb-2">{caching.evictionPolicies.title}</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {caching.evictionPolicies.items.map((policy, i) => (
                             <div key={i} className="border p-2 rounded">
                                 <h5 className="font-semibold">{policy.name}</h5>
                                 <p className="text-xs text-gray-600">{policy.desc}</p>
                             </div>
                         ))}
                     </div>
                 </div>
                 
                 <div className="bg-white p-4 rounded shadow">
                     <h4 className="font-bold text-orange-600 mb-2">{caching.writeStrategies.title}</h4>
                     <ul className="list-disc pl-5 text-sm space-y-1">
                         {caching.writeStrategies.items.map((strategy, i) => (
                             <li key={i}><strong>{strategy.name}:</strong> {strategy.desc}</li>
                         ))}
                     </ul>
                 </div>
             </div>
          </div>
      )
  }

  const ApiDesignDiagram = () => {
    const { apiDesign } = systemDesignData.systemDesign;
    return (
        <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
            <h3 className="text-lg font-bold mb-4 text-center">API Design</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {apiDesign.styles.map((style, i) => (
                    <div key={i} className={`bg-white p-4 rounded shadow border-t-4 border-${style.color}-500`}>
                        <h4 className="font-bold text-lg mb-2">{style.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{style.subtitle}</p>
                        <ul className="list-disc pl-4 text-sm space-y-1">
                            {style.items.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded shadow">
                <h4 className="font-bold text-gray-800 mb-3">{apiDesign.statusCodes.title}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    {apiDesign.statusCodes.items.map((status, i) => (
                        <div key={i} className={`p-2 rounded ${
                            status.type === 'success' ? 'bg-green-100' :
                            status.type === 'warning' ? 'bg-yellow-100' :
                            'bg-red-100'
                        }`}>
                            <span className="font-bold">{status.code}</span> {status.desc}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  }
  
  // Update diagrams list to include Networking
  // The list needs to be manual to link to IDs if we want custom ordering, 
  // or we can strictly use the JSON. 
  // For safety, I'll combine them or just hardcode the tabs to ensure render order.
  const allDiagrams = [
      { id: 'architecture-patterns', name: 'Architecture' },
      { id: 'networking', name: 'Networking' },
      { id: 'scalability', name: 'Scalability' },
      { id: 'databases', name: 'Databases' },
      { id: 'caching', name: 'Caching' },
      { id: 'api-design', name: 'API Design' }
  ];

  const renderDiagram = () => {
    switch(activeDiagram) {
      case 'architecture-patterns': return <ArchitecturePatternsDiagram />;
      case 'networking': return <NetworkingDiagram />;
      case 'scalability': return <ScalabilityDiagram />;
      case 'databases': return <DatabasesDiagram />;
      case 'caching': return <CachingDiagram />;
      case 'api-design': return <ApiDesignDiagram />;
      default: return <ArchitecturePatternsDiagram />;
    }
  };

  return (
    <div className="w-full">
      {/* Diagram tabs */}
      <div className="mb-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {allDiagrams.map(diagram => (
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