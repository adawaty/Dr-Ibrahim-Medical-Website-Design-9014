import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiHeart } = FiIcons;

const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/services', label: t('services') },
    { path: '/contact', label: t('contact') },
  ];

  const services = [
    t('diabetesManagement'),
    t('neuropathyTreatment'),
    t('metabolicDisorders'),
    'Thyroid Disorders',
    'Hormonal Imbalances',
    'Preventive Care',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Hani Ibrahim</h3>
                <p className="text-gray-400 text-sm">Senior Consultant of Diabetes & Endocrinology</p>
                <p className="text-gray-400 text-xs">FRCP London, MRCP UK</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footerText')}
            </p>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiHeart} className="w-5 h-5 text-red-500" />
              <span className="text-gray-400">Caring for your health since 2008</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-blue-400" />
                <a href="tel:+201277225995" className="text-gray-400 hover:text-white transition-colors">01277225995</a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-blue-400" />
                <a href="mailto:clinicdnc@gmail.com" className="text-gray-400 hover:text-white transition-colors">clinicdnc@gmail.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-blue-400 mt-1" />
                <a
                  href="https://maps.google.com/?q=6+A+Shafeq+Street+Heliopolis+Cairo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  6 A Shafeq Street<br />
                  Heliopolis, Cairo
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Sun-Thu: 11AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Dr. Hani Naiem Ibrahim. All rights reserved. | <span className="ml-2">Senior Consultant of Diabetes & Endocrinology</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;