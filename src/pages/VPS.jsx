import React from 'react';
import { Shield, Server, Globe, Users, Star, Terminal, Network, Cpu, Clock, HardDrive, Settings } from 'lucide-react';
import { StatCard } from '../components/shared-components';
import { Helmet } from 'react-helmet-async';


const SpecItem = ({ icon: Icon, spec }) => (
  <div className="text-gray-300 flex items-center py-1.5">
    <Icon size={16} className="text-blue-400 mr-2" />
    {spec}
  </div>
);

const FeatureItem = ({ feature }) => (
  <div className="text-gray-300 flex items-center py-1">
    <Shield size={16} className="text-green-400 mr-2" />
    {feature}
  </div>
);

const VPSHostingCard = ({ plan }) => (
  <div className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-1">
          <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-white font-medium">{plan.rating}</span>
        </div>
      </div>

      {plan.badge && (
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-pulse">
          {plan.badge}
        </div>
      )}

      {plan.promoTag && (
        <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-4 ml-2">
          {plan.promoTag}
        </div>
      )}

      <div className="space-y-1 mb-6 border-t border-b border-gray-700/50 py-4">
        <SpecItem icon={Cpu} spec={plan.specs.cpu} />
        <SpecItem icon={Server} spec={plan.specs.ram} />
        <SpecItem icon={HardDrive} spec={plan.specs.storage} />
        <SpecItem icon={Network} spec={plan.specs.bandwidth} />
        <SpecItem icon={Globe} spec={plan.specs.location} />
        <SpecItem icon={Terminal} spec={plan.specs.os} />
        <SpecItem icon={Settings} spec={plan.specs.management} />
        <SpecItem icon={Clock} spec={plan.specs.uptime} />
      </div>

      <div className="space-y-1 mb-6">
        {plan.features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <div>
          <div className="text-gray-400 text-sm">Starting at</div>
          <div className="text-2xl font-bold text-white">
            ${plan.price}
            <span className="text-gray-400 text-sm font-normal">/month</span>
          </div>
        </div>
        <a
          href={plan.purchaseUrl}
          className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 font-medium flex items-center"
        >
          <Server size={18} className="mr-2" />
          Deploy Now
        </a>
      </div>
    </div>
  </div>
);


const VPS_HOSTING_PLANS = [
  {
    id: 1,
    title: "Basic VPS",
    price: 9.99,
    rating: 4.5,
    specs: {
      cpu: "2 vCPU Cores",
      ram: "2 GB RAM",
      storage: "40 GB NVMe SSD",
      bandwidth: "2 TB",
      location: "Multiple Regions",
      os: "Linux/Windows",
      management: "Self-Managed",
      uptime: "99.9% Guaranteed"
    },
    features: [
      "Full Root Access",
      "IPv4 & IPv6",
      "DDoS Protection",
      "Automated Backups",
      "Instant Deployment",
      "24/7 Support"
    ],
    badge: "",
    promoTag: "STARTER",
    purchaseUrl: "/vps/deploy/basic"
  },
  {
    id: 2,
    title: "Premium VPS",
    price: 19.99,
    rating: 4.7,
    specs: {
      cpu: "4 vCPU Cores",
      ram: "4 GB RAM",
      storage: "80 GB NVMe SSD",
      bandwidth: "4 TB",
      location: "Custom Region",
      os: "Linux/Windows",
      management: "Basic Management",
      uptime: "99.95% Guaranteed"
    },
    features: [
      "Everything in Basic",
      "Priority Support",
      "Advanced Firewall",
      "Load Balancer Ready",
      "Private Networking",
      "Dedicated IP"
    ],
    badge: "MOST POPULAR",
    promoTag: "BEST VALUE",
    purchaseUrl: "/vps/deploy/premium"
  },
  {
    id: 3,
    title: "Enterprise VPS",
    price: 39.99,
    rating: 4.9,
    specs: {
      cpu: "8 vCPU Cores",
      ram: "8 GB RAM",
      storage: "160 GB NVMe SSD",
      bandwidth: "8 TB",
      location: "Multi-Region",
      os: "Custom OS Support",
      management: "Fully Managed",
      uptime: "99.99% Guaranteed"
    },
    features: [
      "Everything in Premium",
      "Enterprise Support",
      "Auto-Scaling Ready",
      "Dedicated Resources",
      "Custom Control Panel",
      "Advanced Monitoring"
    ],
    badge: "ENTERPRISE",
    promoTag: "PREMIUM",
    purchaseUrl: "/vps/deploy/enterprise"
  }
];


export default function VPSHostingPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      <Helmet>
        <title>VPS Hosting | GameHub</title>
        <meta name="description" content="High-performance VPS hosting solutions with dedicated resources and full root access." />
      </Helmet>

      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 mb-6">
            Virtual Private Servers
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            High-performance VPS hosting with dedicated resources and full control
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <StatCard icon={Terminal} label="Root Access" value="Full" />
            <StatCard icon={Server} label="Deployment" value="Instant" />
            <StatCard icon={Globe} label="Data Centers" value="15+ Locations" />
            <StatCard icon={Users} label="Support" value="24/7" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {VPS_HOSTING_PLANS.map(plan => (
            <VPSHostingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}