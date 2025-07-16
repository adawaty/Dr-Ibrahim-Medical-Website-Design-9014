import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiAward, FiHeart, FiUsers, FiCalendar, FiPhone } = FiIcons;

const Home = () => {
  const { t, language } = useLanguage();

  const stats = [
    { icon: FiAward, value: '15+', label: t('yearsExperience') },
    { icon: FiUsers, value: '5000+', label: t('patientsHelped') },
    { icon: FiHeart, value: '95%', label: language === 'ar' ? 'معدل النجاح' : language === 'fr' ? 'Taux de Réussite' : 'Success Rate' },
    { icon: FiCalendar, value: '24/7', label: language === 'ar' ? 'متاح' : language === 'fr' ? 'Disponible' : 'Available' },
  ];

  const services = [
    {
      title: t('diabetesManagement'),
      description: t('diabetesDesc'),
      icon: FiHeart,
    },
    {
      title: t('neuropathyTreatment'),
      description: t('neuropathyDesc'),
      icon: FiAward,
    },
    {
      title: t('metabolicDisorders'),
      description: t('metabolicDesc'),
      icon: FiUsers,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('heroTitle')}
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-blue-100 font-medium">
                {t('heroSubtitle')}
              </p>
              <p className="text-lg mb-8 text-blue-200 leading-relaxed">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  {t('bookConsultation')}
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  {t('learnMore')}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751885636616-Dr.-Hani.jpg"
                  alt="Dr. Hani Naiem Ibrahim"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751877855306-HeadshotPro%20Avatar%202025-02-26T15-00-55-058Z.png";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 'رعاية طبية شاملة مصممة خصيصاً لتلبية احتياجاتك الصحية الفريدة' : language === 'fr' ? 'Soins médicaux complets adaptés à vos besoins de santé uniques' : 'Comprehensive medical care tailored to your unique health needs'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'ar' ? 'هل أنت مستعد للسيطرة على صحتك؟' : language === 'fr' ? 'Prêt à prendre le contrôle de votre santé?' : 'Ready to Take Control of Your Health?'}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {language === 'ar' ? 'احجز استشارتك اليوم وابدأ رحلتك نحو صحة أفضل' : language === 'fr' ? 'Planifiez votre consultation aujourd\'hui et commencez votre parcours vers une meilleure santé' : 'Schedule your consultation today and start your journey to better health'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 w-5 h-5" />
                {t('scheduleAppointment')}
              </Link>
              <a
                href="tel:+201277225995"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                <SafeIcon icon={FiPhone} className="mr-2 w-5 h-5" />
                {language === 'ar' ? 'اتصل الآن' : language === 'fr' ? 'Appelez Maintenant' : 'Call Now'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;