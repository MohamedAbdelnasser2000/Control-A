import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  const { t } = useTranslation();

  const POSTS = [
    { id: '1', title: t('blog.items.post1.title'), category: t('blog.search.categories.web'), date: t('common.dateMar15'), author: t('common.authorJohn'), image: 'https://picsum.photos/seed/web2026/800/600', excerpt: t('blog.items.post1.excerpt') },
    { id: '2', title: t('blog.items.post2.title'), category: t('blog.search.categories.ai'), date: t('common.dateMar10'), author: t('common.authorJane'), image: 'https://picsum.photos/seed/aihype/800/600', excerpt: t('blog.items.post2.excerpt') },
    { id: '3', title: t('blog.items.post3.title'), category: t('blog.search.categories.iot'), date: t('common.dateMar05'), author: t('common.authorMike'), image: 'https://picsum.photos/seed/iotsecurity/800/600', excerpt: t('blog.items.post3.excerpt') },
    { id: '4', title: t('blog.items.post4.title'), category: t('blog.search.categories.embedded'), date: t('common.dateFeb28'), author: t('common.authorSarah'), image: 'https://picsum.photos/seed/embeddedguide/800/600', excerpt: t('blog.items.post4.excerpt') },
    { id: '5', title: t('blog.items.post5.title'), category: t('blog.search.categories.mobile'), date: t('common.dateFeb20'), author: t('common.authorDavid'), image: 'https://picsum.photos/seed/mobileuiux/800/600', excerpt: t('blog.items.post5.excerpt') },
    { id: '6', title: t('blog.items.post6.title'), category: t('blog.search.categories.mobile'), date: t('common.dateFeb15'), author: t('common.authorEmily'), image: 'https://picsum.photos/seed/reactnative/800/600', excerpt: t('blog.items.post6.excerpt') }
  ];

  const categories = [
    { key: 'all', label: t('blog.search.categories.all') },
    { key: 'web', label: t('blog.search.categories.web') },
    { key: 'mobile', label: t('blog.search.categories.mobile') },
    { key: 'ai', label: t('blog.search.categories.ai') },
    { key: 'iot', label: t('blog.search.categories.iot') },
    { key: 'embedded', label: t('blog.search.categories.embedded') }
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

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": t('blog.seo.title'),
    "description": t('blog.seo.description'),
    "publisher": {
      "@type": "Organization",
      "name": "Control A"
    },
    "blogPost": POSTS.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={t('blog.seo.title')}
        description={t('blog.seo.description')}
        keywords={t('blog.seo.keywords')}
        schema={blogSchema}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{t('blog.hero.title')} <span className="text-gradient">{t('blog.hero.titleGradient')}</span></h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {t('blog.hero.description')}
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 mb-16"
        >
          <div className="relative flex-grow">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-muted w-5 h-5" />
            <input 
              type="text" 
              placeholder={t('blog.search.placeholder')} 
              className="w-full pl-16 pr-6 py-4 rounded-2xl bg-brand-card border border-brand-border focus:border-brand-primary outline-hidden transition-colors text-brand-text"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button 
                key={cat.key} 
                className="px-6 py-4 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-primary transition-colors whitespace-nowrap text-brand-text"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {POSTS.map((post, i) => (
            <motion.div 
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden bg-brand-card border border-brand-border hover:border-brand-primary/50 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-brand-muted mb-4">
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                  <div className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all">
                  {t('common.readMore')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <div className="mt-32 p-16 rounded-[40px] bg-brand-card border border-brand-border text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2" />
          <h2 className="text-4xl font-bold mb-6">{t('blog.newsletter.title')}</h2>
          <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
            {t('blog.newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" placeholder={t('blog.newsletter.placeholder')} className="flex-grow px-6 py-4 rounded-xl bg-brand-bg border border-brand-border focus:border-brand-primary outline-hidden transition-colors text-brand-text" />
            <button className="px-8 py-4 bg-brand-primary text-brand-bg font-bold rounded-xl hover:opacity-90 transition-opacity">
              {t('blog.newsletter.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
