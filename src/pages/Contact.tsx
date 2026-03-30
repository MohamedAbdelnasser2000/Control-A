import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
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

  const contactInfo = [
    { icon: <Mail />, title: t('contact.info.email.title'), desc: 'info@controla.runasp.net', detail: t('contact.info.email.detail') },
    { icon: <Phone />, title: t('contact.info.phone.title'), desc: '+20 123 456 7890', detail: t('contact.info.phone.detail') },
    { icon: <MapPin />, title: t('contact.info.visit.title'), desc: t('contact.info.visit.location'), detail: t('contact.info.visit.address') }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": t('contact.seo.title'),
    "description": t('contact.seo.description'),
    "publisher": {
      "@type": "Organization",
      "name": "Control A"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Control A",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+20-123-456-7890",
          "contactType": "customer service",
          "email": "info@controla.runasp.net"
        }
      ]
    }
  };

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
        keywords={t('contact.seo.keywords')}
        schema={contactSchema}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{t('contact.hero.title')} <span className="text-gradient">{t('contact.hero.titleGradient')}</span></h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {t('contact.hero.description')}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-32"
        >
          {contactInfo.map((contact, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: 'rgba(0, 255, 156, 0.5)' }}
              className="p-10 rounded-3xl bg-brand-card border border-brand-border text-center transition-all"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{contact.title}</h3>
              <p className="text-2xl font-bold mb-4 text-brand-text">{contact.desc}</p>
              <p className="text-brand-muted text-sm">{contact.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] bg-brand-card border border-brand-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl font-bold mb-8">{t('contact.form.title')}</h2>
            <form className="space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-muted ml-2">{t('contact.form.name')}</label>
                  <input type="text" placeholder={t('contact.form.placeholder.name')} className="w-full px-6 py-4 rounded-xl bg-brand-bg border border-brand-border focus:border-brand-primary outline-hidden transition-colors text-brand-text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-muted ml-2">{t('contact.form.email')}</label>
                  <input type="email" placeholder={t('contact.form.placeholder.email')} className="w-full px-6 py-4 rounded-xl bg-brand-bg border border-brand-border focus:border-brand-primary outline-hidden transition-colors text-brand-text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-muted ml-2">{t('contact.form.subject')}</label>
                <input type="text" placeholder={t('contact.form.placeholder.subject')} className="w-full px-6 py-4 rounded-xl bg-brand-bg border border-brand-border focus:border-brand-primary outline-hidden transition-colors text-brand-text" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-muted ml-2">{t('contact.form.message')}</label>
                <textarea placeholder={t('contact.form.placeholder.message')} rows={6} className="w-full px-6 py-4 rounded-xl bg-brand-bg border border-brand-border focus:border-brand-primary outline-hidden transition-colors resize-none text-brand-text"></textarea>
              </div>
              <button className="w-full py-5 bg-brand-primary text-brand-bg font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-xl">
                {t('contact.form.button')} <Send className="w-5 h-5 rtl:-rotate-90" />
              </button>
            </form>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="p-10 rounded-3xl bg-brand-card border border-brand-border">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('contact.sidebar.chat.title')}</h3>
                  <p className="text-brand-muted text-sm mb-4">{t('contact.sidebar.chat.description')}</p>
                  <button className="text-brand-primary font-bold hover:underline">{t('contact.sidebar.chat.button')}</button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="p-10 rounded-3xl bg-brand-card border border-brand-border">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('contact.sidebar.hours.title')}</h3>
                  <p className="text-brand-muted text-sm mb-4">{t('contact.sidebar.hours.description')}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-brand-muted">{t('contact.sidebar.hours.monFri')}</span>
                      <span className="text-brand-text">{t('contact.sidebar.hours.monFriHours')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted">{t('contact.sidebar.hours.sat')}</span>
                      <span className="text-brand-text">{t('contact.sidebar.hours.satHours')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted">{t('contact.sidebar.hours.sun')}</span>
                      <span className="text-red-400">{t('contact.sidebar.hours.closed')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="aspect-video rounded-3xl overflow-hidden bg-brand-card border border-brand-border">
              <img 
                src="https://picsum.photos/seed/map/800/600" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
