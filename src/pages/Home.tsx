import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../hooks/useContent';
import { testimonials } from '../content/testimonials';
import Markdown from '../components/Markdown';
import { ArrowRight, Cpu, Zap, Code } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FEATURES } from '../features';

export default function Home() {
  const { language, t } = useLanguage();
  const { caseSections, aboutSections } = useContent();
  const about = aboutSections();
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;
    requestAnimationFrame(() => {
      document.querySelector(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location]);

  return (
    <div>
      {/* Hero */}
      <section className="section-padding min-h-[80vh] flex items-center">
        <div className="content-container grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl mb-6 text-forest leading-[1.1]"
            >
              {t.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-8 text-zinc-600 max-w-2xl"
            >
              {t.hero.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contato"
                className="bg-forest text-sand px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-forest/90 transition-all group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {FEATURES.showCases && (
                <a
                  href="#cases"
                  className="border border-forest text-forest px-8 py-4 rounded-full font-medium hover:bg-forest/5 transition-all"
                >
                  {t.hero.ctaSecondary}
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="ofertas" className="section-padding bg-zinc-100">
        <div className="content-container">
          <h2 className="text-3xl md:text-4xl mb-12 text-forest">{t.offers.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <OfferCard
              icon={<Zap className="text-emerald-600" />}
              {...t.offers.card1}
              type="produto-zero"
            />
            <OfferCard
              icon={<Code className="text-blue-600" />}
              {...t.offers.card2}
              type="sprint"
            />
            <OfferCard
              icon={<Cpu className="text-forest" />}
              {...t.offers.card3}
              type="ai"
            />
          </div>
        </div>
      </section>

      {/* Cases */}
      {FEATURES.showCases && (
        <section id="cases" className="section-padding bg-forest text-sand">
          <div className="content-container">
            <h2 className="text-3xl md:text-4xl mb-16 text-sand/90">{t.cases.title}</h2>
            <CaseCarousel
              cases={[t.cases.case1, t.cases.case2]}
              caseSections={caseSections}
            />
          </div>
        </section>
      )}

      {/* About Section - Unified Narrative */}
      <section id="about" className="section-padding bg-zinc-50 font-sans">
        <div className="content-container">
          <h2 className="text-3xl md:text-4xl mb-16 text-forest">{t.about.title}</h2>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-8">
              <Markdown className="text-zinc-800 leading-relaxed">
                {about.bio}
              </Markdown>

              <div className="pt-12 border-t border-forest/10">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-forest/40 mb-8 font-semibold text-center md:text-left">
                  Empresas e Projetos
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-12 md:gap-16 opacity-40 grayscale filter select-none items-center">
                  <div className="text-2xl font-display font-bold tracking-tighter">GRUBSTER</div>
                  <div className="text-2xl font-display font-bold tracking-tighter uppercase italic">ChefsClub</div>
                  <div className="text-2xl font-display font-bold tracking-tighter">TESORIO</div>
                  <div className="text-2xl font-display font-bold tracking-tighter">TUPI</div>
                </div>
                <div className="mt-4 text-[10px] font-mono text-zinc-400 italic">
                   *(SVGs em fase de coleta)*
                </div>
              </div>
            </div>

            <div className="pt-16 border-t border-forest/10">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-display text-forest mb-4">
                    {t.about.outsideTitle}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <Markdown className="text-zinc-800 leading-relaxed">
                    {about.outside}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center">
        <div className="content-container">
          <h2 className="text-4xl md:text-5xl mb-12 text-forest">{t.contact.finalTitle}</h2>
          <Link
            to="/contato"
            className="inline-block bg-forest text-sand px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform"
          >
            {t.contact.cta}
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="section-padding bg-white">
        <div className="content-container">
          <h2 className="text-3xl md:text-4xl mb-16 text-forest">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role[language]}
                text={testimonial.text[language]}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function OfferCard({ icon, name, anchor, description, format, cta, type }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl border border-forest/5 shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl mb-4 text-forest">{name}</h3>
      <p className="italic text-zinc-500 text-sm mb-4 leading-relaxed">{anchor}</p>
      <p className="text-zinc-700 leading-relaxed grow mb-6">{description}</p>
      <div className="pt-6 border-t border-forest/5 mb-6">
        <p className="text-xs uppercase font-mono tracking-widest text-forest/60 mb-2">Formato</p>
        <p className="font-medium">{format}</p>
      </div>
      <Link
        to={`/contato?tipo=${type}`}
        className="text-forest font-bold inline-flex items-center gap-2 group border-b-2 border-forest/20 pb-1 w-fit hover:border-forest transition-all"
      >
        {cta}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

interface CaseData {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  problem: string;
  action: string;
  result: string;
  stack: string;
}

function CaseCarousel({ cases, caseSections }: { cases: CaseData[]; caseSections: (slug: string) => { context: string; problem: string; action: string; result: string } }) {
  const [index, setIndex] = useState(0);
  const currentCase = cases[index];
  const sections = caseSections(currentCase.slug);

  const sectionKeys = ['context', 'problem', 'action', 'result'] as const;

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <motion.div
        key={`img-${index}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="aspect-video bg-sand/5 rounded-3xl overflow-hidden relative border border-sand/10 flex items-center justify-center md:sticky md:top-24"
      >
        <div className="text-sand/20 font-mono text-sm">[Case Image Placeholder]</div>
      </motion.div>
      <div>
        <div className="flex gap-2 mb-8">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-emerald-400' : 'w-4 bg-sand/20 hover:bg-sand/40'}`}
            />
          ))}
        </div>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl mb-4 leading-tight font-display text-sand">{currentCase.title}</h3>
          <p className="text-emerald-400 font-mono text-sm tracking-widest mb-10 uppercase">{currentCase.subtitle}</p>

          <div className="space-y-8 mb-10">
            {sectionKeys.map((key) => (
              <div key={key} className="border-l-2 border-emerald-400/30 pl-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-3 font-semibold">
                  {currentCase[key]}
                </h4>
                <p className="text-base md:text-lg text-sand/80 leading-relaxed">
                  {sections[key]}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm font-mono text-emerald-400/80 bg-sand/5 w-fit px-4 py-2 rounded-full border border-sand/10">
            <Code size={14} />
            {currentCase.stack}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200/50 flex flex-col group">
      <div className="bg-forest/10 w-12 h-12 rounded-full mb-6 group-hover:scale-110 transition-transform"></div>
      <p className="text-lg leading-relaxed text-zinc-700 italic grow mb-6">"{text}"</p>
      <div>
        <p className="font-display font-bold text-forest">{name}</p>
        <p className="text-sm text-zinc-500">{role}</p>
      </div>
    </div>
  );
}
