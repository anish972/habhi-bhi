import React from "react";
import { Headset, Rocket, Shield, Clock, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced DDoS protection and security measures",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock expert technical assistance",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Your personal account management team",
  },
  {
    icon: Star,
    title: "SLA Guarantee",
    description: "99.99% uptime guarantee with compensation",
  },
];

const FeatureCard = ({ feature }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-gradient-to-r mx-auto from-blue-600 to-purple-600 p-2.5 mb-4">
      <feature.icon className="w-full h-full text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
    <p className="text-gray-400">{feature.description}</p>
  </motion.div>
);

export default function EnterpriseSupport() {
  return (
    <section className="bg-gradient-to-b  from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-teal-500/10 rounded-full blur-3xl" />

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6 bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50"
          >
            <div className="flex items-center space-x-2 px-6 py-2">
              <Headset size={18} className="text-blue-400" />
              <span className="text-gray-300 font-medium">
                Enterprise-Grade Solutions
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500"
          >
            Ready to Scale Your Gaming Infrastructure?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Get enterprise-grade hosting solutions backed by 24/7 expert support
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl transition-all font-medium flex items-center shadow-lg shadow-blue-500/25 hover:shadow-teal-500/40"
            >
              <Headset size={20} className="mr-2" />
              Contact Sales
            </motion.a>

            <motion.a
              href="/games"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800/50 hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-all font-medium backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 flex items-center"
            >
              <Rocket size={20} className="mr-2" />
              View Plans
            </motion.a>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
