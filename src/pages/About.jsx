import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiBook, FiHeart, FiUsers, FiTarget, FiStar, FiGlobe, FiCalendar, FiBriefcase, FiClipboard, FiAperture } = FiIcons;

const About = () => {
  const { t, language } = useLanguage();

  const qualifications = [
    {
      title: language === 'ar' ? 'دكتور في الطب (MD)' : language === 'fr' ? 'Docteur en Médecine (MD)' : 'Medical Doctor (MD)',
      institution: language === 'ar' ? 'جامعة أكتوبر للعلوم الحديثة والآداب' : language === 'fr' ? 'Université October Six' : 'October Six University Faculty of Medicine',
      year: '2003',
      icon: FiAward,
    },
    {
      title: language === 'ar' ? 'زمالة الكلية الملكية للأطباء' : language === 'fr' ? 'Membre du Collège Royal des Médecins' : 'Member of the Royal College of Physicians (MRCP)',
      institution: language === 'ar' ? 'المملكة المتحدة' : language === 'fr' ? 'Royaume-Uni' : 'United Kingdom',
      year: '2008',
      icon: FiBook,
    },
    {
      title: language === 'ar' ? 'زمالة الكلية الملكية للأطباء' : language === 'fr' ? 'Fellowship du Collège Royal des Médecins' : 'Fellowship of the Royal College of Physicians (FRCP)',
      institution: language === 'ar' ? 'لندن' : language === 'fr' ? 'Londres' : 'London',
      year: '2021',
      icon: FiStar,
    },
    {
      title: language === 'ar' ? 'شهادة التميز في علم الدهون' : language === 'fr' ? 'Certificat d\'Excellence en Lipidologie' : 'Certificate of Excellence in Lipidology',
      institution: language === 'ar' ? 'الجمعية الأوروبية لتصلب الشرايين' : language === 'fr' ? 'Société Européenne d\'Athérosclérose' : 'European Atherosclerosis Society',
      year: '2020',
      icon: FiTarget,
    },
  ];

  const expertise = [
    language === 'ar' ? 'إدارة السكري من النوع الأول والثاني' : language === 'fr' ? 'Gestion du Diabète Type 1 et 2' : 'Type 1 & Type 2 Diabetes Management',
    language === 'ar' ? 'علاج اعتلال الأعصاب السكري' : language === 'fr' ? 'Traitement de la Neuropathie Diabétique' : 'Diabetic Neuropathy Treatment',
    language === 'ar' ? 'اضطرابات الغدة الدرقية' : language === 'fr' ? 'Troubles Thyroïdiens' : 'Thyroid Disorders',
    language === 'ar' ? 'متلازمة الأيض' : language === 'fr' ? 'Syndrome Métabolique' : 'Metabolic Syndrome',
    language === 'ar' ? 'علاج مضخة الأنسولين' : language === 'fr' ? 'Thérapie par Pompe à Insuline' : 'Insulin Pump Therapy',
    language === 'ar' ? 'مراقبة الجلوكوز المستمرة' : language === 'fr' ? 'Surveillance Continue du Glucose' : 'Continuous Glucose Monitoring',
    language === 'ar' ? 'الاختلالات الهرمونية' : language === 'fr' ? 'Déséquilibres Hormonaux' : 'Hormonal Imbalances',
    language === 'ar' ? 'إدارة السمنة' : language === 'fr' ? 'Gestion de l\'Obésité' : 'Obesity Management',
  ];

  const academicInterests = [
    'Adult and Pediatric Diabetes',
    'Endocrine Neuropathies',
    'Diabetic Foot',
    'Diabetic Eye Disease',
    'Peripheral Arterial Disease',
    'Hypoglycemia',
    'Diabetic Fatty Liver',
    'Clinical Lipidology',
    'Diabetic Heart Disease',
    'Psychosocial aspects of diabetes'
  ];

  const conferences = [
    'European Association for the Study of Diabetes (EASD) since 2015',
    'NeuroDiab conferences since 2016',
    'European Congress of Endocrinology (ECE)',
    'CODHY 2019 presenter',
    'Diabetes UK 2020 presenter',
    'EASD Fatty Liver meeting 2019 presenter'
  ];

  const careerTimeline = [
    {
      year: '1983-1996',
      title: 'Early Education',
      description: 'Gulf English School, Kuwait (Kindergarten through Secondary School, IGCSE, A-Level)'
    },
    {
      year: '1997-2003',
      title: 'Medical Education',
      description: 'Faculty of Medicine, October Six University, Egypt'
    },
    {
      year: '2004',
      title: 'House Officer',
      description: 'Cairo University Hospital'
    },
    {
      year: '2005-2008',
      title: 'Medical Residency',
      description: 'Resident of Internal Medicine and Endocrinology at several university and private hospitals'
    },
    {
      year: '2008',
      title: 'MRCP UK',
      description: 'Obtained Membership of the Royal College of Physicians of UK'
    },
    {
      year: '2008-2013',
      title: 'Specialist',
      description: 'Specialist of Internal Medicine and Endocrinology at several hospitals and clinical centers'
    },
    {
      year: '2011-Present',
      title: 'Clinic Director',
      description: 'Founder and Director of "Diabetes and Neuropathy Clinic"'
    },
    {
      year: '2013-Present',
      title: 'Senior Consultant',
      description: 'Senior Consultant of Diabetes and Endocrinology at several hospitals and clinical centers'
    },
    {
      year: '2020',
      title: 'Certifications',
      description: 'SCOPE certified by EASO, Certificate of Excellence in Lipidology, NLA Master\'s in Lipidology'
    },
    {
      year: '2021',
      title: 'FRCP London',
      description: 'Fellowship of the Royal College of Physicians of London'
    }
  ];

  const researchPublications = [
    {
      title: 'Marked Improvement of Insulin Resistance Upon Administration of Insulin Sensitizers',
      type: 'Poster',
      venue: 'CODHY 2019'
    },
    {
      title: 'Marked improvement of cardiac contractility and NASH upon cessation of hypoglycemic episodes and gluten free diet',
      type: 'Oral presentation',
      venue: 'NAFLD EASD 2019'
    },
    {
      title: 'Recurrent Severe Hypoglycaemia Induced by Metformin in Patients with NASH',
      type: 'Poster',
      venue: 'Diabetes UK 2020'
    },
    {
      title: 'Beriberi Complicating Bariatric Surgery in Diabetics',
      type: 'Poster',
      venue: 'Diabetes UK 2020'
    },
    {
      title: 'A Budget Impact Analysis of substituting Sitagliptin with Liraglutide in Type 2 Diabetes from a private health insurance perspective in Egypt',
      type: 'Publication',
      venue: 'Pharmacoeconomics'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiAward} className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Senior Consultant</h3>
                  <p className="text-gray-600">
                    {language === 'ar' ? 'أخصائي السكري وأمراض الغدد الصماء - FRCP لندن، MRCP المملكة المتحدة' : language === 'fr' ? 'Spécialiste du Diabète et Endocrinologie - FRCP Londres, MRCP UK' : 'Diabetes & Endocrinology - FRCP London, MRCP UK'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === 'ar' ? '5000+ مريض' : language === 'fr' ? '5000+ Patients' : '5000+ Patients'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ar' ? 'تم علاجهم وإدارتهم بنجاح' : language === 'fr' ? 'Traités et pris en charge avec succès' : 'Successfully treated and managed'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('patientCare')}</h3>
                  <p className="text-gray-600">
                    {language === 'ar' ? 'نهج محوره المريض' : language === 'fr' ? 'Approche centrée sur le patient' : 'Patient-centered approach'}
                  </p>
                </div>
              </div>
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
      </section>

      {/* Biography Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Journey of a Healer
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Dr. Hani's path to becoming a leading endocrinologist began over three decades ago, shaped by a commitment to excellence and a passion for transforming lives through medical care.
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 mb-16 leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                Dr. Hani Naiem K. Ibrahim's journey in medicine began in the classrooms of Gulf English School in Kuwait, where he completed his early education from 1983 to 1996. His academic foundation was built on the rigorous IGCSE and A-Level curricula, preparing him for the challenges of medical education that awaited.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In 1997, he embarked on his medical career at October Six University in Egypt, where he honed his skills and developed his passion for endocrinology. After completing his medical degree in 2003, Dr. Ibrahim began his professional journey as a House Officer at Cairo University Hospital, gaining invaluable hands-on experience in patient care.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                His dedication to excellence led him to achieve the prestigious Membership of the Royal College of Physicians of the UK (MRCP UK) in 2008, a testament to his medical expertise. This achievement marked the beginning of his specialization in Diabetes and Endocrinology, where he served as a specialist at numerous hospitals and clinical centers from 2008 to 2013.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                A pivotal moment in Dr. Ibrahim's career came in 2011 when he founded the "Diabetes and Neuropathy Clinic," where he continues to serve as Director to this day. This specialized clinic became a center of excellence under his leadership, providing comprehensive care for patients with diabetes and related complications.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Since 2013, Dr. Ibrahim has been serving as a Senior Consultant of Diabetes and Endocrinology at several prestigious hospitals and clinical centers. His expertise was further recognized in 2021 when he was awarded the Fellowship of the Royal College of Physicians of London (FRCP London), one of the highest honors in the medical field.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Today, Dr. Ibrahim leads a multidisciplinary team of healthcare professionals, including diabetologists, educators, neurologists, cardiologists, psychologists, psychiatrists, ophthalmologists, radiologists, physiotherapists, and podiatrists. Together, they provide comprehensive care for patients with various forms of diabetes, neuropathy, diabetic foot conditions, heart failure, kidney disease, and other endocrine disorders.
              </p>

              <p className="text-lg leading-relaxed">
                Beyond clinical practice, Dr. Ibrahim is passionately committed to community awareness and education. His team regularly organizes community awareness programs and continuous education initiatives for healthcare professionals. His contributions to research, particularly in the areas of insulin resistance, NASH, and hypoglycemia, have been presented at prestigious international conferences, further cementing his reputation as a leader in the field of endocrinology.
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {careerTimeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                        <span className="text-sm font-bold text-blue-600 block mb-2">{item.year}</span>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center z-10">
                      {index < 2 && <SafeIcon icon={FiBook} className="text-white" />}
                      {index >= 2 && index < 6 && <SafeIcon icon={FiBriefcase} className="text-white" />}
                      {index >= 6 && <SafeIcon icon={FiAward} className="text-white" />}
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research and Publications */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research & Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Ibrahim's contributions to medical research have advanced our understanding of diabetes and its complications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {researchPublications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <SafeIcon icon={FiClipboard} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{pub.title}</h3>
                <div className="flex justify-between text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{pub.type}</span>
                  <span className="text-gray-500">{pub.venue}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Academic Interests</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {academicInterests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow text-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <SafeIcon icon={FiAperture} className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm">{interest}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conference Participation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Conference Participation</h3>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-8">
                <SafeIcon icon={FiGlobe} className="w-12 h-12 text-blue-600 mr-4" />
                <h4 className="text-xl font-bold text-gray-900">International Medical Conferences</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {conferences.map((conference, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <SafeIcon icon={FiCalendar} className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{conference}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Responsibilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Responsibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a Senior Consultant of Diabetes and Endocrinology, Dr. Ibrahim manages a comprehensive team of healthcare professionals
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-8 text-center">Leadership & Clinical Responsibilities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 mr-2" />
                    Team Management
                  </h4>
                  <p className="text-blue-100 mb-4">
                    Managing a comprehensive Diabetes Team including:
                  </p>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Five diabetologists and three educators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Specialists: neurologist, cardiologists, psychologists, psychiatrist, ophthalmologist</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Support team: radiologist, physiotherapists, podiatrist, research assistant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Administrative staff for smooth clinic operations</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <SafeIcon icon={FiGlobe} className="w-6 h-6 mr-2" />
                    Community & Education
                  </h4>
                  <p className="text-blue-100 mb-4">
                    Extending medical knowledge beyond the clinic:
                  </p>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Planning and executing quarterly community awareness programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Developing continuous education programs for junior diabetologists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Training educators and other staff members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Participating in international conferences and research initiatives</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <SafeIcon icon={FiHeart} className="w-6 h-6 mr-2" />
                    Diabetes & Complications
                  </h4>
                  <p className="text-blue-100 mb-4">
                    Comprehensive care for diabetes and related conditions:
                  </p>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Treating various forms of diabetes across different age groups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Managing neuropathy and diabetic foot conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Treating diabetic heart failure and kidney disease</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Managing diabetic NASH and retinopathy</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <SafeIcon icon={FiTarget} className="w-6 h-6 mr-2" />
                    Specialized Treatments
                  </h4>
                  <p className="text-blue-100 mb-4">
                    Expert care for complex endocrine conditions:
                  </p>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Treatment of various types of dyslipidemia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Management of diverse endocrine diseases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Implementation of advanced insulin therapy protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Development of personalized treatment plans</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'التعليم والمؤهلات' : language === 'fr' ? 'Formation et Qualifications' : 'Education & Qualifications'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'تعليم طبي واسع وتدريب متخصص' : language === 'fr' ? 'Formation médicale approfondie et formation spécialisée' : 'Extensive medical education and specialized training'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={qual.icon} className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {qual.title}
                    </h3>
                    <p className="text-gray-600 mb-1">{qual.institution}</p>
                    <p className="text-blue-600 font-medium">{qual.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'مجالات الخبرة' : language === 'fr' ? 'Domaines d\'Expertise' : 'Areas of Expertise'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'معرفة متخصصة في تخصصات طبية متعددة' : language === 'fr' ? 'Connaissances spécialisées dans plusieurs disciplines médicales' : 'Specialized knowledge in multiple medical disciplines'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiHeart} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              {language === 'ar' ? 'فلسفتي الطبية' : language === 'fr' ? 'Ma Philosophie Médicale' : 'My Medical Philosophy'}
            </h2>
            <blockquote className="text-2xl italic mb-8 max-w-4xl mx-auto leading-relaxed">
              {language === 'ar'
                ? '"كل مريض يستحق رعاية شخصية ومتعاطفة. أؤمن بعلاج ليس فقط الحالة، بل الشخص كله، مما يضمن حصول كل مريض على الاهتمام والخبرة التي يستحقها."'
                : language === 'fr'
                ? '"Chaque patient mérite des soins personnalisés et compatissants. Je crois en traiter non seulement la condition, mais la personne entière, en m\'assurant que chaque patient reçoit l\'attention et l\'expertise qu\'il mérite."'
                : '"Every patient deserves personalized, compassionate care. I believe in treating not just the condition, but the whole person, ensuring each patient receives the attention and expertise they deserve."'}
            </blockquote>
            <p className="text-xl text-blue-100">
              {language === 'ar' ? '- د. هاني نعيم إبراهيم' : '- Dr. Hani Naiem Ibrahim'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;