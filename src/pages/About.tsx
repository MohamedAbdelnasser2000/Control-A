import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Users, Target, Rocket, ShieldCheck, Zap, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const { t } = useTranslation();

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

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": t('about.seo.title'),
    "description": t('about.seo.description'),
    "publisher": {
      "@type": "Organization",
      "name": "Control A"
    }
  };

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        keywords={t('about.seo.keywords')}
        schema={aboutSchema}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{t('about.hero.title')} <span className="text-gradient">{t('about.hero.titleGradient')}</span></h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {t('about.hero.description')}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-32"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-10 rounded-3xl bg-brand-card border border-brand-border"
          >
            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{t('about.mission.title')}</h2>
            <p className="text-brand-muted leading-relaxed">
              {t('about.mission.description')}
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-10 rounded-3xl bg-brand-card border border-brand-border"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{t('about.vision.title')}</h2>
            <p className="text-brand-muted leading-relaxed">
              {t('about.vision.description')}
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t('about.values.title')}</h2>
            <p className="text-brand-muted">{t('about.values.description')}</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <ShieldCheck />, title: t('about.values.trust.title'), desc: t('about.values.trust.description') },
              { icon: <Zap />, title: t('about.values.innovation.title'), desc: t('about.values.innovation.description') },
              { icon: <Users />, title: t('about.values.collaboration.title'), desc: t('about.values.collaboration.description') },
              { icon: <Heart />, title: t('about.values.quality.title'), desc: t('about.values.quality.description') }
            ].map((value, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-brand-muted text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section Placeholder */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-16">{t('about.team.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((member) => (
              <motion.div 
                key={member}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-square rounded-3xl overflow-hidden bg-brand-card border border-brand-border mb-6 relative">
                  <img 
                    src={`https://picsum.photos/seed/person${member}/600/600`} 
                    alt={`${t('about.team.member')} ${member}`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold">{t('about.team.member')}</h3>
                <p className="text-brand-primary text-sm font-mono uppercase tracking-widest mt-1">{t('about.team.role')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
