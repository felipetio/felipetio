import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
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
            {t.notFound.back}
          </Link>

          <p className="mono mb-2" style={{ color: 'var(--color-muted)', fontSize: '14px' }}>404</p>
          <h1 className="text-forest" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            {t.notFound.message}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
