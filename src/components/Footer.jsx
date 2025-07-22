import React from "react";
import {
  Twitter,
  Headset,
  Mail,
  Phone,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    products: [
      { name: "Game Hosting", href: "/games" },
      { name: "VPS Services", href: "/vps" },
      { name: "Web Hosting", href: "/webhosting" },
      { name: "Minecraft", href: "/minecraft" },
      { name: "ARK Hosting", href: "/ark" },
      { name: "FiveM Hosting", href: "/fivem" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Commitment", href: "/commitment" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
      { name: "Contact Us", href: "/contact" },
      { name: "Infrastructure", href: "/infrastructure" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Server Status", href: "/status" },
      { name: "Knowledge Base", href: "/kb" },
      { name: "Contact Support", href: "/support" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Usage Policy", href: "/usage-policy" },
      { name: "GDPR", href: "/gdpr" },
      { name: "Acceptable Use", href: "/aup" },
    ],
  };

  const socialLinks = [
    { icon: Headset, href: "/discord", label: "Discord" },
    { icon: Twitter, href: "/twitter", label: "Twitter" },
    { icon: Instagram, href: "/instagram", label: "Instagram" },
    { icon: Youtube, href: "/youtube", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                GameHub
              </span>
            </a>
            <p className="text-gray-300 mb-6 font-semibold">
              Premium game hosting, serving gamers worldwide since 2023.
            </p>
            <div className="flex items-center space-x-4 max-w-fit">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4 capitalize bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all rounded-lg py-1 px-2 -ml-2 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-gray-300 font-bold">
              <a
                href="mailto:contact@gamehub.com"
                className="flex items-center hover:text-white hover:bg-gray-800/50 rounded-lg px-3 py-2 transition-all"
              >
                <Mail size={16} className="mr-2" />
                contact@gamehub.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center hover:text-white hover:bg-gray-800/50 rounded-lg px-3 py-2 transition-all"
              >
                <Phone size={16} className="mr-2" />
                +1 (234) 567-890
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp size={22} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GameHub. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Report"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} // Converts spaces to hyphens
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg px-3 py-1 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
