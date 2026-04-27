import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../hooks/useContent';

interface CaseData {
  slug: string;
  title: string;
  subtitle: string;
  tab: string;
  context: string;
  problem: string;
  action: string;
  result: string;
  stack: string;
}

export default function CasePanel({ cases }: { cases: CaseData[] }) {
  const { language, t } = useLanguage();
  const { caseSections } = useContent();
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const currentCase = cases[activeIndex];
  const sections = caseSections(currentCase.slug);
  const sectionKeys = ['context', 'problem', 'action', 'result'] as const;
  const stackTags = currentCase.stack.split(',');

  const coverArt: Record<string, Record<string, string[]>> = {
    data360: { en: ['chainlit', 'fastmcp', 'postgres'], pt: ['chainlit', 'fastmcp', 'postgres'] },
    tupi: { en: ['12 agents', 'mcp servers', 'github actions'], pt: ['12 agentes', 'mcp servers', 'github actions'] },
  };

  function switchCase(index: number) {
    setActiveIndex(index);
    const panel = panelRef.current;
    if (panel) {
      panel.style.opacity = '0';
      panel.style.transform = 'translateY(6px)';
      setTimeout(() => {
        panel.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        panel.style.opacity = '1';
        panel.style.transform = 'none';
      }, 30);
    }
  }

  const subtitleLabel = activeIndex === 0 ? t.cases.subtitleLabel : t.cases.subtitleLabel.replace('01', '02');
  const screenshotText = language === 'pt' ? 'placeholder · screenshot do produto' : 'placeholder · product screenshot';

  return (
    <div className="grid gap-9 items-start max-[900px]:!grid-cols-1" style={{ gridTemplateColumns: '220px 1fr' }}>
      {/* Tabs */}
      <div
        className="flex flex-col gap-1 max-[900px]:flex-row max-[900px]:overflow-x-auto max-[900px]:pb-2"
        style={{ borderLeft: '1px solid var(--color-hair)', paddingLeft: 0 }}
        role="tablist"
      >
        {cases.map((c, i) => (
          <button
            key={c.slug}
            role="tab"
            onClick={() => switchCase(i)}
            className="text-left py-3 px-4 -ml-px text-[13px] leading-[1.4] flex flex-col gap-1 min-w-[200px] transition-all duration-200"
            style={{
              borderLeft: `2px solid ${i === activeIndex ? 'var(--color-forest)' : 'transparent'}`,
              color: i === activeIndex ? 'var(--color-forest)' : 'var(--color-ink-2)',
              background: i === activeIndex ? 'color-mix(in oklab, var(--color-live-soft) 30%, transparent)' : 'transparent',
            }}
          >
            <span className="font-mono text-[10px] text-muted tracking-[0.04em] uppercase">{c.subtitle}</span>
            <span className="font-medium">{c.tab}</span>
          </button>
        ))}
      </div>

      {/* Panel */}
      <div ref={panelRef} className="bg-paper rounded-[20px] overflow-hidden reveal" style={{ border: '1px solid var(--color-hair)' }}>
        {/* Cover */}
        <div
          className="h-[220px] relative overflow-hidden flex items-end p-[22px_26px]"
          style={{ background: 'linear-gradient(135deg, var(--color-forest) 0%, var(--color-forest-2) 100%)', color: '#e7eee9' }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse 70% 70% at 70% 30%, #000, transparent 80%)',
            }}
          />
          {/* Glow */}
          <div
            className="absolute -right-10 -top-10 w-[220px] h-[220px] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(circle, color-mix(in oklab, var(--color-live) 80%, transparent), transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
          {/* Cover tag */}
          <div
            className="absolute top-[18px] left-[22px] font-mono text-[11px] tracking-[0.06em] uppercase"
            style={{ color: 'color-mix(in oklab, var(--color-live) 80%, white)' }}
          >
            {subtitleLabel}
          </div>
          {/* Title */}
          <h3 className="relative m-0 font-medium text-[clamp(22px,2.2vw,30px)] -tracking-[0.02em] max-w-[80%]" style={{ textWrap: 'balance' }}>
            {currentCase.title}
          </h3>
          {/* Cover art */}
          <div className="absolute right-6 bottom-[22px] font-mono text-[11px] text-right leading-[1.6]" style={{ color: '#ffffffaa' }}>
            {(coverArt[currentCase.slug]?.[language] || []).map((line, i) => (
              <span key={i}>
                {line}
                {i < (coverArt[currentCase.slug]?.[language]?.length || 0) - 1 && <br />}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-[28px_28px_30px] grid grid-cols-2 gap-[22px_30px] max-[720px]:grid-cols-1">
          {sectionKeys.map((key) => (
            <div key={key}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-forest m-0 mb-2">
                {currentCase[key]}
              </h4>
              <p className="m-0 text-ink-2 text-[12.5px] leading-[1.6]">
                {sections[key]}
              </p>
            </div>
          ))}

          {/* Screenshot placeholder */}
          <div
            className="col-span-full mt-1 rounded-xl flex items-center justify-center text-muted font-mono text-[11px] tracking-[0.14em] uppercase relative overflow-hidden"
            style={{
              aspectRatio: '16 / 9',
              border: '1px dashed var(--color-hair-strong)',
              background: 'linear-gradient(135deg, color-mix(in oklab, var(--color-live-soft) 60%, var(--color-paper)), color-mix(in oklab, var(--color-forest) 8%, var(--color-paper))), var(--color-paper)',
            }}
          >
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage: 'linear-gradient(color-mix(in oklab, var(--color-forest) 10%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--color-forest) 10%, transparent) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000, transparent 90%)',
              }}
            />
            <span className="relative z-[1]">{screenshotText}</span>
          </div>

          {/* Stack */}
          <div
            className="col-span-full mt-1.5 pt-[18px] flex flex-wrap gap-2 items-center"
            style={{ borderTop: '1px dashed var(--color-hair-strong)' }}
          >
            <span className="font-mono text-[10px] text-muted uppercase tracking-[0.16em] mr-1.5">Stack</span>
            {stackTags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] py-1 px-2.5 rounded-full text-ink-2"
                style={{
                  border: '1px solid var(--color-hair-strong)',
                  background: 'color-mix(in oklab, var(--color-live-soft) 25%, transparent)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
