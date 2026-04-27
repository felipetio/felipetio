import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('me@felipet.io');
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      window.location.href = 'mailto:me@felipet.io';
    }
  }

  return (
    <section id="contact" className="shell" style={{ paddingTop: 'clamp(32px, 5vh, 64px)', paddingBottom: 'clamp(48px, 8vh, 96px)', scrollMarginTop: '80px' }}>
      <div className="section-head">
        <div>
          <div className="section-tag">
            <b>~/contact</b> <span>— @felipetio</span>
          </div>
          <h2 className="section-title">{t.nav.contact}</h2>
        </div>
      </div>

      <div
        className="rounded-3xl relative overflow-hidden grid gap-9 items-end max-[820px]:grid-cols-1 max-[820px]:items-start"
        style={{
          background: 'var(--color-forest)',
          color: '#eaf2ec',
          padding: 'clamp(28px, 5vw, 56px)',
          gridTemplateColumns: '1.4fr 1fr',
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 100% 0%, color-mix(in oklab, var(--color-live) 70%, transparent), transparent 40%), radial-gradient(circle at 0% 100%, color-mix(in oklab, var(--color-live) 35%, transparent), transparent 35%)',
            opacity: 0.9,
          }}
        />

        {/* Left column */}
        <div className="relative">
          {/* Profile photo */}
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
            style={{
              fontSize: 'clamp(28px, 4.4vw, 52px)',
              letterSpacing: '-0.025em',
              textWrap: 'balance',
            }}
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

        {/* Right column: actions */}
        <div className="relative flex flex-col gap-2.5">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2.5 rounded-full font-mono text-[13px] w-fit whitespace-nowrap transition-all duration-200 cursor-pointer"
            style={{
              background: '#ffffff12',
              border: '1px solid #ffffff22',
              padding: '10px 14px',
              color: '#eaf2ec',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff20';
              e.currentTarget.style.borderColor = '#ffffff40';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff12';
              e.currentTarget.style.borderColor = '#ffffff22';
            }}
            aria-label="Copy email"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
            <span style={{ color: copied ? 'var(--color-live)' : undefined }}>
              {copied ? (language === 'pt' ? 'copiado ✓' : 'copied ✓') : 'me@felipet.io'}
            </span>
          </button>

          <a
            href="mailto:me@felipet.io"
            className="btn inline-flex items-center gap-2.5 self-start"
            style={{ background: 'var(--color-bg)', color: 'var(--color-forest)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-bg)'; }}
          >
            <span>{t.contact.cta}</span>
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="https://github.com/felipetio"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full font-mono text-[13px] w-fit whitespace-nowrap transition-all duration-200"
            style={{
              background: '#ffffff12',
              border: '1px solid #ffffff22',
              padding: '10px 14px',
              color: '#eaf2ec',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff20';
              e.currentTarget.style.borderColor = '#ffffff40';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff12';
              e.currentTarget.style.borderColor = '#ffffff22';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.25 9.27 7.77 10.77.57.1.78-.25.78-.55v-1.93c-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.18-1.26-5.18-5.62 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.44.11-3 0 0 .96-.31 3.15 1.17.91-.25 1.88-.38 2.85-.38.97 0 1.94.13 2.85.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.56.24 2.71.12 3 .73.8 1.17 1.81 1.17 3.05 0 4.37-2.66 5.33-5.2 5.61.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.79.55 4.51-1.5 7.76-5.75 7.76-10.77C23.33 5.56 18.27.5 12 .5z" />
            </svg>
            github.com/felipetio
          </a>

          <a
            href="https://www.linkedin.com/in/felipetio/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full font-mono text-[13px] w-fit whitespace-nowrap transition-all duration-200"
            style={{
              background: '#ffffff12',
              border: '1px solid #ffffff22',
              padding: '10px 14px',
              color: '#eaf2ec',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff20';
              e.currentTarget.style.borderColor = '#ffffff40';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff12';
              e.currentTarget.style.borderColor = '#ffffff22';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            linkedin.com/in/felipetio
          </a>
        </div>
      </div>
    </section>
  );
}
