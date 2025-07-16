import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiCalendar, FiShield, FiHeart } = FiIcons;

const Contact = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: FiPhone,
      title: language === 'ar' ? 'الهاتف' : language === 'fr' ? 'Téléphone' : 'Phone',
      info: '01277225995',
      subtitle: language === 'ar' ? 'اتصل بنا اليوم!' : language === 'fr' ? 'Appelez-nous aujourd\'hui!' : 'Call us today!',
      action: 'tel:+201277225995'
    },
    {
      icon: FiMail,
      title: language === 'ar' ? 'البريد الإلكتروني' : language === 'fr' ? 'Email' : 'Email',
      info: 'clinicdnc@gmail.com',
      subtitle: language === 'ar' ? 'حجز المواعيد' : language === 'fr' ? 'Réservation de rendez-vous' : 'Appointment Booking',
      action: 'mailto:clinicdnc@gmail.com'
    },
    {
      icon: FiMapPin,
      title: language === 'ar' ? 'الموقع' : language === 'fr' ? 'Localisation' : 'Location',
      info: '6 A Shafeq Street, Heliopolis',
      subtitle: language === 'ar' ? 'القاهرة، مصر' : language === 'fr' ? 'Le Caire, Égypte' : 'Cairo, Egypt',
      action: 'https://maps.google.com/?q=6+A+Shafeq+Street+Heliopolis+Cairo'
    },
    {
      icon: FiClock,
      title: language === 'ar' ? 'ساعات العمل' : language === 'fr' ? 'Heures d\'ouverture' : 'Office Hours',
      info: language === 'ar' ? 'الأحد-الخميس: 11ص-6م' : language === 'fr' ? 'Dim-Jeu: 11h-18h' : 'Sun-Thu: 11:00am-06:00pm',
      subtitle: language === 'ar' ? 'الجمعة والسبت: مغلق' : language === 'fr' ? 'Vendredi et Samedi: Fermé' : 'Friday & Saturday: Closed'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'هل أنت مستعد لاتخاذ الخطوة التالية في رحلتك الصحية؟ تواصل معنا اليوم لحجز استشارتك أو طرح أي أسئلة حول خدماتنا الطبية المتخصصة.'
              : language === 'fr'
              ? 'Prêt à franchir la prochaine étape de votre parcours de santé ? Contactez-nous dès aujourd\'hui pour planifier votre consultation ou poser des questions sur nos services médicaux spécialisés.'
              : 'Ready to take the next step in your health journey? Contact us today to schedule your consultation or ask any questions about our specialized medical services.'
            }
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow ${info.action ? 'cursor-pointer' : ''}`}
              onClick={info.action ? () => window.open(info.action, '_blank') : undefined}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={info.icon} className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.action ? (
                <a href={info.action} className="text-blue-600 font-medium mb-1 block hover:underline">
                  {info.info}
                </a>
              ) : (
                <p className="text-gray-900 font-medium mb-1">
                  {info.info}
                </p>
              )}
              <p className="text-gray-600 text-sm">
                {info.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map & Additional Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-6 bg-blue-50 border-b">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('clinicLocation')}
              </h2>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'عيادة DNC للسكري واعتلال الأعصاب - ٦ أ شارع شفيق، مصر الجديدة، القاهرة'
                  : language === 'fr'
                  ? 'Clinique DNC Diabète et Neuropathie - 6 A Rue Shafeq, Héliopolis, Le Caire'
                  : 'DNC Diabetes and Neuropathy Clinic - 6 A Shafeq Street, Heliopolis, Cairo'
                }
              </p>
            </div>
            <div className="relative h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.111324226872!2d31.314101376056737!3d30.090997916362653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e29209216ed%3A0x34ac4972089615f5!2zRE5DIERpYWJldGVzIGFuZCBOZXVyb3BhdGh5IENsaW5pYyAtINi52YrYp9iv2Kkg2KfZhNiz2YPYsSDZiNin2YTYqtmH2KfYqCDYp9mE2KPYudi12KfYqCDYp9mE2LPZg9ix2Yo!5e0!3m2!1sen!2seg!4v1751878311168!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="DNC Diabetes and Neuropathy Clinic Location"
              />
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiPhone} className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-800">
                  {t('emergencyContact')}
                </h3>
              </div>
              <p className="text-red-700 mb-4">
                {language === 'ar' 
                  ? 'للحالات الطبية الطارئة، يرجى الاتصال بالرقم 123 أو الذهاب إلى أقرب قسم طوارئ.'
                  : language === 'fr'
                  ? 'Pour les urgences médicales, veuillez appeler le 123 ou vous rendre aux urgences les plus proches.'
                  : 'For medical emergencies, please call 123 or go to your nearest emergency room.'
                }
              </p>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-red-600" />
                <a href="tel:+201277225995" className="text-red-800 font-semibold hover:underline">
                  {language === 'ar' 
                    ? 'خط الطوارئ: 01277225995'
                    : language === 'fr'
                    ? 'Ligne d\'urgence: 01277225995'
                    : 'Emergency Line: 01277225995'
                  }
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiClock} className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-800">
                  {t('officeHours')}
                </h3>
              </div>
              <div className="space-y-2 text-blue-700">
                <div className="flex justify-between">
                  <span>{language === 'ar' ? 'الأحد - الخميس:' : language === 'fr' ? 'Dimanche - Jeudi:' : 'Sunday - Thursday:'}</span>
                  <span className="font-medium">11:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ar' ? 'الجمعة والسبت:' : language === 'fr' ? 'Vendredi et Samedi:' : 'Friday & Saturday:'}</span>
                  <span className="font-medium">{language === 'ar' ? 'مغلق' : language === 'fr' ? 'Fermé' : 'Closed'}</span>
                </div>
              </div>
            </div>

            {/* Appointment Booking */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-800">
                  {language === 'ar' ? 'حجز المواعيد' : language === 'fr' ? 'Réservation de Rendez-vous' : 'Appointment Booking'}
                </h3>
              </div>
              <p className="text-green-700 mb-4">
                {language === 'ar' 
                  ? 'لحجز موعد، يرجى الاتصال بنا أو إرسال بريد إلكتروني مع تفاصيل الاتصال الخاصة بك.'
                  : language === 'fr'
                  ? 'Pour prendre rendez-vous, veuillez nous appeler ou nous envoyer un email avec vos coordonnées.'
                  : 'To schedule an appointment, please call us or send an email with your contact details.'
                }
              </p>
              <div className="flex items-center space-x-3 mb-2">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-green-600" />
                <a href="tel:+201277225995" className="text-green-800 font-semibold hover:underline">
                  01277225995
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-green-600" />
                <a href="mailto:clinicdnc@gmail.com" className="text-green-800 font-semibold hover:underline">
                  clinicdnc@gmail.com
                </a>
              </div>
            </div>

            {/* Medical Excellence */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-purple-800">
                  {language === 'ar' ? 'التميز الطبي' : language === 'fr' ? 'Excellence Médicale' : 'Medical Excellence'}
                </h3>
              </div>
              <p className="text-purple-700">
                {language === 'ar' 
                  ? 'عيادة متخصصة في علاج السكري واعتلال الأعصاب باستخدام أحدث التقنيات والبروتوكولات العلاجية المتقدمة.'
                  : language === 'fr'
                  ? 'Clinique spécialisée dans le traitement du diabète et de la neuropathie utilisant les dernières technologies et protocoles de traitement avancés.'
                  : 'Specialized clinic for diabetes and neuropathy treatment using the latest technologies and advanced treatment protocols.'
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'ar' 
                ? 'هل أنت مستعد لبدء رحلتك الصحية؟'
                : language === 'fr'
                ? 'Prêt à commencer votre parcours de santé?'
                : 'Ready to Start Your Health Journey?'
              }
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'لا تنتظر للسيطرة على صحتك. اتصل بنا اليوم واكتشف كيف يمكن لرعايتنا المتخصصة أن تحسن جودة حياتك.'
                : language === 'fr'
                ? 'N\'attendez pas pour prendre le contrôle de votre santé. Contactez-nous dès aujourd\'hui et découvrez comment nos soins spécialisés peuvent améliorer votre qualité de vie.'
                : 'Don\'t wait to take control of your health. Contact us today and discover how our specialized care can improve your quality of life.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+201277225995"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <SafeIcon icon={FiPhone} className="mr-2 w-5 h-5" />
                {language === 'ar' ? 'اتصل الآن' : language === 'fr' ? 'Appelez Maintenant' : 'Call Now'}
              </a>
              <a
                href="mailto:clinicdnc@gmail.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                <SafeIcon icon={FiMail} className="mr-2 w-5 h-5" />
                {language === 'ar' ? 'أرسل إيميل' : language === 'fr' ? 'Envoyer un Email' : 'Send Email'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;