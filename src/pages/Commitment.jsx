import React from 'react';
import { Shield, Heart, Users, Award, Clock, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CommitmentCard = ({ icon: Icon, title, description, stats }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
    <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 mb-4">{description}</p>
    {stats && (
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
        {stats}
      </div>
    )}
  </div>
);

export default function CommitmentPage() {
  const commitments = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security of your data and servers with enterprise-grade protection and regular security audits.",
      stats: "99.99% Secure"
    },
    {
      icon: Clock,
      title: "Reliable Uptime",
      description: "Our infrastructure is designed for maximum uptime with redundant systems and proactive monitoring.",
      stats: "99.9% Uptime"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We're committed to supporting gaming communities with tools and resources they need to thrive.",
      stats: "50K+ Communities"
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Every customer matters to us. We provide personalized support and go above and beyond to help.",
      stats: "24/7 Support"
    },
    {
      icon: Zap,
      title: "Performance Excellence",
      description: "We continuously invest in the latest hardware and technology to deliver exceptional performance.",
      stats: "< 20ms Latency"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We maintain the highest standards in service delivery and continuously improve our offerings.",
      stats: "15+ Awards"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      <Helmet>
        <title>Our Commitment | GameHub</title>
        <meta name="description" content="Learn about GameHub's commitment to security, reliability, and customer satisfaction." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center space-x-2 px-4 py-2">
              <Heart size={18} className="text-blue-400" />
              <span className="text-gray-300 font-medium">Our Promise</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
            Our Commitment to You
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            We're dedicated to providing exceptional gaming hosting services with unwavering commitment to quality, security, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {commitments.map((commitment, index) => (
            <CommitmentCard key={index} {...commitment} />
          ))}
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission Statement</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            At GameHub, we believe that gaming brings people together and creates lasting memories. Our mission is to provide the most reliable, secure, and high-performance hosting solutions that enable gaming communities to flourish. We're committed to continuous innovation, exceptional customer service, and maintaining the trust our customers place in us every day.
          </p>
        </div>
      </div>
    </section>
  );
}