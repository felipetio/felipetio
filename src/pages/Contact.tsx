import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const channels = [
  {
    label: 'GitHub',
    handle: '@felipetio',
    href: 'https://github.com/felipetio',
  },
  {
    label: 'LinkedIn',
    handle: '@felipetio',
    href: 'https://www.linkedin.com/in/felipetio/',
  },
  {
    label: 'Email',
    handle: 'me@felipet.io',
    href: 'mailto:me@felipet.io',
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="section-padding bg-sand min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/" className="text-forest/60 hover:text-forest flex items-center gap-2 mb-8 text-sm font-medium">
            <ArrowLeft size={14} />
            Home
          </Link>

          <h1 className="text-4xl md:text-5xl mb-12 text-forest">{t.contact.pageTitle}</h1>

          <ul className="divide-y divide-forest/10 border-y border-forest/10">
            {channels.map(({ label, handle, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="grid grid-cols-[8rem_1fr] items-center py-5 group"
                >
                  <span className="font-display text-lg text-forest">{label}</span>
                  <span className="font-mono text-sm text-zinc-600 group-hover:text-forest transition-colors">
                    {handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
