import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Smartphone, 
  BrainCircuit, 
  Cpu, 
  Globe, 
  GraduationCap, 
  Layout as LayoutIcon,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  const { t } = useTranslation();

  const SERVICES = [
    {
      id: 'web',
      title: t('home.services.web.title'),
      description: t('home.services.web.description'),
      icon: <Globe className="w-12 h-12" />,
      features: t('services.features.web', { returnObjects: true }) as string[]
    },
    {
      id: 'mobile',
      title: t('home.services.mobile.title'),
      description: t('home.services.mobile.description'),
      icon: <Smartphone className="w-12 h-12" />,
      features: t('services.features.mobile', { returnObjects: true }) as string[]
    },
    {
      id: 'ai',
      title: t('home.services.ai.title'),
      description: t('home.services.ai.description'),
      icon: <BrainCircuit className="w-12 h-12" />,
      features: t('services.features.ai', { returnObjects: true }) as string[]
    },
    {
      id: 'embedded',
      title: t('home.services.embedded.title'),
      description: t('home.services.embedded.description'),
      icon: <Cpu className="w-12 h-12" />,
      features: t('services.features.embedded', { returnObjects: true }) as string[]
    },
    {
      id: 'iot',
      title: t('home.services.iot.title'),
      description: t('home.services.iot.description'),
      icon: <LayoutIcon className="w-12 h-12" />,
      features: t('services.features.iot', { returnObjects: true }) as string[]
    },
    {
      id: 'courses',
      title: t('home.services.courses.title'),
      description: t('home.services.courses.description'),
      icon: <GraduationCap className="w-12 h-12" />,
      features: t('services.features.courses', { returnObjects: true }) as string[]
    }
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
    <div className="pt-32 pb-24">
      <SEO 
        title={t('services.seo.title')}
        description={t('services.seo.description')}
        keywords={t('services.seo.keywords')}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{t('services.hero.title')} <span className="text-gradient">{t('services.hero.titleGradient')}</span></h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {t('services.hero.description')}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: 'rgba(0, 255, 156, 0.5)' }}
              className="p-10 rounded-3xl bg-brand-card border border-brand-border transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-brand-muted mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-brand-muted">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all">
                    {t('services.inquire')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('services.process.title')}</h2>
            <p className="text-brand-muted">{t('services.process.description')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('services.process.steps', { returnObjects: true }) as { title: string, description: string }[]).map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-brand-card border border-brand-border">
                <div className="text-5xl font-bold text-brand-primary/20 mb-6 font-mono">{`0${i + 1}`}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-brand-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
