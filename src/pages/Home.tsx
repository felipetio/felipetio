import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../hooks/useContent';
import { useReveal } from '../hooks/useReveal';
import { testimonials } from '../content/testimonials';
import Markdown from '../components/Markdown';
import Terminal from '../components/Terminal';
import TrustWall from '../components/TrustWall';
import Sidekick from '../components/Sidekick';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const { language, t } = useLanguage();
  const { aboutSections } = useContent();
  const about = aboutSections();
  const location = useLocation();

  useReveal([language]);

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;
    requestAnimationFrame(() => {
      document.querySelector(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location]);

  const visibleTestimonials = testimonials.filter((tm) => tm.text[language] !== '...');

  return (
    <div>
      {/* ============== HERO ============== */}
      <section id="top" className="shell" style={{ paddingTop: 'clamp(40px, 6vh, 80px)' }}>
        <div className="grid gap-12 items-start max-[980px]:!grid-cols-1" style={{ gridTemplateColumns: '1fr 360px' }}>
          <div>
            <h1
              className="font-sans font-medium mt-[18px] mb-6"
              style={{
                fontSize: 'clamp(40px, 6.4vw, 84px)',
                lineHeight: 1.02,
                letterSpacing: '-0.035em',
                textWrap: 'balance',
              }}
            >
              <span>{t.hero.h1a} </span>
              <span className="serif" style={{ color: 'var(--color-forest)', fontWeight: 500 }}>
                {t.hero.h1b}
              </span>
              <br />
              <span>{t.hero.h1c}</span>
              <span
                className="px-0.5"
                style={{ background: 'linear-gradient(transparent 70%, color-mix(in oklab, var(--color-live) 50%, transparent) 70%)' }}
              >
                {t.hero.h1d}
              </span>
              .
            </h1>

            <p
              className="text-ink-2 mb-8 m-0"
              style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', maxWidth: '56ch', textWrap: 'pretty' }}
            >
              {t.hero.lede}
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <a href="#contact" className="btn btn-primary">
                <span>{t.hero.ctaPrimary}</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="max-[980px]:hidden">
            <Terminal />
          </div>
        </div>

        <TrustWall />
      </section>

      {/* ============== ABOUT ============== */}
      <section id="about" className="shell" style={{ paddingTop: 'clamp(32px, 5vh, 64px)', scrollMarginTop: '80px' }}>
        <div className="section-head">
          <div>
            <div className="section-tag">
              <b>~/about</b> <span>— {t.about.tag}</span>
            </div>
            <h2 className="section-title">{t.about.title}</h2>
          </div>
        </div>

        <div className="grid gap-14 items-start max-[900px]:!grid-cols-1" style={{ gridTemplateColumns: '1fr 320px' }}>
          <div className="reveal">
            <Markdown className="[&_p]:text-[16px] [&_p]:text-ink-2 [&_p]:leading-[1.75] [&_p]:mb-[18px] [&_p]:max-w-[64ch] [&_p:first-child]:text-[19px] [&_p:first-child]:text-ink [&_p:first-child]:leading-[1.55] [&_strong]:text-ink [&_strong]:font-semibold">
              {about.bio}
            </Markdown>
          </div>
          <div className="reveal">
            <Sidekick />
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section id="words" className="shell" style={{ paddingTop: 'clamp(32px, 5vh, 64px)', scrollMarginTop: '80px' }}>
        <div className="section-head">
          <div>
            <div className="section-tag">
              <b>~/words</b> <span>— {t.words.tag}</span>
            </div>
            <h2 className="section-title">{t.words.title}</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-1">
          {visibleTestimonials.map((tm) => (
            <TestimonialCard
              key={tm.name}
              name={tm.name}
              logo={tm.logo}
              role={tm.role[language]}
              text={tm.text[language]}
            />
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function TestimonialCard({ name, logo, role, text }: { name: string; logo: string; role: string; text: string }) {
  return (
    <article
      className="reveal rounded-2xl p-[22px] bg-paper flex flex-col gap-[18px] relative transition-all duration-250 hover:-translate-y-0.5 hover:[border-color:var(--color-ink-2)]"
      style={{ border: '1px solid var(--color-hair)' }}
    >
      <span
        className="absolute top-1.5 right-[18px] font-serif text-[64px] leading-none pointer-events-none"
        style={{ color: 'color-mix(in oklab, var(--color-forest) 12%, transparent)' }}
        aria-hidden="true"
      >
        {'“'}
      </span>

      <p className="text-[14.5px] text-ink-2 leading-[1.65] m-0" style={{ textWrap: 'pretty' }}>
        "{text}"
      </p>

      <div
        className="flex items-center gap-3 mt-auto pt-3.5"
        style={{ borderTop: '1px dashed var(--color-hair-strong)' }}
      >
        <div className="w-9 h-9 rounded-[9px] overflow-hidden flex-shrink-0 bg-bg-2">
          <img src={logo} alt={name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <div className="font-semibold text-[13px]">{name}</div>
          <div className="text-muted text-[12px]">{role}</div>
        </div>
      </div>
    </article>
  );
}
