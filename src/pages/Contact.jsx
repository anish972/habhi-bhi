import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ContactCard = ({ icon: Icon, title, info, link }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
    <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    {link ? (
      <a href={link} className="text-gray-400 hover:text-white transition-colors">
        {info}
      </a>
    ) : (
      <p className="text-gray-400">{info}</p>
    )}
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      info: "support@gamehub.com",
      link: "mailto:support@gamehub.com"
    },
    {
      icon: Phone,
      title: "Phone Support",
      info: "+1 (234) 567-890",
      link: "tel:+1234567890"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      info: "Available 24/7 on our website",
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "24/7 Support Available"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      <Helmet>
        <title>Contact Us | GameHub</title>
        <meta name="description" content="Get in touch with GameHub support team for assistance with your gaming servers." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center space-x-2 px-4 py-2">
              <MessageCircle size={18} className="text-blue-400" />
              <span className="text-gray-300 font-medium">Get In Touch</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
            Contact Our Team
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            Have questions about our services? Need technical support? We're here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <ContactCard key={index} {...contact} />
              ))}
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Office Location</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">GameHub Headquarters</p>
                  <p className="text-gray-400">123 Gaming Street</p>
                  <p className="text-gray-400">Tech City, TC 12345</p>
                  <p className="text-gray-400">United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl transition-all hover:scale-105 font-medium flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}