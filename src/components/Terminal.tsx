import { useEffect, useState } from 'react';

const CTA = "Let's work together";

export default function Terminal() {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let ci = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      ci++;
      setTyped(CTA.slice(0, ci));
      if (ci < CTA.length) {
        timeout = setTimeout(tick, 60);
      }
    }

    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="rounded-2xl p-4 pb-5 font-mono text-[13px] leading-[1.7] relative overflow-hidden"
      style={{
        background: 'var(--color-forest-2)',
        color: '#e7eee9',
        boxShadow: '0 30px 60px -30px #0e3a2c40, 0 1px 0 #ffffff14 inset',
      }}
      aria-hidden="false"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(120% 60% at 0% 0%, #ffffff10, transparent 60%)',
        }}
      />

      {/* Title bar */}
      <div className="flex items-center gap-2 -mt-1 -mx-1 mb-3 pb-2.5 relative" style={{ borderBottom: '1px solid #ffffff1f' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff7a72b3' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffd86bb3' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#7ee3a4b3' }} />
        <span className="ml-auto text-[11px]" style={{ color: '#ffffff70' }}>~/felipet.io</span>
      </div>

      {/* Terminal content */}
      <div className="relative">
        <div className="whitespace-pre-wrap">
          <span style={{ color: 'var(--color-live)' }}>$</span>{' '}
          <span style={{ color: '#c2e8d2' }}>whoami</span>
        </div>
        <div className="whitespace-pre-wrap">
          <span className="text-white">felipe vieira</span>{' '}
          <span style={{ color: '#ffffff60' }}>// senior engineer, ex-co-founder</span>
        </div>
        <div className="whitespace-pre-wrap mt-2">
          <span style={{ color: 'var(--color-live)' }}>$</span>{' '}
          <span style={{ color: '#c2e8d2' }}>cat</span>{' '}
          <span className="text-white">stack.txt</span>
        </div>
        <div className="whitespace-pre-wrap text-white">typescript · python · django</div>
        <div className="whitespace-pre-wrap text-white">postgres · fastapi · claude · mcp</div>
        <div className="whitespace-pre-wrap mt-2">
          <span style={{ color: 'var(--color-live)' }}>$</span>{' '}
          <span style={{ color: '#c2e8d2' }}>ls</span>{' '}
          <span className="text-white"> focus/</span>
        </div>
        <div className="whitespace-pre-wrap text-white">climate-tech &nbsp; energy &nbsp; mobility</div>
        <div className="whitespace-pre-wrap text-white">agroforestry &nbsp; ai-enablement</div>
        <div className="whitespace-pre-wrap mt-2">
          <span style={{ color: 'var(--color-live)' }}>$</span>{' '}
          <span className="text-white">{typed}</span>
          <span
            className="ml-px"
            style={{
              color: 'var(--color-live)',
              animation: 'blink 1s steps(1) infinite',
            }}
          >
            ▍
          </span>
        </div>
      </div>
    </div>
  );
}
