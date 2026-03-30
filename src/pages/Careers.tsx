import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, UserPlus } from 'lucide-react';
import SEO from '../components/SEO';

const Careers = () => {
  const { t } = useTranslation();

  const JOBS = [
    { id: '1', title: t('careers.openings.items.j1.title'), category: t('careers.openings.items.j1.category'), location: t('careers.openings.items.j1.location'), type: t('careers.openings.items.j1.type'), salary: t('common.salary5k8k') },
    { id: '2', title: t('careers.openings.items.j2.title'), category: t('careers.openings.items.j2.category'), location: t('careers.openings.items.j2.location'), type: t('careers.openings.items.j2.type'), salary: t('common.salary6k10k') },
    { id: '3', title: t('careers.openings.items.j3.title'), category: t('careers.openings.items.j3.category'), location: t('careers.openings.items.j3.location'), type: t('careers.openings.items.j3.type'), salary: t('common.salary4k7k') },
    { id: '4', title: t('careers.openings.items.j4.title'), category: t('careers.openings.items.j4.category'), location: t('careers.openings.items.j4.location'), type: t('careers.openings.items.j4.type'), salary: t('common.salary4k6k') },
    { id: '5', title: t('careers.openings.items.j5.title'), category: t('careers.openings.items.j5.category'), location: t('careers.openings.items.j5.location'), type: t('careers.openings.items.j5.type'), salary: t('common.salary3k5k') },
    { id: '6', title: t('careers.openings.items.j6.title'), category: t('careers.openings.items.j6.category'), location: t('careers.openings.items.j6.location'), type: t('careers.openings.items.j6.type'), salary: t('common.salary5k9k') }
  ];

  const benefits = t('careers.whyJoin.benefits', { returnObjects: true }) as { title: string, description: string }[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t('careers.seo.title'),
    "description": t('careers.seo.description'),
    "itemListElement": JOBS.map((job, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "JobPosting",
        "title": job.title,
        "description": job.category,
        "datePosted": "2026-03-01", // Placeholder
        "validThrough": "2026-12-31", // Placeholder
        "employmentType": job.type,
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Control A",
          "sameAs": window.location.origin
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": job.location,
            "addressCountry": "Egypt"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "EGP",
          "value": {
            "@type": "QuantitativeValue",
            "value": job.salary,
            "unitText": "MONTH"
          }
        }
      }
    }))
  };

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={t('careers.seo.title')}
        description={t('careers.seo.description')}
        keywords={t('careers.seo.keywords')}
        schema={careersSchema}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{t('careers.hero.title')} <span className="text-gradient">{t('careers.hero.titleGradient')}</span></h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {t('careers.hero.description')}
          </p>
        </motion.div>

        {/* Why Join Us */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-32"
        >
          <motion.div 
            variants={itemVariants}
            className="p-10 rounded-3xl bg-brand-card border border-brand-border"
          >
            <h2 className="text-3xl font-bold mb-8">{t('careers.whyJoin.title')}</h2>
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">{benefit.title}</h3>
                    <p className="text-brand-muted text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="aspect-square rounded-3xl overflow-hidden bg-brand-card border border-brand-border"
          >
            <img 
              src="https://picsum.photos/seed/office/800/800" 
              alt="Office Environment" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        {/* Current Openings */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">{t('careers.openings.title')}</h2>
              <p className="text-brand-muted">{t('careers.openings.subtitle')}</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-brand-muted text-sm">
              <UserPlus className="w-4 h-4" /> {t('careers.openings.count', { count: 6 })}
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {JOBS.map((job, i) => (
              <motion.div 
                key={job.id}
                variants={itemVariants}
                whileHover={{ x: 10, borderColor: 'rgba(0, 255, 156, 0.5)' }}
                className="p-8 rounded-2xl bg-brand-card border border-brand-border transition-all group flex flex-col md:flex-row justify-between items-center gap-6"
              >
                <div className="flex-grow">
                  <div className="text-xs font-mono text-brand-primary mb-2 uppercase tracking-widest">{job.category}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 text-sm text-brand-muted">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.type}</div>
                    <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {job.salary}</div>
                  </div>
                </div>
                <button className="px-8 py-4 bg-brand-bg border border-brand-border rounded-xl hover:bg-brand-primary hover:text-brand-bg transition-all font-bold flex items-center gap-2 text-brand-text">
                  {t('careers.openings.apply')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Referral Section */}
        <div className="p-16 rounded-[40px] bg-brand-card border border-brand-border text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl font-bold mb-6">{t('careers.referral.title')}</h2>
          <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
            {t('careers.referral.description')}
          </p>
          <button className="px-10 py-5 bg-brand-primary text-brand-bg font-bold rounded-2xl hover:scale-105 transition-transform inline-flex items-center gap-2 text-xl">
            {t('careers.referral.button')} <ArrowRight className="w-6 h-6 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
