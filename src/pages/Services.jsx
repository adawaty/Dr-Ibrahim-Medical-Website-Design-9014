import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiActivity, FiShield, FiTarget, FiTrendingUp, FiCheckCircle } = FiIcons;

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      title: language === 'ar' ? 'إدارة متقدمة لمرض السكري' : language === 'fr' ? 'Gestion Avancée du Diabète' : 'Advanced Diabetes Management',
      description: language === 'ar' ? 'رعاية شاملة للسكري من النوع الأول والثاني وسكري الحمل مع خطط علاج مخصصة.' : language === 'fr' ? 'Soins complets pour le diabète de type 1, type 2 et gestationnel avec des plans de traitement personnalisés.' : 'Comprehensive care for Type 1, Type 2, and gestational diabetes with personalized treatment plans.',
      icon: FiHeart,
      features: [
        language === 'ar' ? 'مراقبة والسيطرة على جلوكوز الدم' : language === 'fr' ? 'Surveillance et contrôle de la glycémie' : 'Blood glucose monitoring and control',
        language === 'ar' ? 'تحسين علاج الأنسولين' : language === 'fr' ? 'Optimisation de la thérapie insulinique' : 'Insulin therapy optimization',
        language === 'ar' ? 'استشارات غذائية وتخطيط التغذية' : language === 'fr' ? 'Conseil diététique et planification nutritionnelle' : 'Dietary counseling and nutrition planning',
        language === 'ar' ? 'الوقاية من مضاعفات السكري' : language === 'fr' ? 'Prévention des complications diabétiques' : 'Diabetic complications prevention',
        language === 'ar' ? 'إعداد مراقبة الجلوكوز المستمرة' : language === 'fr' ? 'Configuration de surveillance continue du glucose' : 'Continuous glucose monitoring setup',
        language === 'ar' ? 'إرشادات تعديل نمط الحياة' : language === 'fr' ? 'Conseils de modification du mode de vie' : 'Lifestyle modification guidance'
      ],
      color: 'blue'
    },
    {
      title: language === 'ar' ? 'علاج اعتلال الأعصاب السكري' : language === 'fr' ? 'Traitement de la Neuropathie Diabétique' : 'Diabetic Neuropathy Treatment',
      description: language === 'ar' ? 'علاج متقدم لتلف الأعصاب الناجم عن السكري، مع التركيز على إدارة الألم واستعادة وظيفة الأعصاب.' : language === 'fr' ? 'Traitement avancé des lésions nerveuses causées par le diabète, axé sur la gestion de la douleur et la restauration de la fonction nerveuse.' : 'Advanced treatment for nerve damage caused by diabetes, focusing on pain management and nerve function restoration.',
      icon: FiActivity,
      features: [
        language === 'ar' ? 'تقييم شامل لوظيفة الأعصاب' : language === 'fr' ? 'Évaluation complète de la fonction nerveuse' : 'Comprehensive nerve function assessment',
        language === 'ar' ? 'استراتيجيات إدارة الألم' : language === 'fr' ? 'Stratégies de gestion de la douleur' : 'Pain management strategies',
        language === 'ar' ? 'تحسين الأدوية' : language === 'fr' ? 'Optimisation des médicaments' : 'Medication optimization',
        language === 'ar' ? 'توصيات العلاج الطبيعي' : language === 'fr' ? 'Recommandations de physiothérapie' : 'Physical therapy recommendations',
        language === 'ar' ? 'بروتوكولات الرعاية الوقائية' : language === 'fr' ? 'Protocoles de soins préventifs' : 'Preventive care protocols',
        language === 'ar' ? 'مراقبة ومتابعة منتظمة' : language === 'fr' ? 'Surveillance et suivi réguliers' : 'Regular monitoring and follow-up'
      ],
      color: 'green'
    },
    {
      title: language === 'ar' ? 'اضطرابات الغدة الدرقية' : language === 'fr' ? 'Troubles Thyroïdiens' : 'Thyroid Disorders',
      description: language === 'ar' ? 'تشخيص وعلاج خبير لحالات الغدة الدرقية بما في ذلك فرط نشاط الغدة الدرقية ونقص نشاطها والعقد الدرقية.' : language === 'fr' ? 'Diagnostic et traitement expert des conditions thyroïdiennes incluant l\'hyperthyroïdie, l\'hypothyroïdie et les nodules thyroïdiens.' : 'Expert diagnosis and treatment of thyroid conditions including hyperthyroidism, hypothyroidism, and thyroid nodules.',
      icon: FiShield,
      features: [
        language === 'ar' ? 'فحص وظائف الغدة الدرقية' : language === 'fr' ? 'Tests de fonction thyroïdienne' : 'Thyroid function testing',
        language === 'ar' ? 'العلاج بالهرمونات البديلة' : language === 'fr' ? 'Thérapie de remplacement hormonal' : 'Hormone replacement therapy',
        language === 'ar' ? 'تقييم العقد الدرقية' : language === 'fr' ? 'Évaluation des nodules thyroïdiens' : 'Thyroid nodule evaluation',
        language === 'ar' ? 'إدارة أمراض الغدة الدرقية المناعية' : language === 'fr' ? 'Gestion des maladies thyroïdiennes auto-immunes' : 'Autoimmune thyroid disease management',
        language === 'ar' ? 'فحص سرطان الغدة الدرقية' : language === 'fr' ? 'Dépistage du cancer thyroïdien' : 'Thyroid cancer screening',
        language === 'ar' ? 'بروتوكولات المراقبة طويلة المدى' : language === 'fr' ? 'Protocoles de surveillance à long terme' : 'Long-term monitoring protocols'
      ],
      color: 'purple'
    },
    {
      title: language === 'ar' ? 'متلازمة الأيض' : language === 'fr' ? 'Syndrome Métabolique' : 'Metabolic Syndrome',
      description: language === 'ar' ? 'نهج شامل لإدارة مكونات متلازمة الأيض بما في ذلك السمنة وارتفاع ضغط الدم ومقاومة الأنسولين.' : language === 'fr' ? 'Approche complète pour gérer les composants du syndrome métabolique incluant l\'obésité, l\'hypertension et la résistance à l\'insuline.' : 'Comprehensive approach to managing metabolic syndrome components including obesity, hypertension, and insulin resistance.',
      icon: FiTarget,
      features: [
        language === 'ar' ? 'تقييم عوامل الخطر' : language === 'fr' ? 'Évaluation des facteurs de risque' : 'Risk factor assessment',
        language === 'ar' ? 'برامج إدارة الوزن' : language === 'fr' ? 'Programmes de gestion du poids' : 'Weight management programs',
        language === 'ar' ? 'السيطرة على ضغط الدم' : language === 'fr' ? 'Contrôle de la pression artérielle' : 'Blood pressure control',
        language === 'ar' ? 'إدارة الكوليسترول' : language === 'fr' ? 'Gestion du cholestérol' : 'Cholesterol management',
        language === 'ar' ? 'علاج مقاومة الأنسولين' : language === 'fr' ? 'Traitement de la résistance à l\'insuline' : 'Insulin resistance treatment',
        language === 'ar' ? 'تقليل مخاطر القلب والأوعية الدموية' : language === 'fr' ? 'Réduction des risques cardiovasculaires' : 'Cardiovascular risk reduction'
      ],
      color: 'orange'
    },
    {
      title: language === 'ar' ? 'الاضطرابات الهرمونية' : language === 'fr' ? 'Déséquilibres Hormonaux' : 'Hormonal Imbalances',
      description: language === 'ar' ? 'تشخيص وعلاج اضطرابات هرمونية مختلفة تؤثر على الأيض والنمو والصحة الإنجابية.' : language === 'fr' ? 'Diagnostic et traitement de divers troubles hormonaux affectant le métabolisme, la croissance et la santé reproductive.' : 'Diagnosis and treatment of various hormonal disorders affecting metabolism, growth, and reproductive health.',
      icon: FiTrendingUp,
      features: [
        language === 'ar' ? 'فحص الهرمونات الشامل' : language === 'fr' ? 'Tests hormonaux complets' : 'Comprehensive hormone testing',
        language === 'ar' ? 'العلاج بالهرمونات البديلة' : language === 'fr' ? 'Thérapie de remplacement hormonal' : 'Hormone replacement therapy',
        language === 'ar' ? 'إدارة اضطرابات الغدة الكظرية' : language === 'fr' ? 'Gestion des troubles surrénaliens' : 'Adrenal disorder management',
        language === 'ar' ? 'تحسين الهرمونات الإنجابية' : language === 'fr' ? 'Optimisation des hormones reproductives' : 'Reproductive hormone optimization',
        language === 'ar' ? 'علاج نقص هرمون النمو' : language === 'fr' ? 'Traitement du déficit en hormone de croissance' : 'Growth hormone deficiency treatment',
        language === 'ar' ? 'إدارة انقطاع الطمث وانقطاع الذكورة' : language === 'fr' ? 'Gestion de la ménopause et de l\'andropause' : 'Menopause and andropause management'
      ],
      color: 'pink'
    },
    {
      title: language === 'ar' ? 'الرعاية الوقائية' : language === 'fr' ? 'Soins Préventifs' : 'Preventive Care',
      description: language === 'ar' ? 'نهج رعاية صحية استباقي يركز على الوقاية من الأمراض والكشف المبكر من خلال الفحص المنتظم.' : language === 'fr' ? 'Approche de soins de santé proactive axée sur la prévention des maladies et la détection précoce par un dépistage régulier.' : 'Proactive healthcare approach focusing on disease prevention and early detection through regular screening.',
      icon: FiCheckCircle,
      features: [
        language === 'ar' ? 'تقييمات صحية شاملة سنوية' : language === 'fr' ? 'Évaluations de santé complètes annuelles' : 'Annual comprehensive health assessments',
        language === 'ar' ? 'فحص ووقاية السكري' : language === 'fr' ? 'Dépistage et prévention du diabète' : 'Diabetes screening and prevention',
        language === 'ar' ? 'تقييم مخاطر القلب والأوعية الدموية' : language === 'fr' ? 'Évaluation des risques cardiovasculaires' : 'Cardiovascular risk evaluation',
        language === 'ar' ? 'تقييم صحة العظام' : language === 'fr' ? 'Évaluation de la santé osseuse' : 'Bone health assessment',
        language === 'ar' ? 'توصيات فحص السرطان' : language === 'fr' ? 'Recommandations de dépistage du cancer' : 'Cancer screening recommendations',
        language === 'ar' ? 'إرشادات التطعيم والمناعة' : language === 'fr' ? 'Conseils de vaccination et d\'immunisation' : 'Vaccination and immunization guidance'
      ],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color] || colors.blue;
  };

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
            {t('servicesTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'خدمات طبية شاملة مصممة خصيصاً لتلبية احتياجاتك الصحية الفريدة. نهجنا المتخصص يضمن حصولك على أعلى جودة رعاية لجميع جوانب الطب الباطني وأمراض الغدد الصماء.'
              : language === 'fr'
              ? 'Services médicaux complets adaptés à vos besoins de santé uniques. Notre approche spécialisée garantit que vous recevez des soins de la plus haute qualité pour tous les aspects de la médecine interne et de l\'endocrinologie.'
              : 'Comprehensive medical services tailored to your unique health needs. Our specialized approach ensures you receive the highest quality care for all aspects of internal medicine and endocrinology.'
            }
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(service.color)}`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'ar' ? 'ما نقدمه:' : language === 'fr' ? 'Ce que nous offrons:' : 'What We Offer:'}
                </h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'عملية العلاج لدينا' : language === 'fr' ? 'Notre Processus de Traitement' : 'Our Treatment Process'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'نهج منهجي لضمان أفضل النتائج الممكنة' : language === 'fr' ? 'Une approche systématique pour garantir les meilleurs résultats possibles' : 'A systematic approach to ensure the best possible outcomes'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: language === 'ar' ? 'الاستشارة الأولى' : language === 'fr' ? 'Consultation Initiale' : 'Initial Consultation',
                description: language === 'ar' ? 'مراجعة شاملة للتاريخ الطبي والفحص البدني' : language === 'fr' ? 'Examen complet des antécédents médicaux et examen physique' : 'Comprehensive medical history review and physical examination'
              },
              {
                step: '02',
                title: language === 'ar' ? 'الفحوصات التشخيصية' : language === 'fr' ? 'Tests Diagnostiques' : 'Diagnostic Testing',
                description: language === 'ar' ? 'فحوصات مخبرية متقدمة ودراسات تصويرية حسب الحاجة' : language === 'fr' ? 'Tests de laboratoire avancés et études d\'imagerie selon les besoins' : 'Advanced laboratory tests and imaging studies as needed'
              },
              {
                step: '03',
                title: language === 'ar' ? 'تخطيط العلاج' : language === 'fr' ? 'Planification du Traitement' : 'Treatment Planning',
                description: language === 'ar' ? 'خطة علاج شخصية بناءً على حالتك المحددة' : language === 'fr' ? 'Plan de traitement personnalisé basé sur votre condition spécifique' : 'Personalized treatment plan based on your specific condition'
              },
              {
                step: '04',
                title: language === 'ar' ? 'الرعاية المستمرة' : language === 'fr' ? 'Soins Continus' : 'Ongoing Care',
                description: language === 'ar' ? 'متابعة منتظمة وتعديلات العلاج للحصول على أفضل النتائج' : language === 'fr' ? 'Suivi régulier et ajustements du traitement pour des résultats optimaux' : 'Regular follow-ups and treatment adjustments for optimal results'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'ar' ? 'هل أنت مستعد لبدء رحلتك الصحية؟' : language === 'fr' ? 'Prêt à commencer votre parcours de santé?' : 'Ready to Start Your Health Journey?'}
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'لا تنتظر للسيطرة على صحتك. احجز استشارة اليوم واكتشف كيف يمكن لرعايتنا المتخصصة أن تحسن جودة حياتك.'
                : language === 'fr'
                ? 'N\'attendez pas pour prendre le contrôle de votre santé. Planifiez une consultation aujourd\'hui et découvrez comment nos soins spécialisés peuvent améliorer votre qualité de vie.'
                : 'Don\'t wait to take control of your health. Schedule a consultation today and discover how our specialized care can improve your quality of life.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {language === 'ar' ? 'احجز استشارة' : language === 'fr' ? 'Planifier une Consultation' : 'Schedule Consultation'}
                <SafeIcon icon={FiCheckCircle} className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+201001234567"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                {language === 'ar' ? 'اتصل الآن' : language === 'fr' ? 'Appelez Maintenant' : 'Call Now'}
                <SafeIcon icon={FiActivity} className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;