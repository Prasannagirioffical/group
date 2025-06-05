
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
  ];

  const services = [
    'Master Planning',
    'Infrastructure Design',
    'Hospital Design',
    'Interior Works',
    'Residential Architecture',
    'Urban Planning'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pi-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-pi-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PI</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">PI Consults</h3>
                <p className="text-sm text-pi-light-blue">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming Ideas into Landmarks Since 2018. Leading infrastructure 
              consultancy in Nepal, specializing in sustainable and innovative design solutions.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-pi-blue rounded-full flex items-center justify-center hover:bg-white hover:text-pi-navy transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pi-blue rounded-full flex items-center justify-center hover:bg-white hover:text-pi-navy transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pi-blue rounded-full flex items-center justify-center hover:bg-white hover:text-pi-navy transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-pi-light-blue transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('#vision-mission')}
                  className="text-gray-300 hover:text-pi-light-blue transition-colors duration-300 text-left"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-pi-light-blue transition-colors duration-300 text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pi-blue flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Khumaltar, Lalitpur</p>
                  <p>Nepal - 44700</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pi-blue flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+977-1-5555-123</p>
                  <p>+977-98-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-pi-blue flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>info@piconsults.com.np</p>
                  <p>projects@piconsults.com.np</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-6 p-4 bg-pi-blue/20 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">Office Hours</h5>
              <div className="text-gray-300 text-xs space-y-1">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-pi-blue/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} PI Consults Pvt. Ltd. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-pi-light-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-pi-light-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-pi-light-blue transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-pi-blue/20 text-center">
            <p className="text-gray-400 text-xs">
              Transforming Ideas into Landmarks • Building Nepal's Future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
