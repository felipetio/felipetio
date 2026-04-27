import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT, HANDLE } from '../constants';

const channels = [
  { label: 'GitHub', handle: HANDLE, href: CONTACT.github },
  { label: 'LinkedIn', handle: HANDLE, href: CONTACT.linkedin },
  { label: 'Email', handle: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen" style={{ paddingTop: 'clamp(64px, 10vh, 120px)', paddingBottom: 'clamp(64px, 10vh, 120px)' }}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/"
            className="text-muted hover:text-forest flex items-center gap-2 mb-8 text-sm font-medium transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Home
          </Link>

          <h1 className="text-forest mb-12" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            {t.contact.pageTitle}
          </h1>

          <ul
            className="list-none m-0 p-0"
            style={{ borderTop: '1px solid var(--color-hair)', borderBottom: '1px solid var(--color-hair)' }}
          >
            {channels.map(({ label, handle, href }) => {
              const isExternal = !href.startsWith('mailto:');
              return (
                <li key={label} style={{ borderBottom: '1px solid var(--color-hair)' }}>
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="grid items-center py-5 group"
                    style={{ gridTemplateColumns: '8rem 1fr' }}
                  >
                    <span className="text-lg text-forest font-semibold">{label}</span>
                    <span className="font-mono text-sm text-ink-2 group-hover:text-forest transition-colors">
                      {handle}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
