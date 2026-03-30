import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Projects = () => {
  const { t } = useTranslation();

  const PROJECTS = [
    { id: '1', title: t('projects.items.p1.title'), category: t('common.catIotWeb'), image: 'https://picsum.photos/seed/factory/800/600', desc: t('projects.items.p1.description') },
    { id: '2', title: t('projects.items.p2.title'), category: t('common.catAiMobile'), image: 'https://picsum.photos/seed/health/800/600', desc: t('projects.items.p2.description') },
    { id: '3', title: t('projects.items.p3.title'), category: t('common.catWeb'), image: 'https://picsum.photos/seed/shop/800/600', desc: t('projects.items.p3.description') },
    { id: '4', title: t('projects.items.p4.title'), category: t('common.catEmbedded'), image: 'https://picsum.photos/seed/home/800/600', desc: t('projects.items.p4.description') },
    { id: '5', title: t('projects.items.p5.title'), category: t('common.catWebAi'), image: 'https://picsum.photos/seed/finance/800/600', desc: t('projects.items.p5.description') },
    { id: '6', title: t('projects.items.p6.title'), category: t('common.catMobileCourses'), image: 'https://picsum.photos/seed/edu/800/600', desc: t('projects.items.p6.description') }
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t('projects.seo.title'),
    "description": t('projects.seo.description'),
    "itemListElement": PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.desc,
        "image": project.image,
        "genre": project.category
      }
    }))
  };

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={t('projects.seo.title')}
        description={t('projects.seo.description')}
        keywords={t('projects.seo.keywords')}
        schema={projectsSchema}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{t('projects.hero.title')} <span className="text-gradient">{t('projects.hero.titleGradient')}</span></h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {t('projects.hero.description')}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden bg-brand-card border border-brand-border transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-mono text-brand-primary mb-2 uppercase tracking-widest">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-brand-text font-medium hover:text-brand-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> {t('common.liveDemo')}
                  </button>
                  <button className="flex items-center gap-2 text-brand-text font-medium hover:text-brand-primary transition-colors">
                    <Github className="w-4 h-4" /> {t('common.source')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="p-16 rounded-[40px] bg-brand-card border border-brand-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl font-bold mb-6">{t('projects.cta.title')}</h2>
            <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
              {t('projects.cta.description')}
            </p>
            <Link to="/contact" className="px-10 py-5 bg-brand-primary text-brand-bg font-bold rounded-2xl hover:scale-105 transition-transform inline-flex items-center gap-2 text-xl">
              {t('projects.cta.button')} <ArrowRight className="w-6 h-6 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
