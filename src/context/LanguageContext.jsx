import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      // SEO Navigation
      home: 'Home',
      about: 'About Dr. Hani',
      services: 'Medical Services',
      contact: 'Contact & Location',

      // Hero Section - SEO Optimized
      heroTitle: 'Dr. Hani Naiem Ibrahim, MD',
      heroSubtitle: 'Senior Consultant of Diabetes & Endocrinology - FRCP London, MRCP UK',
      heroDescription: 'Expert medical care for diabetes, diabetic neuropathy, thyroid disorders, and metabolic conditions. Over 15 years of clinical excellence serving patients with evidence-based treatment approaches.',
      bookConsultation: 'Schedule Medical Consultation',
      learnMore: 'Learn About Our Services',

      // About Section - Academic Compliant
      aboutTitle: 'About Dr. Hani Naiem Ibrahim',
      aboutDescription: 'Dr. Hani Naiem Ibrahim is a Senior Consultant of Diabetes and Endocrinology with FRCP London and MRCP UK qualifications. With extensive clinical experience and advanced training, Dr. Ibrahim provides comprehensive care for complex endocrine and metabolic disorders, utilizing evidence-based medicine and personalized treatment protocols.',
      yearsExperience: 'Years of Clinical Experience',
      patientsHelped: 'Patients Successfully Treated',

      // Services - Medical Academic
      servicesTitle: 'Comprehensive Medical Services',
      diabetesManagement: 'Advanced Diabetes Management',
      neuropathyTreatment: 'Diabetic Neuropathy Treatment',
      metabolicDisorders: 'Metabolic & Endocrine Disorders',
      thyroidDisorders: 'Thyroid Disease Management',
      hormonalImbalances: 'Hormonal Disorder Treatment',
      preventiveCare: 'Preventive Endocrine Care',

      // Contact - Professional
      contactTitle: 'Contact Dr. Hani Ibrahim - Medical Consultation',
      scheduleAppointment: 'Schedule Medical Appointment',
      clinicLocation: 'Clinic Location & Directions',
      officeHours: 'Medical Office Hours',
      emergencyContact: 'Emergency Medical Contact',
      insuranceAccepted: 'Insurance & Payment Options',

      // Footer - Professional
      footerText: 'Providing evidence-based medical care with compassion, expertise, and dedication to patient health outcomes.',

      // Additional Medical Terms
      clinicalExcellence: 'Clinical Excellence',
      patientCare: 'Patient-Centered Care',
      medicalExpertise: 'Medical Expertise',
      treatmentApproach: 'Evidence-Based Treatment',
      healthcareProvider: 'Healthcare Provider',
      medicalConsultation: 'Medical Consultation',
      diagnosticServices: 'Diagnostic Services',
      treatmentPlanning: 'Treatment Planning',
      followUpCare: 'Follow-up Care',

      // Services Detailed
      diabetesDesc: 'Comprehensive diabetes management including Type 1, Type 2, and gestational diabetes with advanced monitoring and treatment protocols.',
      neuropathyDesc: 'Specialized treatment for diabetic neuropathy using evidence-based approaches to manage pain and preserve nerve function.',
      thyroidDesc: 'Expert diagnosis and treatment of thyroid disorders including hyperthyroidism, hypothyroidism, and thyroid nodules.',
      metabolicDesc: 'Advanced care for metabolic syndrome, obesity, and related cardiovascular risk factors.',
      hormonalDesc: 'Comprehensive evaluation and treatment of hormonal imbalances affecting metabolism and overall health.',
      preventiveDesc: 'Proactive healthcare focusing on disease prevention and early detection through comprehensive screening.',
    },
    ar: {
      // SEO Navigation - Arabic
      home: 'الرئيسية',
      about: 'نبذة عن الدكتور هاني',
      services: 'الخدمات الطبية',
      contact: 'الاتصال والموقع',

      // Hero Section - SEO Optimized Arabic
      heroTitle: 'د. هاني نعيم إبراهيم، دكتور في الطب',
      heroSubtitle: 'استشاري أول للسكري وأمراض الغدد الصماء - زميل الكلية الملكية للأطباء بلندن، عضو الكلية الملكية للأطباء بالمملكة المتحدة',
      heroDescription: 'رعاية طبية متخصصة لمرض السكري واعتلال الأعصاب السكري واضطرابات الغدة الدرقية والحالات الأيضية. أكثر من 15 عامًا من التميز السريري في خدمة المرضى بأساليب علاجية قائمة على الأدلة العلمية.',
      bookConsultation: 'حجز استشارة طبية',
      learnMore: 'تعرف على خدماتنا',

      // About Section - Academic Compliant Arabic
      aboutTitle: 'نبذة عن الدكتور هاني نعيم إبراهيم',
      aboutDescription: 'الدكتور هاني نعيم إبراهيم استشاري أول للسكري وأمراض الغدد الصماء، وهو زميل الكلية الملكية للأطباء بلندن وعضو الكلية الملكية للأطباء بالمملكة المتحدة. مع خبرة سريرية واسعة وتدريب متقدم، يقدم الدكتور إبراهيم رعاية شاملة للاضطرابات الهرمونية والأيضية المعقدة، باستخدام الطب القائم على الأدلة والبروتوكولات العلاجية المخصصة.',
      yearsExperience: 'سنوات من الخبرة السريرية',
      patientsHelped: 'مريض تم علاجهم بنجاح',

      // Services - Medical Academic Arabic
      servicesTitle: 'الخدمات الطبية الشاملة',
      diabetesManagement: 'إدارة متقدمة لمرض السكري',
      neuropathyTreatment: 'علاج اعتلال الأعصاب السكري',
      metabolicDisorders: 'اضطرابات الأيض والغدد الصماء',
      thyroidDisorders: 'إدارة أمراض الغدة الدرقية',
      hormonalImbalances: 'علاج الاضطرابات الهرمونية',
      preventiveCare: 'الرعاية الوقائية للغدد الصماء',

      // Contact - Professional Arabic
      contactTitle: 'الاتصال بالدكتور هاني إبراهيم - استشارة طبية',
      scheduleAppointment: 'حجز موعد طبي',
      clinicLocation: 'موقع العيادة والاتجاهات',
      officeHours: 'ساعات العمل الطبية',
      emergencyContact: 'الاتصال الطبي الطارئ',
      insuranceAccepted: 'خيارات التأمين والدفع',

      // Footer - Professional Arabic
      footerText: 'تقديم رعاية طبية قائمة على الأدلة العلمية بالرحمة والخبرة والتفاني في تحقيق نتائج صحية مثلى للمرضى.',

      // Additional Medical Terms Arabic
      clinicalExcellence: 'التميز السريري',
      patientCare: 'رعاية محورها المريض',
      medicalExpertise: 'الخبرة الطبية',
      treatmentApproach: 'العلاج القائم على الأدلة',
      healthcareProvider: 'مقدم الرعاية الصحية',
      medicalConsultation: 'استشارة طبية',
      diagnosticServices: 'الخدمات التشخيصية',
      treatmentPlanning: 'تخطيط العلاج',
      followUpCare: 'رعاية المتابعة',

      // Services Detailed Arabic
      diabetesDesc: 'إدارة شاملة لمرض السكري تشمل النوع الأول والثاني وسكري الحمل مع بروتوكولات مراقبة وعلاج متقدمة.',
      neuropathyDesc: 'علاج متخصص لاعتلال الأعصاب السكري باستخدام مناهج قائمة على الأدلة لإدارة الألم والحفاظ على وظيفة الأعصاب.',
      thyroidDesc: 'تشخيص وعلاج خبير لاضطرابات الغدة الدرقية بما في ذلك فرط نشاط الغدة الدرقية ونقص نشاطها والعقد الدرقية.',
      metabolicDesc: 'رعاية متقدمة لمتلازمة الأيض والسمنة وعوامل الخطر القلبية الوعائية ذات الصلة.',
      hormonalDesc: 'تقييم وعلاج شامل للاختلالات الهرمونية التي تؤثر على الأيض والصحة العامة.',
      preventiveDesc: 'رعاية صحية استباقية تركز على الوقاية من الأمراض والكشف المبكر من خلال الفحص الشامل.',
    },
    fr: {
      // SEO Navigation - French
      home: 'Accueil',
      about: 'À propos du Dr. Hani',
      services: 'Services Médicaux',
      contact: 'Contact et Localisation',

      // Hero Section - SEO Optimized French
      heroTitle: 'Dr. Hani Naiem Ibrahim, MD',
      heroSubtitle: 'Consultant Senior en Diabète et Endocrinologie - FRCP Londres, MRCP UK',
      heroDescription: 'Soins médicaux experts pour le diabète, la neuropathie diabétique, les troubles thyroïdiens et les conditions métaboliques. Plus de 15 ans d\'excellence clinique au service des patients avec des approches thérapeutiques fondées sur des preuves.',
      bookConsultation: 'Planifier une Consultation Médicale',
      learnMore: 'Découvrir Nos Services',

      // About Section - Academic Compliant French
      aboutTitle: 'À propos du Dr. Hani Naiem Ibrahim',
      aboutDescription: 'Le Dr. Hani Naiem Ibrahim est Consultant Senior en Diabète et Endocrinologie avec qualifications FRCP Londres et MRCP UK. Avec une vaste expérience clinique et une formation avancée, le Dr. Ibrahim fournit des soins complets pour les troubles endocriniens et métaboliques complexes, utilisant la médecine fondée sur des preuves et des protocoles de traitement personnalisés.',
      yearsExperience: 'Années d\'Expérience Clinique',
      patientsHelped: 'Patients Traités avec Succès',

      // Services - Medical Academic French
      servicesTitle: 'Services Médicaux Complets',
      diabetesManagement: 'Gestion Avancée du Diabète',
      neuropathyTreatment: 'Traitement de la Neuropathie Diabétique',
      metabolicDisorders: 'Troubles Métaboliques et Endocriniens',
      thyroidDisorders: 'Gestion des Maladies Thyroïdiennes',
      hormonalImbalances: 'Traitement des Déséquilibres Hormonaux',
      preventiveCare: 'Soins Préventifs Endocriniens',

      // Contact - Professional French
      contactTitle: 'Contacter le Dr. Hani Ibrahim - Consultation Médicale',
      scheduleAppointment: 'Planifier un Rendez-vous Médical',
      clinicLocation: 'Localisation de la Clinique et Directions',
      officeHours: 'Heures de Bureau Médical',
      emergencyContact: 'Contact Médical d\'Urgence',
      insuranceAccepted: 'Options d\'Assurance et de Paiement',

      // Footer - Professional French
      footerText: 'Fournir des soins médicaux fondés sur des preuves avec compassion, expertise et dévouement aux résultats de santé des patients.',

      // Additional Medical Terms French
      clinicalExcellence: 'Excellence Clinique',
      patientCare: 'Soins Centrés sur le Patient',
      medicalExpertise: 'Expertise Médicale',
      treatmentApproach: 'Traitement Fondé sur des Preuves',
      healthcareProvider: 'Fournisseur de Soins de Santé',
      medicalConsultation: 'Consultation Médicale',
      diagnosticServices: 'Services Diagnostiques',
      treatmentPlanning: 'Planification du Traitement',
      followUpCare: 'Soins de Suivi',

      // Services Detailed French
      diabetesDesc: 'Gestion complète du diabète incluant le type 1, type 2 et diabète gestationnel avec des protocoles de surveillance et de traitement avancés.',
      neuropathyDesc: 'Traitement spécialisé de la neuropathie diabétique utilisant des approches fondées sur des preuves pour gérer la douleur et préserver la fonction nerveuse.',
      thyroidDesc: 'Diagnostic et traitement expert des troubles thyroïdiens incluant l\'hyperthyroïdie, l\'hypothyroïdie et les nodules thyroïdiens.',
      metabolicDesc: 'Soins avancés pour le syndrome métabolique, l\'obésité et les facteurs de risque cardiovasculaires associés.',
      hormonalDesc: 'Évaluation et traitement complets des déséquilibres hormonaux affectant le métabolisme et la santé globale.',
      preventiveDesc: 'Soins de santé proactifs axés sur la prévention des maladies et la détection précoce grâce à un dépistage complet.',
    }
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};