import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FEATURES } from '../features';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/felipetio',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.25 9.27 7.77 10.77.57.1.78-.25.78-.55v-1.93c-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.18-1.26-5.18-5.62 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.44.11-3 0 0 .96-.31 3.15 1.17.91-.25 1.88-.38 2.85-.38.97 0 1.94.13 2.85.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.56.24 2.71.12 3 .73.8 1.17 1.81 1.17 3.05 0 4.37-2.66 5.33-5.2 5.61.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.79.55 4.51-1.5 7.76-5.75 7.76-10.77C23.33 5.56 18.27.5 12 .5z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/felipetio/',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
      </svg>
    ),
  },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: t.nav.offers, href: '#ofertas' },
    ...(FEATURES.showCases ? [{ name: t.nav.cases, href: '#cases' }] : []),
    { name: t.nav.about, href: '#about' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: href } });
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHome ? link.href : `/${link.href}`}
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
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-forest/70 hover:text-forest transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHome ? link.href : `/${link.href}`}
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
          <div className="flex items-center gap-4 pt-2">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-forest/80 hover:text-forest transition-colors"
              >
                {icon}
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
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
