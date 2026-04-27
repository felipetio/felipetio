import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../hooks/useContent';

export default function Sidekick() {
  const { t } = useLanguage();
  const { aboutSections } = useContent();
  const about = aboutSections();

  const facts = [
    { k: t.about.f5k, v: t.about.f5v, s: t.about.f5s },
    { k: t.about.f1k, v: t.about.f1v, s: t.about.f1s },
    { k: t.about.f2k, v: t.about.f2v, s: t.about.f2s },
    { k: t.about.f3k, v: t.about.f3v, s: t.about.f3s },
    { k: t.about.f4k, v: t.about.f4v, s: t.about.f4s },
  ];

  return (
    <aside
      className="rounded-2xl p-[22px] bg-paper flex flex-col gap-[18px] sticky top-20"
      style={{ border: '1px solid var(--color-hair)' }}
    >
      <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted m-0">
        {t.about.facts}
      </h4>
      <ul className="list-none p-0 m-0 flex flex-col" style={{ borderTop: '1px solid var(--color-hair)' }}>
        {facts.map((f) => (
          <li
            key={f.k}
            className="grid gap-3.5 py-2.5 text-[13px] text-ink-2"
            style={{
              gridTemplateColumns: '90px 1fr',
              borderBottom: '1px solid var(--color-hair)',
            }}
          >
            <span className="font-mono text-[11px] text-muted uppercase tracking-[0.06em]">{f.k}</span>
            <span className="text-ink">
              {f.v}
              <small className="block text-muted text-[11px] mt-0.5">{f.s}</small>
            </span>
          </li>
        ))}
      </ul>

      <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted m-0 mt-2">
        {t.about.outsideTitle}
      </h4>
      <div className="text-[13.5px] text-ink-2 leading-[1.65] [&_p]:m-0 [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:opacity-70">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {about.outside}
        </ReactMarkdown>
      </div>
    </aside>
  );
}
