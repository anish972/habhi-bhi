import React from 'react';
import { Briefcase, Users, Heart, Zap, Globe, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const JobCard = ({ title, department, location, type, description }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-blue-400 text-sm">{department}</p>
      </div>
      <div className="text-right">
        <div className="text-gray-300 text-sm">{location}</div>
        <div className="text-green-400 text-sm font-medium">{type}</div>
      </div>
    </div>
    <p className="text-gray-400 mb-4">{description}</p>
    <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 font-medium">
      Apply Now
    </button>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
    <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead our infrastructure automation and deployment processes. Experience with Kubernetes, Docker, and cloud platforms required."
    },
    {
      title: "Customer Success Manager",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      description: "Help our gaming communities succeed by providing exceptional support and building lasting relationships with our customers."
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful and intuitive user interfaces for our control panels and customer-facing applications using React and modern web technologies."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth through creative marketing campaigns, content creation, and community engagement in the gaming industry."
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours and a focus on work-life balance."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, and career development opportunities."
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Work with passionate gamers and tech enthusiasts who love what they do."
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Competitive salary, equity options, and performance-based bonuses."
    },
    {
      icon: Briefcase,
      title: "Latest Tech",
      description: "Top-tier equipment and access to cutting-edge tools and technologies."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      <Helmet>
        <title>Careers | GameHub</title>
        <meta name="description" content="Join the GameHub team and help build the future of gaming infrastructure." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center space-x-2 px-4 py-2">
              <Briefcase size={18} className="text-blue-400" />
              <span className="text-gray-300 font-medium">Join Our Team</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
            Build the Future of Gaming
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            Join our passionate team of gamers, developers, and innovators who are revolutionizing the gaming hosting industry.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for gaming and technology. Send us your resume and let us know how you'd like to contribute to GameHub's mission.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl transition-all hover:scale-105 font-medium">
            Send Your Resume
          </button>
        </div>
      </div>
    </section>
  );
}