import React from "react";
import { Cpu, Shield, HeartHandshake, Server } from "lucide-react";
import { motion } from "framer-motion";

const infrastructure = [
  {
    icon: Cpu,
    title: "Premium Hardware",
    description:
      "Experience unparalleled performance with latest generation AMD® Ryzen® processors and NVMe SSDs for lightning-fast response times.",
    stats: [
      { label: "Network Speed", value: "1Gbps+" },
      { label: "CPU Cores", value: "Up to 32" },
    ],
    features: ["NVMe Storage", "DDR5 RAM", "AMD Ryzen CPUs", "NVMe SSD"],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Stay protected with enterprise-grade security systems featuring multi-layered DDoS protection and automatic threat mitigation.",
    stats: [
      { label: "DDoS Protection", value: "2.5Tbps+" },
      { label: "Firewall Rules", value: "Custom in house" },
    ],
    features: [
      "DDoS Protection",
      "SSL Security",
      "IP Blocking",
      "Regular Backups",
    ],
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Server,
    title: "Global Network",
    description:
      "Deploy your servers across our worldwide network of data centers, ensuring low latency for players everywhere.",
    stats: [
      { label: "Locations", value: "15+" },
      { label: "Continents", value: "3+" },
    ],
    features: [
      "Global CDN",
      "Auto-Routing",
      "Low Latency",
      "High Performance Servers",
    ],
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description:
      "Get expert assistance whenever you need it with our dedicated team of gaming server specialists available around the clock.",
    stats: [
      { label: "Response Time", value: "< 30min" },
      { label: "Satisfaction", value: "99.9%" },
    ],
    features: [
      "Live Chat",
      "Ticket System",
      "Knowledge Base",
      "Discord Support",
    ],
    gradient: "from-green-500 to-green-600",
  },
];

const FeatureItem = ({ feature }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="text-gray-300 flex items-center text-sm"
  >
    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
    {feature}
  </motion.li>
);

const StatCard = ({ label, value, className = "" }) => (
  <div
    className={`bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 ${className}`}
  >
    <div className="text-gray-400 text-xs mb-1">{label}</div>
    <div className="text-white font-bold">{value}</div>
  </div>
);

export default function InfrastructureSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 max-w-3xl mx-auto">
            Powered by cutting-edge technology and backed by industry experts
          </p>
        </motion.div>

        {/* Infrastructure Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {infrastructure.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} transform transition-transform duration-500 group-hover:scale-110`}
                >
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-md">{item.description}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {item.stats.map((stat) => (
                  <StatCard
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                  />
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3 text-sm">
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {item.features.map((feature) => (
                    <FeatureItem key={feature} feature={feature} />
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
