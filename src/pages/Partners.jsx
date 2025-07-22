import React from 'react';
import { Gamepad2, Server, Globe, Users, Shield, Award, Youtube, Network, Database, Crown, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PARTNERS = [
  {
    id: 1,
    name: "Path.Net",
    logo: "/api/placeholder/50/50",
    category: "Network Infrastructure",
    badge: "PREMIUM PARTNER",
    description: "Leading DDoS-protected network infrastructure provider powering our game servers with ultra-low latency connections worldwide.",
    features: [
      "Enterprise DDoS Protection",
      "Global Low-Latency Network",
      "24/7 NOC Support",
      "Auto-scaling Infrastructure"
    ],
    stats: {
      protection: "2Tbps+",
      latency: "<20ms",
      uptime: "99.99%"
    },
    icon: Network
  },
  {
    id: 2,
    name: "GamersHub",
    logo: "/api/placeholder/50/50",
    category: "Content Creators",
    badge: "VERIFIED",
    description: "Top gaming content creators and streamers who trust our infrastructure for their communities and server hosting needs.",
    features: [
      "1M+ Combined Followers",
      "Daily Gaming Content",
      "Community Events",
      "Exclusive Server Features"
    ],
    stats: {
      creators: "50+",
      reach: "1M+",
      servers: "100+"
    },
    icon: Youtube
  },
  {
    id: 3,
    name: "DataCenter Alliance",
    logo: "/api/placeholder/50/50",
    category: "Infrastructure Provider",
    badge: "ENTERPRISE",
    description: "Strategic datacenter partnerships ensuring optimal performance and reliability for game servers across multiple regions.",
    features: [
      "Global Server Locations",
      "Enterprise Hardware",
      "Redundant Power",
      "24/7 Physical Security"
    ],
    stats: {
      locations: "15+",
      cores: "100K+",
      storage: "5PB+"
    },
    icon: Database
  },
  {
    id: 4,
    name: "ServerKings",
    logo: "/api/placeholder/50/50",
    category: "Game Server Operators",
    badge: "CERTIFIED",
    description: "Professional game server operators managing some of the largest gaming communities worldwide.",
    features: [
      "Custom Server Mods",
      "Community Management",
      "Anti-Cheat Systems",
      "Tournament Hosting"
    ],
    stats: {
      players: "50K+",
      servers: "1000+",
      uptime: "99.9%"
    },
    icon: Crown
  }
];

const PartnerCard = ({ partner }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
    <div className="relative bg-gray-900 rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gray-800 rounded-xl">
            <partner.icon size={24} className="text-blue-400" />
          </div>
          <div>
            <div className="text-sm text-purple-400 font-medium mb-1">
              {partner.category}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {partner.name}
            </h3>
          </div>
        </div>
        {partner.badge && (
          <div className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/20">
            {partner.badge}
          </div>
        )}
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {partner.description}
      </p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {Object.entries(partner.stats).map(([key, value]) => (
          <div key={key} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {value}
            </div>
            <div className="text-sm text-gray-400 capitalize">{key}</div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {partner.features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-300 bg-gray-800/30 rounded-lg p-2">
            <Sparkles size={16} className="text-purple-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StatsCard = ({ icon: Icon, value, label }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
    <div className="relative bg-gray-900 rounded-xl p-6">
      <Icon size={24} className="text-purple-400 mb-4" />
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        {value}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
    </div>
  </div>
);

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden    bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <Helmet>
        <title>Partners | GameHub</title>
        <meta name="description" content="High-performance VPS hosting solutions with dedicated resources and full root access." />
      </Helmet>

      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNiIgc3Ryb2tlPSJyZ2JhKDEwMywgMjMyLCAyNDksIDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-8">
            <Gamepad2 size={20} className="text-purple-400" />
            <span className="text-gray-300 font-medium">Powering Gaming Communities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Gaming Partners
            </span>
          </h1>

          <p className="text-xl font-semibold text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join forces with industry leaders in gaming infrastructure, content creation,
            and server hosting to deliver exceptional gaming experiences worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gray-800/50 rounded-full px-4 py-2 flex items-center space-x-2">
              <Shield size={18} className="text-purple-400" />
              <span className="text-gray-300">DDoS Protected</span>
            </div>
            <div className="bg-gray-800/50 rounded-full px-4 py-2 flex items-center space-x-2">
              <Globe size={18} className="text-purple-400" />
              <span className="text-gray-300">Global Network</span>
            </div>
            <div className="bg-gray-800/50 rounded-full px-4 py-2 flex items-center space-x-2">
              <Award size={18} className="text-purple-400" />
              <span className="text-gray-300">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            icon={Network}
            value="15+"
            label="Global Locations"
          />
          <StatsCard
            icon={Shield}
            value="2 Tbps+"
            label="DDoS Protection"
          />
          <StatsCard
            icon={Users}
            value="100K+"
            label="Active Players"
          />
          <StatsCard
            icon={Server}
            value="10K+"
            label="Game Servers"
          />
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PARTNERS.map(partner => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
}