import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Smartphone, 
  BrainCircuit, 
  Cpu, 
  Globe, 
  GraduationCap, 
  ChevronRight, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2,
  Zap,
  Layout as LayoutIcon
} from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const { t } = useTranslation();

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Solutions & Embedded Systems",
    "provider": {
      "@type": "Organization",
      "name": "Control A"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Applications" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Embedded Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IoT Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Courses & Training" } }
      ]
    }
  };

  const SERVICES = [
    {
      id: 'web',
      title: t('home.services.web.title'),
      description: t('home.services.web.description'),
      icon: <Globe className="w-8 h-8" />,
      tags: t('home.services.web.tags', { returnObjects: true }) as string[]
    },
    {
      id: 'mobile',
      title: t('home.services.mobile.title'),
      description: t('home.services.mobile.description'),
      icon: <Smartphone className="w-8 h-8" />,
      tags: t('home.services.mobile.tags', { returnObjects: true }) as string[]
    },
    {
      id: 'ai',
      title: t('home.services.ai.title'),
      description: t('home.services.ai.description'),
      icon: <BrainCircuit className="w-8 h-8" />,
      tags: t('home.services.ai.tags', { returnObjects: true }) as string[]
    },
    {
      id: 'embedded',
      title: t('home.services.embedded.title'),
      description: t('home.services.embedded.description'),
      icon: <Cpu className="w-8 h-8" />,
      tags: t('home.services.embedded.tags', { returnObjects: true }) as string[]
    },
    {
      id: 'iot',
      title: t('home.services.iot.title'),
      description: t('home.services.iot.description'),
      icon: <LayoutIcon className="w-8 h-8" />,
      tags: t('home.services.iot.tags', { returnObjects: true }) as string[]
    },
    {
      id: 'courses',
      title: t('home.services.courses.title'),
      description: t('home.services.courses.description'),
      icon: <GraduationCap className="w-8 h-8" />,
      tags: t('home.services.courses.tags', { returnObjects: true }) as string[]
    }
  ];

  const PROJECTS = [
    { id: '1', title: t('projects.items.p1.title'), category: t('common.catIotWeb'), image: 'https://picsum.photos/seed/factory/800/600' },
    { id: '2', title: t('projects.items.p2.title'), category: t('common.catAiMobile'), image: 'https://picsum.photos/seed/health/800/600' },
    { id: '3', title: t('projects.items.p3.title'), category: t('common.catWeb'), image: 'https://picsum.photos/seed/shop/800/600' },
    { id: '4', title: t('projects.items.p4.title'), category: t('common.catEmbedded'), image: 'https://picsum.photos/seed/home/800/600' }
  ];

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

  return (
    <div className="overflow-hidden">
      <SEO 
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        keywords={t('home.seo.keywords')}
        schema={servicesSchema}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" 
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono mb-6"
            >
              <Zap className="w-3 h-3" />
              <span>{t('home.hero.badge')}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
            >
              {t('home.hero.title')} <span className="text-gradient">{t('home.hero.titleGradient')}</span> {t('home.hero.titleEnd')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-brand-muted mb-10 leading-relaxed"
            >
              {t('home.hero.description')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-brand-primary text-brand-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all">
                {t('nav.getStarted')} <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
              <Link to="/projects" className="px-8 py-4 bg-brand-card backdrop-blur-md border border-brand-border text-brand-text font-bold rounded-xl hover:bg-brand-card/80 active:scale-95 transition-all flex items-center justify-center">
                {t('common.viewWork')}
              </Link>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-brand-border"
          >
            {[
              { label: t('home.stats.projects'), value: '150+' },
              { label: t('home.stats.clients'), value: '80+' },
              { label: t('home.stats.experience'), value: '10+' },
              { label: t('home.stats.experts'), value: '25+' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-brand-muted uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t('home.services.title')}</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              {t('home.services.description')}
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, borderColor: 'rgba(0, 255, 156, 0.5)' }}
                className="p-8 rounded-2xl bg-brand-card border border-brand-border transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-muted mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-brand-bg border border-brand-border text-brand-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">{t('home.projects.title')}</h2>
              <p className="text-brand-muted">{t('home.projects.description')}</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all">
              {t('common.viewAllProjects')} <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden aspect-video bg-brand-card"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-brand-bg to-transparent">
                  <div className="text-xs font-mono text-brand-primary mb-2 uppercase tracking-widest">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <button className="w-10 h-10 rounded-full bg-brand-text text-brand-bg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-card border border-brand-border rounded-[40px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t('home.cta.title')}</h2>
                <p className="text-xl text-brand-muted mb-10">
                  {t('home.cta.description')}
                </p>
                
                <div className="space-y-6">
                  {[
                    { text: t('home.cta.feature1') },
                    { text: t('home.cta.feature2') },
                    { text: t('home.cta.feature3') }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg">
                      <CheckCircle2 className="text-brand-primary" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link to="/contact" className="w-full py-6 bg-brand-primary text-brand-bg font-bold rounded-2xl hover:opacity-90 transition-opacity text-center text-xl">
                  {t('common.getInTouch')}
                </Link>
                <p className="text-center text-brand-muted text-sm">{t('home.cta.noCommitment')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
