import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SECTION_IDS = ['top', 'offers', 'cases', 'about', 'words', 'contact'];

const navItems = [
  { num: '01', key: 'offers' as const, href: '#offers' },
  { num: '02', key: 'cases' as const, href: '#cases' },
  { num: '03', key: 'about' as const, href: '#about' },
  { num: '04', key: 'words' as const, href: '#words' },
  { num: '05', key: 'contact' as const, href: '#contact' },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const active = useScrollSpy(SECTION_IDS);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: href } });
    }
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backdropFilter: 'blur(10px)',
        background: 'color-mix(in oklab, var(--color-bg) 78%, transparent)',
        borderBottom: '1px solid var(--color-hair)',
      }}
    >
      <div className="shell flex items-center justify-between h-[60px]">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-semibold -tracking-[0.01em] whitespace-nowrap flex-shrink-0"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#top');
          }}
          aria-label="Felipe Vieira home"
        >
          <span
            className="w-[26px] h-[26px] rounded-[7px] grid place-items-center font-mono text-[13px] font-semibold relative overflow-hidden"
            style={{ background: 'var(--color-forest)', color: 'var(--color-bg)' }}
          >
            <span className="relative z-[1]">fv</span>
            <span
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, transparent 50%, color-mix(in oklab, var(--color-live) 60%, transparent) 50%)',
                opacity: 0.55,
              }}
            />
          </span>
          <span className="text-[14px]">Felipe Vieira</span>
          <span
            className="text-[12px] text-muted ml-1 pl-2.5 mono max-[720px]:hidden"
            style={{ borderLeft: '1px solid var(--color-hair)' }}
          >
            @felipetio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[22px]">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[13px] relative py-1.5 transition-colors duration-200"
              style={{ color: active === item.key.replace('words', 'words') ? 'var(--color-forest)' : 'var(--color-ink-2)' }}
              data-active={active === item.key || (item.key === 'words' && active === 'words')}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              <span className="font-mono text-[10px] text-muted mr-1">{item.num}</span>
              <span>{t.nav[item.key]}</span>
              {active === item.key && (
                <span
                  className="absolute left-0 right-0 -bottom-px h-0.5 rounded-sm"
                  style={{ background: 'var(--color-live)' }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2.5">
          <a href="#contact" className="pill live" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
            <span
              className="w-[7px] h-[7px] rounded-full"
              style={{
                background: 'var(--color-live)',
                animation: 'pulse 2.2s infinite',
              }}
            />
            <span>{t.nav.available}</span>
          </a>
          <div
            className="inline-flex h-8 rounded-full overflow-hidden"
            style={{ border: '1px solid var(--color-hair-strong)' }}
            role="group"
            aria-label="Language"
          >
            <button
              onClick={() => setLanguage('en')}
              className="px-2.5 font-mono text-[11px] transition-colors duration-200"
              style={{
                background: language === 'en' ? 'var(--color-forest)' : 'transparent',
                color: language === 'en' ? 'var(--color-bg)' : 'var(--color-muted)',
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('pt')}
              className="px-2.5 font-mono text-[11px] transition-colors duration-200"
              style={{
                background: language === 'pt' ? 'var(--color-forest)' : 'transparent',
                color: language === 'pt' ? 'var(--color-bg)' : 'var(--color-muted)',
              }}
            >
              PT
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden ml-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-bg px-6 py-8 flex flex-col gap-5"
          style={{ borderBottom: '1px solid var(--color-hair)' }}
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-lg font-medium text-forest"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              <span className="font-mono text-[11px] text-muted mr-2">{item.num}</span>
              {t.nav[item.key]}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
