import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const STACK_LINES = [
  'typescript · python · django',
  'postgres · fastapi · claude · mcp',
];

const FOCUS_LINES = [
  'climate-tech   energy   mobility',
  'agroforestry   ai-enablement',
];

export default function Terminal() {
  const { t } = useLanguage();
  const cta = t.terminal.cta;
  const [typed, setTyped] = useState('');

  useEffect(() => {
    setTyped('');
    let ci = 0;
    const id = setInterval(() => {
      ci += 1;
      setTyped(cta.slice(0, ci));
      if (ci >= cta.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, [cta]);

  return (
    <div
      className="rounded-2xl p-4 pb-5 font-mono text-[13px] leading-[1.7] relative overflow-hidden"
      style={{
        background: 'var(--color-forest-2)',
        color: '#e7eee9',
        boxShadow: '0 30px 60px -30px #0e3a2c40, 0 1px 0 #ffffff14 inset',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(120% 60% at 0% 0%, #ffffff10, transparent 60%)' }}
      />

      <div className="flex items-center gap-2 -mt-1 -mx-1 mb-3 pb-2.5 relative" style={{ borderBottom: '1px solid #ffffff1f' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff7a72b3' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffd86bb3' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#7ee3a4b3' }} />
        <span className="ml-auto text-[11px]" style={{ color: '#ffffff70' }}>~/felipet.io</span>
      </div>

      <div className="relative">
        <Prompt cmd="whoami" />
        <div className="whitespace-pre-wrap">
          <span className="text-white">{t.terminal.whoami}</span>{' '}
          <span style={{ color: '#ffffff60' }}>{t.terminal.whoamiNote}</span>
        </div>

        <Prompt cmd="cat" arg="stack.txt" />
        {STACK_LINES.map((line) => (
          <div key={line} className="whitespace-pre-wrap text-white">{line}</div>
        ))}

        <Prompt cmd="ls" arg={t.terminal.focusLabel} />
        {FOCUS_LINES.map((line) => (
          <div key={line} className="whitespace-pre-wrap text-white">{line}</div>
        ))}

        <div className="whitespace-pre-wrap mt-2">
          <span style={{ color: 'var(--color-live)' }}>$</span>{' '}
          <span className="text-white">{typed}</span>
          <span
            className="ml-px"
            style={{ color: 'var(--color-live)', animation: 'blink 1s steps(1) infinite' }}
            aria-hidden="true"
          >
            ▍
          </span>
        </div>
      </div>
    </div>
  );
}

function Prompt({ cmd, arg }: { cmd: string; arg?: string }) {
  return (
    <div className="whitespace-pre-wrap mt-2 first:mt-0">
      <span style={{ color: 'var(--color-live)' }}>$</span>{' '}
      <span style={{ color: '#c2e8d2' }}>{cmd}</span>
      {arg && (
        <>
          {' '}
          <span className="text-white">{arg}</span>
        </>
      )}
    </div>
  );
}
