import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: t.nav.offers, href: '#ofertas' },
    { name: t.nav.cases, href: '#cases' },
    { name: t.nav.about, href: '#about' }, // Changed to #about to match section id
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (!isHome) return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-sand/80 backdrop-blur-sm border-b border-forest/10">
      <div className="content-container py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-display font-bold text-xl tracking-tight text-forest"
          onClick={() => setIsOpen(false)}
        >
          Felipe Vieira
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {isHome && navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-forest transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/contato"
            className="text-sm font-medium hover:text-forest transition-colors"
          >
            {t.nav.contact}
          </Link>
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1 text-xs font-mono border border-forest/20 px-2 py-1 rounded hover:bg-forest hover:text-sand transition-all uppercase"
          >
            <Globe size={12} />
            {language}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-sand border-b border-forest/10 px-6 py-8 flex flex-col gap-6"
        >
          {isHome && navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-display font-medium text-forest"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/contato"
            className="text-lg font-display font-medium text-forest"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.contact}
          </Link>
          <button
            onClick={() => {
              setLanguage(language === 'pt' ? 'en' : 'pt');
              setIsOpen(false);
            }}
            className="flex items-center gap-2 text-sm font-mono border border-forest/20 w-fit px-4 py-2 rounded uppercase"
          >
            <Globe size={14} />
            {language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          </button>
        </motion.div>
      )}
    </header>
  );
}
