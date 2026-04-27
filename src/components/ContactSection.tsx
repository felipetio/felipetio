import { useState, type ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT, HANDLE } from '../constants';

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  }

  return (
    <section
      id="contact"
      className="shell"
      style={{ paddingTop: 'clamp(32px, 5vh, 64px)', paddingBottom: 'clamp(48px, 8vh, 96px)', scrollMarginTop: '80px' }}
    >
      <div className="section-head">
        <div>
          <div className="section-tag">
            <b>~/contact</b> <span>— {HANDLE}</span>
          </div>
          <h2 className="section-title">{t.nav.contact}</h2>
        </div>
      </div>

      <div
        className="contact-card rounded-3xl relative overflow-hidden grid gap-9 items-end max-[820px]:!grid-cols-1 max-[820px]:items-start"
        style={{
          background: 'var(--color-forest)',
          color: '#eaf2ec',
          padding: 'clamp(28px, 5vw, 56px)',
          gridTemplateColumns: '1.4fr 1fr',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 100% 0%, color-mix(in oklab, var(--color-live) 70%, transparent), transparent 40%), radial-gradient(circle at 0% 100%, color-mix(in oklab, var(--color-live) 35%, transparent), transparent 35%)',
            opacity: 0.9,
          }}
        />

        <div className="relative">
          <div
            className="w-[84px] h-[84px] rounded-full overflow-hidden mb-[18px] flex-shrink-0"
            style={{
              border: '2px solid color-mix(in oklab, var(--color-live) 70%, white)',
              boxShadow: '0 10px 30px -10px #00000060',
            }}
          >
            <img src="/assets/felipe.png" alt="Felipe Vieira" className="w-full h-full object-cover block" />
          </div>

          <h2
            className="font-sans font-medium m-0 mb-3 leading-[1.05]"
            style={{ fontSize: 'clamp(28px, 4.4vw, 52px)', letterSpacing: '-0.025em', textWrap: 'balance' }}
          >
            {t.contact.h2a}
            <em className="font-serif italic" style={{ color: 'color-mix(in oklab, var(--color-live) 80%, white)' }}>
              {t.contact.h2b}
            </em>
          </h2>

          <p className="text-[16px] m-0 mb-6 max-w-[44ch]" style={{ color: '#c8d4cc' }}>
            {t.contact.lede}
          </p>
        </div>

        <div className="relative flex flex-col gap-2.5">
          <button onClick={copyEmail} className="contact-chip" aria-label="Copy email">
            <CopyIcon />
            <span style={{ color: copied ? 'var(--color-live)' : undefined }}>
              {copied ? t.contact.copy : CONTACT.email}
            </span>
          </button>

          <a
            href={`mailto:${CONTACT.email}`}
            className="btn inline-flex items-center gap-2.5 self-start hover:!bg-white"
            style={{ background: 'var(--color-bg)', color: 'var(--color-forest)' }}
          >
            <span>{t.contact.cta}</span>
            <ArrowIcon />
          </a>

          <ExternalChip href={CONTACT.github}>
            <GitHubIcon />
            github.com/felipetio
          </ExternalChip>

          <ExternalChip href={CONTACT.linkedin}>
            <LinkedInIcon />
            linkedin.com/in/felipetio
          </ExternalChip>
        </div>
      </div>
    </section>
  );
}

function ExternalChip({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="contact-chip">
      {children}
    </a>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.25 9.27 7.77 10.77.57.1.78-.25.78-.55v-1.93c-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.18-1.26-5.18-5.62 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.44.11-3 0 0 .96-.31 3.15 1.17.91-.25 1.88-.38 2.85-.38.97 0 1.94.13 2.85.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.56.24 2.71.12 3 .73.8 1.17 1.81 1.17 3.05 0 4.37-2.66 5.33-5.2 5.61.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.79.55 4.51-1.5 7.76-5.75 7.76-10.77C23.33 5.56 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
