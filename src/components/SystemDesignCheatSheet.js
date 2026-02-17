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
  Zap,
  Users,
  Handshake,
  MessageCircle
} from 'lucide-react';
import systemDesignData from '../data/system-design.json';
import interviewData from '../data/interview-questions.json';

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
      Zap: <Zap size={20} />,
      Users: <Users size={20} />,
      Handshake: <Handshake size={20} />,
      MessageCircle: <MessageCircle size={20} />
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
  
  const MessagingDiagram = () => {
    const [selectedId, setSelectedId] = useState('message-queues');
    const { messaging } = systemDesignData.systemDesign;
    const concept = messaging.concepts.find(c => c.id === selectedId);

    const messagingDiagrams = {
      'message-queues': (
        <svg width="280" height="200" viewBox="0 0 280 200">
           <rect x="20" y="80" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
           <text x="45" y="105" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Producer</text>

           <rect x="100" y="70" width="80" height="60" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
           <text x="140" y="60" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Queue</text>
           <rect x="110" y="80" width="10" height="40" fill="#93c5fd" />
           <rect x="125" y="80" width="10" height="40" fill="#93c5fd" />
           <rect x="140" y="80" width="10" height="40" fill="#93c5fd" />
           <rect x="155" y="80" width="10" height="40" fill="#93c5fd" />

           <rect x="210" y="80" width="50" height="40" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
           <text x="235" y="105" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Consumer</text>

           <line x1="70" y1="100" x2="100" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
           <line x1="180" y1="100" x2="210" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        </svg>
      ),
      'pub-sub': (
        <svg width="280" height="200" viewBox="0 0 280 200">
           <rect x="20" y="80" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
           <text x="45" y="105" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Publisher</text>

           <circle cx="140" cy="100" r="25" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
           <text x="140" y="104" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Topic</text>

           <rect x="210" y="30" width="50" height="40" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
           <text x="235" y="55" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Sub A</text>

           <rect x="210" y="80" width="50" height="40" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
           <text x="235" y="105" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Sub B</text>

           <rect x="210" y="130" width="50" height="40" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
           <text x="235" y="155" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Sub C</text>

           <line x1="70" y1="100" x2="115" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
           <line x1="165" y1="100" x2="210" y2="50" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
           <line x1="165" y1="100" x2="210" y2="100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
           <line x1="165" y1="100" x2="210" y2="150" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        </svg>
      ),
      'kafka': (
        <svg width="280" height="200" viewBox="0 0 280 200">
           <text x="140" y="30" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">Topic Partition</text>
           
           {/* Partition Blocks */}
           <rect x="40" y="50" width="200" height="40" fill="#e2e8f0" rx="4" />
           <rect x="50" y="55" width="30" height="30" fill="#94a3b8" stroke="#475569" />
           <text x="65" y="75" textAnchor="middle" fill="white" fontSize="10">0</text>
           <rect x="85" y="55" width="30" height="30" fill="#94a3b8" stroke="#475569" />
           <text x="100" y="75" textAnchor="middle" fill="white" fontSize="10">1</text>
           <rect x="120" y="55" width="30" height="30" fill="#94a3b8" stroke="#475569" />
           <text x="135" y="75" textAnchor="middle" fill="white" fontSize="10">2</text>
           <rect x="155" y="55" width="30" height="30" fill="#94a3b8" stroke="#475569" />
           <text x="170" y="75" textAnchor="middle" fill="white" fontSize="10">3</text>
           
           <text x="215" y="75" textAnchor="middle" fill="#64748b" fontSize="12">...</text>

           {/* Consumers */}
           <rect x="60" y="120" width="60" height="40" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
           <text x="90" y="145" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Con A</text>
           <path d="M90,120 L100,85" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />

           <rect x="160" y="120" width="60" height="40" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
           <text x="190" y="145" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Con B</text>
           <path d="M190,120 L170,85" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />

           <text x="140" y="180" textAnchor="middle" fill="#475569" fontSize="10">Consumer Group</text>
           <rect x="50" y="110" width="180" height="60" rx="8" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4,4" />
        </svg>
      ),
      'dlq': (
        <svg width="280" height="200" viewBox="0 0 280 200">
           <rect x="20" y="80" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
           <text x="45" y="105" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Source</text>

           <text x="140" y="45" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">Main Queue</text>
           <rect x="100" y="55" width="80" height="50" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
           <path d="M70,90 L100,80" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

           <rect x="210" y="80" width="50" height="40" rx="4" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
           <text x="235" y="105" textAnchor="middle" fill="#991b1b" fontSize="8" fontWeight="bold">Fail x3</text>
           
           <path d="M180,80 L210,90" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
           
           <path d="M235,120 L235,140 L180,140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4,4" />
           
           <text x="140" y="130" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">DLQ</text>
           <rect x="100" y="140" width="80" height="40" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
           <text x="140" y="165" textAnchor="middle" fill="#64748b" fontSize="10">Holding Area</text>

        </svg>
      ),
      'event-sourcing': (
        <svg width="280" height="200" viewBox="0 0 280 200">
           <text x="140" y="30" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">Event Log (Append Only)</text>
           
           <rect x="40" y="50" width="200" height="120" rx="4" fill="#f8fafc" stroke="#e2e8f0" />
           
           <rect x="60" y="60" width="160" height="25" rx="2" fill="#bfdbfe" stroke="#3b82f6" />
           <text x="140" y="77" textAnchor="middle" fill="#1e40af" fontSize="10">Event: AccountCreated</text>
           
           <rect x="60" y="95" width="160" height="25" rx="2" fill="#bfdbfe" stroke="#3b82f6" />
           <text x="140" y="112" textAnchor="middle" fill="#1e40af" fontSize="10">Event: Deposited $100</text>
           
           <rect x="60" y="130" width="160" height="25" rx="2" fill="#bfdbfe" stroke="#3b82f6" />
           <text x="140" y="147" textAnchor="middle" fill="#1e40af" fontSize="10">Event: Withdrawn $20</text>
           
           <line x1="140" y1="85" x2="140" y2="95" stroke="#64748b" strokeWidth="1" />
           <line x1="140" y1="120" x2="140" y2="130" stroke="#64748b" strokeWidth="1" />

           <text x="220" y="185" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Current: $80</text>
        </svg>
      ),
      'cqrs': (
        <svg width="280" height="200" viewBox="0 0 280 200">
           <rect x="20" y="80" width="40" height="40" rx="50" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
           <text x="40" y="105" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">UI</text>

           <path d="M40,80 L80,50" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
           <path d="M80,150 L40,120" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />

           <rect x="80" y="30" width="70" height="40" rx="4" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
           <text x="115" y="55" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Command</text>
           <text x="115" y="66" textAnchor="middle" fill="#991b1b" fontSize="8">(Write)</text>

           <rect x="80" y="130" width="70" height="40" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
           <text x="115" y="155" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Query</text>
           <text x="115" y="166" textAnchor="middle" fill="#166534" fontSize="8">(Read)</text>

           <rect x="190" y="30" width="60" height="50" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
           <text x="220" y="55" textAnchor="middle" fill="#475569" fontSize="8">Write DB</text>
           <text x="220" y="65" textAnchor="middle" fill="#475569" fontSize="8">(Normalized)</text>

           <rect x="190" y="125" width="60" height="50" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
           <text x="220" y="150" textAnchor="middle" fill="#475569" fontSize="8">Read DB</text>
           <text x="220" y="160" textAnchor="middle" fill="#475569" fontSize="8">(Denormalized)</text>

           <path d="M150,50 L190,50" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrow)" />
           <path d="M190,150 L150,150" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow)" />
           
           <path d="M220,80 L220,125" stroke="#64748b" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrow)" />
           <text x="250" y="105" textAnchor="middle" fill="#64748b" fontSize="8">Sync</text>
        </svg>
      )
    };

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
          <h3 className="text-lg font-bold mb-4 text-center">Messaging & Streaming</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {messaging.concepts.map(c => (
              <div 
                key={c.id}
                className={`p-3 flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                  selectedId === c.id 
                    ? 'bg-blue-100 border-2 border-blue-500' 
                    : 'bg-white border border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedId(c.id)}
              >
                <span className="mr-2">{getIcon(c.icon)}</span>
                <span className="font-medium text-sm">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <h4 className="text-xl font-bold text-blue-700 mb-3">{concept.name}</h4>
                   <p className="text-gray-700 mb-4">{concept.description}</p>
                   
                   {concept.details && (
                      <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                        {concept.details.map((d, i) => <li key={i}>{d}</li>)}
                      </ul>
                   )}

                   {concept.pros && (
                     <div className="mb-4">
                       <h5 className="font-semibold text-green-700 mb-2">Pros:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {concept.pros.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                     </div>
                   )}

                   {concept.cons && (
                     <div className="mb-4">
                       <h5 className="font-semibold text-red-700 mb-2">Cons:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {concept.cons.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                     </div>
                   )}

                   <div className="bg-gray-50 p-3 rounded-md border border-gray-200 mt-2">
                      <h5 className="font-semibold text-gray-700 mb-1 text-xs uppercase">Example:</h5>
                      <p className="text-gray-600 text-sm">{concept.example}</p>
                   </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-gray-50 rounded p-4 border border-gray-100">
                   {messagingDiagrams[selectedId] || <div className="text-gray-400">Diagram coming soon</div>}
                </div>
             </div>
          </div>
      </div>
    );
  };



  const EndToEndDiagram = () => {
    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
          <h3 className="text-lg font-bold mb-4 text-center">End-to-End System Flow</h3>
          
          <div className="bg-white p-6 rounded shadow overflow-x-auto">
            <div className="min-w-[1000px] flex flex-col items-center">
              <svg width="1000" height="500" viewBox="0 0 1000 500">
                {/* 1. Client */}
                <g transform="translate(20, 200)">
                   <circle cx="30" cy="30" r="20" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                   <text x="30" y="70" textAnchor="middle" fill="#7f1d1d" fontSize="12" fontWeight="bold">Client</text>
                </g>

                {/* Arrow to Forward Proxy */}
                <path d="M70,230 L90,230" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* 2. Forward Proxy */}
                <g transform="translate(90, 200)">
                   <rect x="0" y="0" width="60" height="60" rx="4" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" strokeDasharray="4,2" />
                   <text x="30" y="25" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="bold">Forward</text>
                   <text x="30" y="40" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="bold">Proxy</text>
                </g>

                {/* Arrow to Internet/DNS boundary */}
                <path d="M150,230 L180,100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5,5" />
                <path d="M150,230 L180,350" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5,5" />
                <path d="M150,230 L260,230" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* 3. DNS */}
                <g transform="translate(160, 50)">
                   <rect x="0" y="0" width="80" height="40" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                   <text x="40" y="25" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">DNS</text>
                </g>

                {/* 4. CDN */}
                <g transform="translate(160, 350)">
                   <rect x="0" y="0" width="80" height="40" rx="4" fill="#a5f3fc" stroke="#0891b2" strokeWidth="2" />
                   <text x="40" y="25" textAnchor="middle" fill="#0e7490" fontSize="12" fontWeight="bold">CDN</text>
                </g>

                 {/* 5. Load Balancer / Reverse Proxy */}
                <g transform="translate(260, 200)">
                   <rect x="0" y="0" width="60" height="60" rx="4" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
                   <text x="30" y="25" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Load</text>
                   <text x="30" y="38" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Balancer</text>
                   <text x="30" y="52" textAnchor="middle" fill="#92400e" fontSize="8">(Reverse Proxy)</text>
                </g>

                {/* Arrow to API Gateway */}
                <path d="M320,230 L350,230" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* 6. API Gateway */}
                <g transform="translate(350, 200)">
                   <rect x="0" y="0" width="60" height="60" rx="4" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
                   <text x="30" y="25" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="bold">API</text>
                   <text x="30" y="40" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="bold">Gateway</text>
                </g>

                {/* Arrows to Services */}
                <path d="M410,230 L450,150" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
                <path d="M410,230 L450,310" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* 7. Web/App Servers */}
                <g transform="translate(450, 120)">
                   <rect x="0" y="0" width="80" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                   <text x="40" y="35" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Service A</text>
                </g>
                <g transform="translate(450, 280)">
                   <rect x="0" y="0" width="80" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                   <text x="40" y="35" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Service B</text>
                </g>

                {/* Arrow to Cache */}
                <path d="M530,150 L650,140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
                
                {/* 8. Cache */}
                <g transform="translate(650, 100)">
                   <rect x="0" y="0" width="80" height="60" rx="4" fill="#ffd166" stroke="#d97706" strokeWidth="2" />
                   <text x="40" y="35" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">Cache</text>
                   <text x="40" y="50" textAnchor="middle" fill="#b45309" fontSize="8">(Redis)</text>
                </g>

                {/* Arrow to DB */}
                <path d="M530,310 L650,320" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* 9. Database */}
                <g transform="translate(650, 300)">
                   <rect x="0" y="0" width="80" height="60" rx="4" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="2" />
                   <text x="40" y="25" textAnchor="middle" fill="#312e81" fontSize="12" fontWeight="bold">Primary DB</text>
                   <line x1="10" y1="35" x2="70" y2="35" stroke="#4f46e5" strokeWidth="1" />
                   <line x1="10" y1="40" x2="70" y2="40" stroke="#4f46e5" strokeWidth="1" />
                   <line x1="10" y1="45" x2="70" y2="45" stroke="#4f46e5" strokeWidth="1" />
                </g>
                
                 {/* Read Replicas */}
                <g transform="translate(750, 300)">
                   <rect x="0" y="0" width="60" height="40" rx="4" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1" strokeDasharray="4,2" />
                   <text x="30" y="25" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="bold">Read Replica</text>
                   <path d="M-20,30 L0,30" stroke="#6366f1" strokeWidth="1" markerEnd="url(#arrow)" />
                </g>

                {/* Arrow to Queue */}
                <path d="M490,340 L490,420 L530,420" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* 10. Message Queue */}
                <g transform="translate(530, 400)">
                   <rect x="0" y="0" width="80" height="40" rx="4" fill="#d8b4fe" stroke="#9333ea" strokeWidth="2" />
                   <text x="40" y="20" textAnchor="middle" fill="#581c87" fontSize="10" fontWeight="bold">Msg Queue</text>
                   <rect x="10" y="25" width="5" height="10" fill="#9333ea" />
                   <rect x="20" y="25" width="5" height="10" fill="#9333ea" />
                   <rect x="30" y="25" width="5" height="10" fill="#9333ea" />
                </g>

                {/* Arrow to Workers */}
                <path d="M610,420 L650,420" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* 11. Workers */}
                <g transform="translate(650, 400)">
                   <rect x="0" y="0" width="80" height="40" rx="4" fill="#f0abfc" stroke="#c026d3" strokeWidth="2" />
                   <text x="40" y="25" textAnchor="middle" fill="#701a75" fontSize="10" fontWeight="bold">Async Workers</text>
                </g>
                
                {/* Arrow Workers to DB */}
                <path d="M690,400 L690,360" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4,2" />

              </svg>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="border p-3 rounded bg-blue-50">
                      <h4 className="font-bold text-blue-800 text-sm mb-1">1. Traffic Entry & Proxies</h4>
                      <p className="text-xs text-gray-600">
                        <strong>Client</strong> can use a <strong>Forward Proxy</strong> (e.g. VPN) for anonymity.
                        Traffic hits **DNS** then **LB (Reverse Proxy)** which handles SSL termination and routing.
                      </p>
                  </div>
                  <div className="border p-3 rounded bg-indigo-50">
                      <h4 className="font-bold text-indigo-800 text-sm mb-1">2. Gateway & Application</h4>
                      <p className="text-xs text-gray-600">
                        <strong>API Gateway</strong> manages auth, rate limiting, and routing to specific <strong>Services</strong>.
                        Services handle the core business logic.
                      </p>
                  </div>
                  <div className="border p-3 rounded bg-yellow-50">
                      <h4 className="font-bold text-yellow-800 text-sm mb-1">3. Data Layer</h4>
                      <p className="text-xs text-gray-600">Hot data is fetched from Cache (fast). Persistent data is stored in the Database (Writes to Master, Reads from Replicas for scale).</p>
                  </div>
                   <div className="border p-3 rounded bg-purple-50">
                      <h4 className="font-bold text-purple-800 text-sm mb-1">4. Async Processing</h4>
                      <p className="text-xs text-gray-600">Heavy/Background tasks (e.g., emails, report generation) are sent to a Message Queue and processed by Worker services asynchronously.</p>
                  </div>
              </div>
            </div>
          </div>
      </div>
    )
  };

  const DistributedSystemsDiagram = () => {
    const [selectedId, setSelectedId] = useState('cap-theorem');
    const { distributedSystems } = systemDesignData.systemDesign;
    const concept = distributedSystems.concepts.find(c => c.id === selectedId);

    const dsDiagrams = {
        'cap-theorem': (
          <svg width="280" height="200" viewBox="0 0 280 200">
             <circle cx="100" cy="80" r="50" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" fillOpacity="0.5" />
             <text x="100" y="80" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontWeight="bold">Consistency</text>

             <circle cx="180" cy="80" r="50" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" fillOpacity="0.5" />
             <text x="180" y="80" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Availability</text>

             <circle cx="140" cy="140" r="50" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" fillOpacity="0.5" />
             <text x="140" y="150" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Partition</text>
             <text x="140" y="160" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Tolerance</text>

             <text x="140" y="90" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="bold">CA</text>
             <text x="100" y="130" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="bold">CP</text>
             <text x="180" y="130" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="bold">AP</text>
          </svg>
        ),
        'consistency-models': (
          <svg width="280" height="200" viewBox="0 0 280 200">
             <text x="40" y="30" fill="#1e40af" fontSize="10" fontWeight="bold">Strong (Linearizability)</text>
             <line x1="20" y1="50" x2="260" y2="50" stroke="#64748b" strokeWidth="1" />
             <rect x="40" y="40" width="20" height="20" fill="#bfdbfe" stroke="#3b82f6" />
             <text x="50" y="54" textAnchor="middle" fontSize="8">W(x)</text>
             
             <rect x="100" y="40" width="20" height="20" fill="#bbf7d0" stroke="#22c55e" />
             <text x="110" y="54" textAnchor="middle" fontSize="8">R(x)</text>
             <text x="110" y="75" textAnchor="middle" fontSize="8" fill="#166534">Must see W(x)</text>

             <text x="40" y="120" fill="#9a3412" fontSize="10" fontWeight="bold">Eventual Consistency</text>
             <line x1="20" y1="140" x2="260" y2="140" stroke="#64748b" strokeWidth="1" />
             
             <rect x="40" y="130" width="20" height="20" fill="#fed7aa" stroke="#f97316" />
             <text x="50" y="144" textAnchor="middle" fontSize="8">W(y)</text>

             <rect x="100" y="130" width="20" height="20" fill="#e2e8f0" stroke="#64748b" />
             <text x="110" y="144" textAnchor="middle" fontSize="8">R(y)</text>
             <text x="110" y="165" textAnchor="middle" fontSize="8" fill="#64748b">Might see old</text>

             <rect x="200" y="130" width="20" height="20" fill="#bbf7d0" stroke="#22c55e" />
             <text x="210" y="144" textAnchor="middle" fontSize="8">R(y)</text>
             <text x="210" y="165" textAnchor="middle" fontSize="8" fill="#166534">Eventually sees new</text>
          </svg>
        ),
        'leader-election': (
          <svg width="280" height="200" viewBox="0 0 280 200">
             <circle cx="140" cy="50" r="25" fill="#fcd34d" stroke="#d97706" strokeWidth="3" />
             <text x="140" y="54" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Leader</text>
             <path d="M120,30 L130,20 L140,30 L150,20 L160,30" fill="none" stroke="#d97706" strokeWidth="2" />

             <circle cx="70" cy="140" r="20" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="70" y="144" textAnchor="middle" fill="#1e40af" fontSize="10">Follower</text>

             <circle cx="140" cy="140" r="20" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="140" y="144" textAnchor="middle" fill="#1e40af" fontSize="10">Follower</text>

             <circle cx="210" cy="140" r="20" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="210" y="144" textAnchor="middle" fill="#1e40af" fontSize="10">Follower</text>

             <path d="M140,80 L70,115" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrow)" />
             <path d="M140,80 L140,115" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrow)" />
             <path d="M140,80 L210,115" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrow)" />
             
             <text x="180" y="100" textAnchor="middle" fill="#64748b" fontSize="8">Heartbeats</text>
          </svg>
        ),
        'consensus': (
          <svg width="280" height="200" viewBox="0 0 280 200">
             <rect x="20" y="80" width="40" height="40" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
             <text x="40" y="105" textAnchor="middle" fill="#475569" fontSize="10">Client</text>

             <rect x="100" y="60" width="50" height="80" rx="4" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
             <text x="125" y="105" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Leader</text>

             <path d="M60,90 L100,90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
             <text x="80" y="85" textAnchor="middle" fill="#475569" fontSize="8">Propose</text>

             <rect x="200" y="30" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="225" y="55" textAnchor="middle" fill="#1e40af" fontSize="10">Peer A</text>

             <rect x="200" y="80" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="225" y="105" textAnchor="middle" fill="#1e40af" fontSize="10">Peer B</text>

             <rect x="200" y="130" width="50" height="40" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="225" y="155" textAnchor="middle" fill="#1e40af" fontSize="10">Peer C</text>

             <path d="M150,80 L200,50" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
             <path d="M150,100 L200,100" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
             <path d="M150,120 L200,150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />

             <text x="175" y="45" textAnchor="middle" fill="#64748b" fontSize="8">Replicate Log</text>
          </svg>
        ),
         'distributed-locking': (
          <svg width="280" height="200" viewBox="0 0 280 200">
             <rect x="110" y="80" width="60" height="60" rx="4" fill="#64748b" stroke="#334155" strokeWidth="2" />
             <rect x="135" y="90" width="10" height="15" rx="2" fill="#e2e8f0" />
             <rect x="130" y="105" width="20" height="15" rx="2" fill="#e2e8f0" />
             <text x="140" y="130" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">Resource</text>

             <circle cx="50" cy="50" r="15" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
             <text x="50" y="54" textAnchor="middle" fill="#7f1d1d" fontSize="8">Proc A</text>
             <circle cx="50" cy="150" r="15" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="50" y="154" textAnchor="middle" fill="#1e40af" fontSize="8">Proc B</text>
             <circle cx="230" cy="100" r="15" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="230" y="104" textAnchor="middle" fill="#1e40af" fontSize="8">Proc C</text>

             <path d="M65,58 L110,85" stroke="#ef4444" strokeWidth="2" />
             <path d="M100,75 L80,55" stroke="#ef4444" strokeWidth="2" fill="none" />
             <path d="M80,75 L100,55" stroke="#ef4444" strokeWidth="2" fill="none" />
             
             <path d="M65,142 L110,115" stroke="#3b82f6" strokeWidth="2" />
             <path d="M215,100 L170,105" stroke="#3b82f6" strokeWidth="2" />

             <rect x="120" y="20" width="40" height="40" rx="4" fill="#d8b4fe" stroke="#9333ea" strokeWidth="2" />
             <text x="140" y="45" textAnchor="middle" fill="#581c87" fontSize="8" fontWeight="bold">Lock Mgr</text>
             
             <path d="M60,40 L120,40" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
             <text x="90" y="35" textAnchor="middle" fill="#64748b" fontSize="8">Acquire?</text>
          </svg>
        ),
        'quorum': (
          <svg width="280" height="200" viewBox="0 0 280 200">
             <circle cx="80" cy="130" r="30" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <text x="80" y="135" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">N=3</text>

             <circle cx="140" cy="80" r="30" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
             <text x="140" y="85" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">R=2</text>
             
             <circle cx="200" cy="130" r="30" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
             <text x="200" y="135" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">W=2</text>

             <text x="140" y="180" textAnchor="middle" fill="#475569" fontSize="12">R + W {'>'} N</text>
             <text x="140" y="195" textAnchor="middle" fill="#475569" fontSize="10">(2 + 2 {'>'} 3)</text>
             
             <path d="M110,110 L140,110" stroke="#475569" strokeWidth="2" />
             <path d="M170,110 L140,110" stroke="#475569" strokeWidth="2" />
             <text x="140" y="125" textAnchor="middle" fill="#475569" fontSize="8">Overlap ensures correct read</text>
          </svg>
        ),
        'gossip-protocol': (
          <svg width="280" height="200" viewBox="0 0 280 200">
             <circle cx="60" cy="60" r="15" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
             <circle cx="140" cy="40" r="15" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <circle cx="220" cy="60" r="15" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             
             <circle cx="60" cy="140" r="15" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <circle cx="140" cy="160" r="15" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
             <circle cx="220" cy="140" r="15" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />

             {/* Connections */}
             <line x1="75" y1="60" x2="125" y2="45" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
             <line x1="155" y1="45" x2="205" y2="60" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
             
             <line x1="60" y1="75" x2="60" y2="125" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
             <line x1="220" y1="75" x2="220" y2="125" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
             
             <line x1="75" y1="140" x2="125" y2="155" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
             <line x1="155" y1="155" x2="205" y2="140" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
             
             {/* Random spread */}
             <path d="M75,65 L130,150" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
             <path d="M75,60 L205,60" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

             <text x="140" y="100" textAnchor="middle" fill="#64748b" fontSize="10">Random peer selection</text>
          </svg>
        ),
        'vector-clocks': (
          <svg width="280" height="200" viewBox="0 0 280 200">
             <line x1="40" y1="40" x2="40" y2="180" stroke="#64748b" strokeWidth="2" />
             <text x="40" y="30" textAnchor="middle" fill="#475569" fontSize="10">Node A</text>
             
             <line x1="240" y1="40" x2="240" y2="180" stroke="#64748b" strokeWidth="2" />
             <text x="240" y="30" textAnchor="middle" fill="#475569" fontSize="10">Node B</text>

             {/* Events */}
             <circle cx="40" cy="60" r="5" fill="#3b82f6" />
             <text x="20" y="65" textAnchor="end" fill="#1e40af" fontSize="10">[1, 0]</text>
             
             <path d="M40,60 L240,90" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
             
             <circle cx="240" cy="90" r="5" fill="#22c55e" />
             <text x="260" y="95" textAnchor="start" fill="#166534" fontSize="10">[1, 1]</text>
             
             <circle cx="240" cy="120" r="5" fill="#22c55e" />
             <text x="260" y="125" textAnchor="start" fill="#166534" fontSize="10">[1, 2]</text>

             <path d="M240,120 L40,150" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />

             <circle cx="40" cy="150" r="5" fill="#3b82f6" />
             <text x="20" y="155" textAnchor="end" fill="#1e40af" fontSize="10">[2, 2]</text>
          </svg>
        ),
        'split-brain': (
           <svg width="280" height="200" viewBox="0 0 280 200">
             <rect x="20" y="40" width="100" height="120" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
             <rect x="160" y="40" width="100" height="120" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
             
             <path d="M140,20 L140,180" stroke="#ef4444" strokeWidth="4" />
             <text x="140" y="195" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">Network Partition</text>

             <circle cx="70" cy="80" r="15" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
             <text x="70" y="85" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="bold">Master?</text>

             <circle cx="210" cy="80" r="15" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
             <text x="210" y="85" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="bold">Master?</text>

             <circle cx="50" cy="130" r="10" fill="#bfdbfe" stroke="#3b82f6" />
             <circle cx="90" cy="130" r="10" fill="#bfdbfe" stroke="#3b82f6" />

             <circle cx="190" cy="130" r="10" fill="#bfdbfe" stroke="#3b82f6" />
             <circle cx="230" cy="130" r="10" fill="#bfdbfe" stroke="#3b82f6" />
             
             <text x="70" y="155" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">Write A</text>
             <text x="210" y="155" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">Write B</text>
             
             <text x="140" y="100" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold" transform="rotate(-90, 140, 100)">BROKEN</text>
           </svg>
        )
    };

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
          <h3 className="text-lg font-bold mb-4 text-center">Distributed Systems Concepts</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {distributedSystems.concepts.map(c => (
              <div 
                key={c.id}
                className={`p-3 flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                  selectedId === c.id 
                    ? 'bg-blue-100 border-2 border-blue-500' 
                    : 'bg-white border border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedId(c.id)}
              >
                <span className="mr-2">{getIcon(c.icon)}</span>
                <span className="font-medium text-xs md:text-sm">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <h4 className="text-xl font-bold text-blue-700 mb-3">{concept.name}</h4>
                   <p className="text-gray-700 mb-4">{concept.description}</p>
                   
                   {concept.details && (
                      <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                        {concept.details.map((d, i) => <li key={i}>{d}</li>)}
                      </ul>
                   )}

                   {concept.types && (
                     <div className="mb-4">
                       <h5 className="font-semibold text-gray-700 mb-2">Types:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {concept.types.map((t, i) => (
                              <li key={i}><strong>{t.name}:</strong> {t.desc}</li>
                          ))}
                        </ul>
                     </div>
                   )}

                   <div className="bg-gray-50 p-3 rounded-md border border-gray-200 mt-2">
                      <h5 className="font-semibold text-gray-700 mb-1 text-xs uppercase">Example:</h5>
                      <p className="text-gray-600 text-sm">{concept.example}</p>
                   </div>

                    {/* Analogy Section */}
                    {concept.analogy && (
                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
                            <p className="text-sm text-yellow-800 italic">
                                <span className="font-bold not-italic mr-1">💡 Analogy:</span>
                                "{concept.analogy}"
                            </p>
                        </div>
                    )}

                    {/* Flow Section */}
                    {concept.flow && (
                        <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
                            <h5 className="font-semibold text-blue-800 mb-2 text-sm">
                                {concept.flow.title}
                            </h5>
                            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                {concept.flow.steps.map((step, i) => (
                                    <li key={i} className="pl-1">{step}</li>
                                ))}
                            </ol>
                        </div>
                    )}

                    {/* Q&A Section */}
                    {concept.qa && (
                        <div className="mt-4">
                            <h5 className="font-semibold text-gray-800 mb-2">Common Questions:</h5>
                            <div className="space-y-3">
                                {concept.qa.map((item, i) => (
                                    <div key={i} className="bg-gray-50 p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-sm text-gray-900 mb-1">Q: {item.q}</p>
                                        <p className="text-sm text-gray-600">A: {item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center justify-center bg-gray-50 rounded p-4 border border-gray-100">
                   {dsDiagrams[selectedId] || <div className="text-gray-400">Diagram coming soon</div>}
                </div>
             </div>
          </div>
      </div>
    );
  };

  const CommunicationDiagram = () => {
    const [selectedPattern, setSelectedPattern] = useState('polling');
    const { communication } = systemDesignData.systemDesign;

    const communicationDiagrams = {
        polling: (
            <svg width="280" height="200" viewBox="0 0 280 200">
                <rect x="20" y="40" width="60" height="120" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="50" y="30" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Client</text>
                
                <rect x="200" y="40" width="60" height="120" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
                <text x="230" y="30" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Server</text>

                <path d="M80,50 L200,50" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="140" y="45" textAnchor="middle" fill="#475569" fontSize="8">Request?</text>
                <path d="M200,60 L80,60" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="140" y="70" textAnchor="middle" fill="#475569" fontSize="8">No Data</text>

                <path d="M80,90 L200,90" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="140" y="85" textAnchor="middle" fill="#475569" fontSize="8">Request?</text>
                <path d="M200,100 L80,100" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="140" y="110" textAnchor="middle" fill="#475569" fontSize="8">No Data</text>

                <path d="M80,130 L200,130" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="140" y="125" textAnchor="middle" fill="#475569" fontSize="8">Request?</text>
                <path d="M200,140 L80,140" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="140" y="150" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Data!</text>
            </svg>
        ),
        'long-polling': (
            <svg width="280" height="200" viewBox="0 0 280 200">
                <rect x="20" y="40" width="60" height="120" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="50" y="30" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Client</text>
                
                <rect x="200" y="40" width="60" height="120" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
                <text x="230" y="30" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Server</text>

                <path d="M80,60 L200,60" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="140" y="55" textAnchor="middle" fill="#475569" fontSize="8">Request (Holds)</text>
                
                <rect x="210" y="70" width="40" height="40" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
                <text x="230" y="90" textAnchor="middle" fill="#92400e" fontSize="8">Wait...</text>
                
                <path d="M200,120 L80,120" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="140" y="115" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Response (Data)</text>

                <path d="M80,140 L200,140" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="140" y="135" textAnchor="middle" fill="#475569" fontSize="8">New Request</text>
            </svg>
        ),
        'websockets': (
            <svg width="280" height="200" viewBox="0 0 280 200">
                <rect x="20" y="40" width="60" height="120" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="50" y="30" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Client</text>
                
                <rect x="200" y="40" width="60" height="120" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
                <text x="230" y="30" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Server</text>

                <path d="M80,60 L200,60" stroke="#64748b" strokeWidth="2" />
                <path d="M80,140 L200,140" stroke="#64748b" strokeWidth="2" />
                
                <circle cx="140" cy="60" r="4" fill="#22c55e" />
                <circle cx="140" cy="140" r="4" fill="#22c55e" />
                
                <text x="140" y="80" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Persistant Connection</text>

                <path d="M100,90 L180,90" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#arrow)" />
                <path d="M180,110 L100,110" stroke="#22c55e" strokeWidth="1" markerEnd="url(#arrow)" />
                
                <text x="140" y="100" textAnchor="middle" fill="#475569" fontSize="8">Full Duplex (Push/Pull)</text>
            </svg>
        ),
        'webhooks': (
             <svg width="280" height="200" viewBox="0 0 280 200">
                <rect x="20" y="40" width="60" height="60" rx="4" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="50" y="30" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Client App</text>
                <text x="50" y="70" textAnchor="middle" fill="#1e40af" fontSize="8">Endpoint</text>

                <rect x="200" y="40" width="60" height="120" rx="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
                <text x="230" y="30" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">Provider</text>
                <text x="230" y="70" textAnchor="middle" fill="#166534" fontSize="8">(Stripe/GitHub)</text>

                <rect x="210" y="90" width="40" height="40" rx="4" fill="#fca5a5" stroke="#ef4444" strokeWidth="1" />
                <text x="230" y="115" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontWeight="bold">Event!</text>

                <path d="M200,100 L120,50 L80,50" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="140" y="45" textAnchor="middle" fill="#991b1b" fontSize="8" fontWeight="bold">HTTP POST (Payload)</text>
            </svg>
        )
    };

    return (
      <div className="w-full bg-gray-50 rounded-lg p-4 overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
        <h3 className="text-lg font-bold mb-6 text-center">Communication Patterns</h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {communication.patterns.map(pattern => (
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
              <span className="font-medium text-sm">{pattern.name}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <h4 className="text-xl font-bold text-blue-700 mb-3">
                {communication.patterns.find(p => p.id === selectedPattern)?.name}
               </h4>
               <p className="text-gray-700 mb-4">
                 {communication.patterns.find(p => p.id === selectedPattern)?.description}
               </p>

               {communication.patterns.find(p => p.id === selectedPattern)?.analogy && (
                   <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4 rounded-r">
                       <p className="text-sm text-yellow-800 italic">
                           <span className="font-bold not-italic mr-1">💡 Analogy:</span>
                           "{communication.patterns.find(p => p.id === selectedPattern)?.analogy}"
                       </p>
                   </div>
               )}
               
               <div className="mb-4">
                 <h5 className="font-semibold text-green-700 mb-2">Pros:</h5>
                 <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {communication.patterns.find(p => p.id === selectedPattern)?.pros.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                 </ul>
               </div>

               <div>
                 <h5 className="font-semibold text-red-700 mb-2">Cons:</h5>
                 <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {communication.patterns.find(p => p.id === selectedPattern)?.cons.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                 </ul>
               </div>

                <div className="mt-4 bg-gray-50 p-3 rounded border">
                    <h5 className="font-semibold text-gray-700 mb-1">Example:</h5>
                    <p className="text-gray-600 text-sm">
                        {communication.patterns.find(p => p.id === selectedPattern)?.example}
                    </p>
                </div>

                {/* Handshake Section */}
                {communication.patterns.find(p => p.id === selectedPattern)?.handshake && (
                    <div className="mt-4">
                        <h5 className="font-semibold text-purple-700 mb-2">Handshake Process:</h5>
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-600">
                            {communication.patterns.find(p => p.id === selectedPattern)?.handshake.steps.map((step, i) => (
                                <li key={i} className="pl-1">{step}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Flow Section */}
                {communication.patterns.find(p => p.id === selectedPattern)?.flow && (
                    <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
                        <h5 className="font-semibold text-blue-800 mb-2 text-sm">
                            {communication.patterns.find(p => p.id === selectedPattern)?.flow.title}
                        </h5>
                        <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                             {communication.patterns.find(p => p.id === selectedPattern)?.flow.steps.map((step, i) => (
                                <li key={i} className="pl-1">{step}</li>
                            ))}
                        </ol>
                    </div>
                )}

                {/* Q&A Section */}
                {communication.patterns.find(p => p.id === selectedPattern)?.qa && (
                    <div className="mt-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Common Questions:</h5>
                        <div className="space-y-3">
                             {communication.patterns.find(p => p.id === selectedPattern)?.qa.map((item, i) => (
                                <div key={i} className="bg-gray-50 p-3 rounded border border-gray-200">
                                    <p className="font-semibold text-sm text-gray-900 mb-1">Q: {item.q}</p>
                                    <p className="text-sm text-gray-600">A: {item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded p-4">
              {communicationDiagrams[selectedPattern]}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InterviewQuestionsDiagram = () => {
    const [selectedCategory, setSelectedCategory] = useState('networking-dns');
    const [selectedDifficulty, setSelectedDifficulty] = useState('basic');
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const { categories } = interviewData.interviewQuestions;
    const activeCategory = categories.find(c => c.id === selectedCategory);
    const questions = activeCategory?.questions[selectedDifficulty] || [];

    const difficultyConfig = {
      basic: { label: 'Basic', color: 'green', bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', activeBg: 'bg-green-600' },
      medium: { label: 'Medium', color: 'yellow', bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300', activeBg: 'bg-yellow-500' },
      advanced: { label: 'Advanced', color: 'orange', bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', activeBg: 'bg-orange-500' },
      tricky: { label: 'Tricky', color: 'red', bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', activeBg: 'bg-red-600' }
    };

    const getQuestionCount = (cat, diff) => cat?.questions[diff]?.length || 0;

    return (
      <div className="w-full bg-gray-50 rounded-lg overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="flex h-full">
          {/* Category Sidebar */}
          <div className="w-64 border-r border-slate-200 bg-slate-50 overflow-y-auto p-2 space-y-1 flex-shrink-0">
            <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Categories</div>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setExpandedQuestion(null); }}
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm'
                    : 'text-slate-600 hover:bg-white hover:shadow-sm border border-transparent'
                }`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0 ${
                  selectedCategory === cat.id ? 'bg-blue-200 text-blue-700' : 'bg-slate-200 text-slate-500'
                }`}>
                  {getIcon(cat.icon)}
                </span>
                <span className="font-medium text-sm leading-tight truncate">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header + Difficulty Tabs */}
            <div className="bg-white border-b border-slate-200 px-6 py-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-800">{activeCategory?.name}</h3>
                <span className="text-sm text-slate-400">
                  {questions.length} question{questions.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="flex space-x-2">
                {Object.entries(difficultyConfig).map(([key, config]) => (
                  <button
                    key={key}
                    onClick={() => { setSelectedDifficulty(key); setExpandedQuestion(null); }}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center space-x-1.5 ${
                      selectedDifficulty === key
                        ? `${config.activeBg} text-white shadow-sm`
                        : `${config.bg} ${config.text} hover:opacity-80`
                    }`}
                  >
                    <span>{config.label}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      selectedDifficulty === key
                        ? 'bg-white/20 text-white'
                        : 'bg-white/60'
                    }`}>
                      {getQuestionCount(activeCategory, key)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Questions List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {questions.length === 0 ? (
                <div className="text-center text-slate-400 py-12">
                  <p className="text-lg">No questions in this category at this level yet.</p>
                </div>
              ) : (
                questions.map((q, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-xl border transition-all cursor-pointer ${
                      expandedQuestion === idx
                        ? 'border-blue-300 shadow-md ring-1 ring-blue-100'
                        : 'border-slate-200 hover:border-blue-200 hover:shadow-sm'
                    }`}
                    onClick={() => setExpandedQuestion(expandedQuestion === idx ? null : idx)}
                  >
                    <div className="px-5 py-4 flex items-start">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold ${
                        expandedQuestion === idx
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium leading-relaxed ${
                          expandedQuestion === idx ? 'text-blue-800' : 'text-slate-800'
                        }`}>
                          {q.question}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {q.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className={`ml-3 flex-shrink-0 transition-transform ${
                        expandedQuestion === idx ? 'rotate-180' : ''
                      }`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded Hint */}
                    {expandedQuestion === idx && (
                      <div className="px-5 pb-5 pt-0">
                        <div className="ml-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">💡 Answer Direction</span>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                            {q.hint}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const allDiagrams = [
      { id: 'architecture-patterns', name: 'Architecture' },
      { id: 'networking', name: 'Networking' },
      { id: 'scalability', name: 'Scalability' },
      { id: 'databases', name: 'Databases' },
      { id: 'caching', name: 'Caching' },
      { id: 'api-design', name: 'API Design' },
      { id: 'messaging', name: 'Messaging & Streaming' },
      { id: 'distributed-systems', name: 'Distributed Systems' },
      { id: 'communication', name: 'Communication' },
      { id: 'end-to-end', name: 'End-to-End Flow' },
      { id: 'interview-questions', name: 'Interview Q&A' }
  ];

  const renderDiagram = () => {
    switch(activeDiagram) {
      case 'architecture-patterns': return <ArchitecturePatternsDiagram />;
      case 'messaging': return <MessagingDiagram />;
      case 'networking': return <NetworkingDiagram />;
      case 'scalability': return <ScalabilityDiagram />;
      case 'databases': return <DatabasesDiagram />;
      case 'caching': return <CachingDiagram />;
      case 'api-design': return <ApiDesignDiagram />;
      case 'distributed-systems': return <DistributedSystemsDiagram />;
      case 'communication': return <CommunicationDiagram />;
      case 'end-to-end': return <EndToEndDiagram />;
      case 'interview-questions': return <InterviewQuestionsDiagram />;
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