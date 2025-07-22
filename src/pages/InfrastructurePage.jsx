import React from 'react';
import { Server, Shield, Globe, Zap, Database, Network } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const InfraCard = ({ icon: Icon, title, description, specs }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
    <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 mb-4">{description}</p>
    {specs && (
      <div className="space-y-2">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center text-gray-300">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
            {spec}
          </div>
        ))}
      </div>
    )}
  </div>
);

const StatCard = ({ label, value, description }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 mb-2">
      {value}
    </div>
    <div className="text-white font-medium mb-1">{label}</div>
    <div className="text-gray-400 text-sm">{description}</div>
  </div>
);

export default function InfrastructurePage() {
  const infrastructure = [
    {
      icon: Server,
      title: "Premium Hardware",
      description: "Latest generation processors and enterprise-grade components for maximum performance.",
      specs: [
        "AMD Ryzen 9 5900X & 5950X Processors",
        "DDR4 ECC RAM up to 128GB",
        "NVMe SSD Storage with RAID",
        "Enterprise Network Cards"
      ]
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Multi-layered security systems protecting your servers and data 24/7.",
      specs: [
        "DDoS Protection up to 2.5Tbps",
        "Hardware Firewalls",
        "Intrusion Detection Systems",
        "Regular Security Audits"
      ]
    },
    {
      icon: Network,
      title: "Global Network",
      description: "Strategically located data centers with premium network connectivity.",
      specs: [
        "15+ Global Locations",
        "Tier 1 Network Providers",
        "BGP Routing Optimization",
        "99.9% Network Uptime"
      ]
    },
    {
      icon: Database,
      title: "Storage Solutions",
      description: "High-performance storage systems with redundancy and backup capabilities.",
      specs: [
        "NVMe SSD Primary Storage",
        "RAID 10 Configuration",
        "Automated Backups",
        "Instant Snapshot Recovery"
      ]
    },
    {
      icon: Zap,
      title: "Power & Cooling",
      description: "Redundant power systems and advanced cooling for maximum reliability.",
      specs: [
        "N+1 Redundant Power",
        "UPS Battery Backup",
        "Precision Cooling Systems",
        "Environmental Monitoring"
      ]
    },
    {
      icon: Globe,
      title: "Connectivity",
      description: "Premium bandwidth and low-latency connections to ensure optimal performance.",
      specs: [
        "10Gbps+ Uplinks",
        "Multiple ISP Providers",
        "CDN Integration",
        "Global Peering Agreements"
      ]
    }
  ];

  const stats = [
    {
      label: "Data Centers",
      value: "15+",
      description: "Across 3 continents"
    },
    {
      label: "Network Capacity",
      value: "2.5Tbps",
      description: "DDoS protection"
    },
    {
      label: "Server Uptime",
      value: "99.99%",
      description: "Guaranteed SLA"
    },
    {
      label: "Response Time",
      value: "<20ms",
      description: "Average latency"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      <Helmet>
        <title>Infrastructure | GameHub</title>
        <meta name="description" content="Learn about GameHub's enterprise-grade infrastructure and global network." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center space-x-2 px-4 py-2">
              <Server size={18} className="text-blue-400" />
              <span className="text-gray-300 font-medium">Enterprise Infrastructure</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
            Built for Performance
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            Our enterprise-grade infrastructure is designed to deliver exceptional performance, reliability, and security for your gaming servers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Infrastructure Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {infrastructure.map((item, index) => (
            <InfraCard key={index} {...item} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Why Our Infrastructure Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">For Gamers</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  Ultra-low latency for competitive gaming
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  Consistent performance during peak hours
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  Protection against DDoS attacks
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  Global server locations for worldwide access
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">For Server Owners</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                  99.99% uptime guarantee with SLA
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                  Automated backups and disaster recovery
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                  Scalable resources on demand
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                  24/7 monitoring and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}