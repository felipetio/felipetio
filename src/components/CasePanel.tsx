import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../hooks/useContent';
import type { CaseEntry } from '../translations';

export default function CasePanel({ cases }: { cases: readonly CaseEntry[] }) {
  const { t } = useLanguage();
  const { caseSections } = useContent();
  const [activeIndex, setActiveIndex] = useState(0);

  const currentCase = cases[activeIndex];
  const sections = caseSections(currentCase.slug);
  const sectionLabels = t.cases.sectionLabels;
  const sectionKeys = ['context', 'problem', 'action', 'result'] as const;
  const stackTags = currentCase.stack.split(',');
  const subtitleLabel = `// ${t.cases.caseLabel} · ${String(activeIndex + 1).padStart(2, '0')}`;

  return (
    <div className="grid gap-9 items-start max-[900px]:!grid-cols-1" style={{ gridTemplateColumns: '220px 1fr' }}>
      {/* Tabs */}
      <div
        className="flex flex-col gap-1 max-[900px]:flex-row max-[900px]:overflow-x-auto max-[900px]:pb-2"
        style={{ borderLeft: '1px solid var(--color-hair)' }}
        role="tablist"
      >
        {cases.map((c, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={c.slug}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(i)}
              className="text-left py-3 px-4 -ml-px text-[13px] leading-[1.4] flex flex-col gap-1 min-w-[200px] transition-all duration-200"
              style={{
                borderLeft: `2px solid ${isActive ? 'var(--color-forest)' : 'transparent'}`,
                color: isActive ? 'var(--color-forest)' : 'var(--color-ink-2)',
                background: isActive ? 'color-mix(in oklab, var(--color-live-soft) 30%, transparent)' : 'transparent',
              }}
            >
              <span className="font-mono text-[10px] text-muted tracking-[0.04em] uppercase">{c.subtitle}</span>
              <span className="font-medium">{c.tab}</span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <motion.div
        key={currentCase.slug}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="bg-paper rounded-[20px] overflow-hidden reveal"
        style={{ border: '1px solid var(--color-hair)' }}
      >
        {/* Cover */}
        <div
          className="h-[220px] relative overflow-hidden flex items-end p-[22px_26px]"
          style={{ background: 'linear-gradient(135deg, var(--color-forest) 0%, var(--color-forest-2) 100%)', color: '#e7eee9' }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse 70% 70% at 70% 30%, #000, transparent 80%)',
            }}
          />
          <div
            className="absolute -right-10 -top-10 w-[220px] h-[220px] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(circle, color-mix(in oklab, var(--color-live) 80%, transparent), transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
          <div
            className="absolute top-[18px] left-[22px] font-mono text-[11px] tracking-[0.06em] uppercase"
            style={{ color: 'color-mix(in oklab, var(--color-live) 80%, white)' }}
          >
            {subtitleLabel}
          </div>
          <h3 className="relative m-0 font-medium text-[clamp(22px,2.2vw,30px)] -tracking-[0.02em] max-w-[80%]" style={{ textWrap: 'balance' }}>
            {currentCase.title}
          </h3>
        </div>

        {/* Body */}
        <div className="p-[28px_28px_30px] grid grid-cols-2 gap-[22px_30px] max-[720px]:grid-cols-1">
          {sectionKeys.map((key) => (
            <div key={key}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-forest m-0 mb-2">
                {sectionLabels[key]}
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
            <span className="relative z-[1]">{t.cover.placeholder}</span>
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
      </motion.div>
    </div>
  );
}
