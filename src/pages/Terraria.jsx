import React from 'react';
import { Users, Server, Shield, Star, Globe, Database, HardDrive, Cpu, Network, Archive } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const TERRARIA_PLANS = [
  {
    id: 1,
    title: "Copper",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 4.99,
    specs: {
      cpu: "Ryzen 5 5600G (2 vCores)",
      ram: "2 GB DDR4 RAM",
      storage: "20 GB NVMe SSD",
      network: "1 GBit/s Connection",
      slots: "8 Player Slots",
      worlds: "2 World Saves",
      backups: "Daily Backups",
      mods: "TModLoader Support"
    },
    rating: 4.4,
    badge: "",
    promoTag: "BUDGET",
    purchaseUrl: "/terraria/deploy/copper"
  },
  {
    id: 2,
    title: "Gold",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 7.99,
    specs: {
      cpu: "Ryzen 7 5700G (3 vCores)",
      ram: "4 GB DDR4 RAM",
      storage: "40 GB NVMe SSD",
      network: "1 GBit/s Connection",
      slots: "16 Player Slots",
      worlds: "5 World Saves",
      backups: "Hourly Backups",
      mods: "Full Mod Support"
    },
    rating: 4.6,
    badge: "MOST POPULAR",
    promoTag: "BEST VALUE",
    purchaseUrl: "/terraria/deploy/gold"
  },
  {
    id: 3,
    title: "Luminite",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 12.99,
    specs: {
      cpu: "Ryzen 9 5900X (4 vCores)",
      ram: "8 GB DDR4 RAM",
      storage: "80 GB NVMe SSD",
      network: "1 GBit/s Connection",
      slots: "32 Player Slots",
      worlds: "Unlimited Saves",
      backups: "Real-time Backups",
      mods: "Custom Plugin Support"
    },
    rating: 4.8,
    badge: "PREMIUM",
    promoTag: "HIGH PERFORMANCE",
    purchaseUrl: "/terraria/deploy/luminite"
  }
];

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="flex items-center text-blue-400 mb-1">
      <Icon size={16} className="mr-2" />
      <span className="text-sm">{label}</span>
    </div>
    <div className="text-white font-bold">{value}</div>
  </div>
);

const SpecItem = ({ icon: Icon, spec }) => (
  <div className="text-gray-300 flex items-center py-1.5">
    <Icon size={16} className="text-blue-400 mr-2" />
    {spec}
  </div>
);

const GameCard = ({ plan }) => (
  <div className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
    <div className="relative">
      <img
        src={plan.image}
        alt={plan.title}
        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {plan.badge && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
          {plan.badge}
        </div>
      )}
      {plan.promoTag && (
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
          {plan.promoTag}
        </div>
      )}
    </div>

    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-1">
          <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-white font-medium">{plan.rating}</span>
        </div>
      </div>

      <div className="space-y-1 mb-6 border-t border-b border-gray-700/50 py-4">
        <SpecItem icon={Cpu} spec={plan.specs.cpu} />
        <SpecItem icon={Server} spec={plan.specs.ram} />
        <SpecItem icon={HardDrive} spec={plan.specs.storage} />
        <SpecItem icon={Network} spec={plan.specs.network} />
        <SpecItem icon={Users} spec={plan.specs.slots} />
        <SpecItem icon={Globe} spec={plan.specs.worlds} />
        <SpecItem icon={Archive} spec={plan.specs.backups} />
        <SpecItem icon={Database} spec={plan.specs.mods} />
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
          Deploy Server
        </a>
      </div>
    </div>
  </div>
);

export default function TerrariaPage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      <Helmet>
        <title>Terraria Hosting | GameHub</title>
        <meta name="description" content="Deploy a Terraria server with mod support and world management tools." />
      </Helmet>
      
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 mb-4">
            Terraria Server Hosting
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 max-w-3xl mx-auto">
            Dig, fight, explore, build in the 2D sandbox adventure
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <StatCard icon={Shield} label="DDoS Protection" value="Included" />
            <StatCard icon={Server} label="Setup Time" value="Instant" />
            <StatCard icon={Globe} label="Global Locations" value="15+ Regions" />
            <StatCard icon={Users} label="Support" value="24/7" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TERRARIA_PLANS.map(plan => (
            <GameCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}