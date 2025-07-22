import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  User,
  Gamepad,
  Shield,
  Headphones,
  HandHelpingIcon,
  Phone,
  BookOpen,
  Layout,
  Activity,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Top Games",
      href: "/games",
      icon: Gamepad,
      dropdown: [{ name: "Minecraft", href: "/minecraft" }],
    },
    {
      name: "Services",
      href: "#",
      icon: Shield,
      dropdown: [
        { name: "Game Hosting", href: "/games" },
        { name: "Web Hosting", href: "/webhosting" },
        { name: "VPS Services", href: "/vps" },
      ],
    },
    { name: "Partners", href: "/partners", icon: HandHelpingIcon },
    { name: "Ticket Support", href: "/example", icon: Headphones },
  ];

  const quickLinks = [
    { name: "Knowledgebase", href: "/knowledgebase", icon: BookOpen },
    { name: "cPanel Login", href: "/cpanel", icon: Layout },
    { name: "Status Page", href: "/status", icon: Activity },
    { name: "Game Panel", href: "/game-panel", icon: Gamepad },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setMobileActiveDropdown(null);
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900 border-b border-gray-800"
            : "bg-gray-900 border-gray-800"
        }`}
      >
        {/* Top Bar */}
        <div className="hidden md:block bg-gray-800 text-gray-300 py-1 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                <Headphones size={14} className="mr-2" />
                Support: +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center space-x-6">
              {quickLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  to={href}
                  className="hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
                  GameHub
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="px-4 py-2 rounded-lg text-gray-300 group-hover:text-white group-hover:bg-gray-800 transition-all flex items-center space-x-2 font-bold"
                  >
                    {link.icon && <link.icon size={16} />}
                    <span>{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        className="transform group-hover:rotate-180 transition-transform duration-200"
                      />
                    )}
                  </button>

                  {link.dropdown && (
                    <div
                      className="absolute top-full left-0 w-52 bg-gray-800 rounded-lg shadow-xl py-2 mt-1 border border-gray-700
                               opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                               transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
                    >
                      <div className="absolute h-4 w-full -top-4 bg-transparent"></div>
                      {link.dropdown.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavigation(item.href)}
                          className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-all font-bold"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => handleNavigation("/client")}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg 
                           transition-all hover:scale-105 font-medium flex items-center group"
                >
                  <User
                    size={16}
                    className="mr-2 transform transition-transform group-hover:scale-110"
                  />
                  Client Area
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed inset-y-0 right-0 w-full max-w-sm bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-x-1" : "translate-x-full"
            }`}
            style={{
              top: 0,
              bottom: 0,
              zIndex: 999,
            }}
          >
            {/* Mobile Menu Header */}
            <div className="sticky top-0 flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
              <span className="text-xl font-bold text-white">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="overflow-y-auto h-[calc(100vh-4rem)]">
              {/* Quick Contact */}
              <div className="p-4 bg-gray-800">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white"
                >
                  <Phone size={20} />
                  <span className="font-medium">+1 (234) 567-890</span>
                </a>
              </div>

              {/* Main Navigation */}
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button
                      className="w-full text-left p-3 text-gray-100 hover:text-white hover:bg-gray-800 rounded-lg transition-all flex items-center justify-between"
                      onClick={() => {
                        if (link.dropdown) {
                          setMobileActiveDropdown(
                            mobileActiveDropdown === link.name
                              ? null
                              : link.name
                          );
                        } else {
                          handleNavigation(link.href);
                        }
                      }}
                    >
                      <span className="flex items-center space-x-3">
                        {link.icon && (
                          <link.icon size={20} className="text-blue-400" />
                        )}
                        <span className="font-medium">{link.name}</span>
                      </span>
                      {link.dropdown && (
                        <ChevronRight
                          size={20}
                          className={`transform transition-transform duration-200 ${
                            mobileActiveDropdown === link.name
                              ? "rotate-90"
                              : ""
                          }`}
                        />
                      )}
                    </button>

                    {link.dropdown && mobileActiveDropdown === link.name && (
                      <div className="mt-1 ml-9 pl-4 border-l-2 border-blue-500/20">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleNavigation(item.href)}
                            className="block w-full text-left p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Links Section */}
              <div className="p-4 bg-gray-800/50">
                <h3 className="text-sm font-semibold text-gray-400 mb-3 px-3 uppercase tracking-wider">
                  Quick Links
                </h3>
                <div className="space-y-1">
                  {quickLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavigation(link.href)}
                      className="w-full text-left p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all flex items-center space-x-3"
                    >
                      <link.icon size={18} className="text-blue-400" />
                      <span>{link.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Area Button */}
              <div className="p-4 bg-gray-900 border-t border-gray-800">
                <button
                  onClick={() => handleNavigation("/client")}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white p-4 rounded-lg transition-all flex items-center justify-center space-x-2 font-medium shadow-lg"
                >
                  <User size={18} />
                  <span>Client Area</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}