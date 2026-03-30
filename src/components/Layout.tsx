import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Sun,
  Moon,
  Globe
} from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.careers'), path: '/careers' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-brand-bg font-bold text-xl">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-text">{t('common.brandName')}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-colors hover:text-brand-primary ${location.pathname === link.path ? 'text-brand-primary' : 'text-brand-muted'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-brand-card border border-brand-border text-brand-text hover:text-brand-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 p-2 rounded-full bg-brand-card border border-brand-border text-brand-text hover:text-brand-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
            <span className="text-xs font-bold uppercase">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
          </button>

          <Link to="/contact" className="px-5 py-2 bg-brand-primary text-brand-bg rounded-full hover:opacity-90 transition-opacity">
            {t('nav.getStarted')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-brand-card border border-brand-border text-brand-text"
            aria-label="Toggle language"
          >
            <span className="text-xs font-bold uppercase">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-brand-card border border-brand-border text-brand-text"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-brand-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-border p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-brand-primary' : 'text-brand-muted'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="text-brand-primary text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('nav.getStarted')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 border-t border-brand-border bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-brand-bg font-bold">A</span>
              </div>
              <span className="text-lg font-bold text-brand-text">{t('common.brandName')}</span>
            </div>
            <p className="text-brand-muted max-w-sm mb-8">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-text hover:text-brand-primary transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-text hover:text-brand-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-text hover:text-brand-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-text hover:text-brand-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-brand-text">{t('footer.company')}</h4>
            <ul className="space-y-4 text-brand-muted text-sm">
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/careers" className="hover:text-brand-primary transition-colors">{t('nav.careers')}</Link></li>
              <li><Link to="/blog" className="hover:text-brand-primary transition-colors">{t('nav.blog')}</Link></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">{t('footer.privacyPolicy')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-text">{t('nav.services')}</h4>
            <ul className="space-y-4 text-brand-muted text-sm">
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">{t('footer.webDev')}</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">{t('footer.mobileApps')}</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">{t('footer.aiMl')}</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">{t('footer.iotSolutions')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-muted">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-primary transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-brand-primary transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-100 origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
