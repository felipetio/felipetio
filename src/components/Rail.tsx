import { useScrollSpy } from '../hooks/useScrollSpy';

const sections = [
  { id: 'top', label: 'top' },
  { id: 'offers', label: 'offers' },
  { id: 'cases', label: 'portfolio' },
  { id: 'about', label: 'about' },
  { id: 'words', label: 'testimonials' },
  { id: 'contact', label: 'contact' },
];

const sectionIds = sections.map((s) => s.id);

export default function Rail() {
  const active = useScrollSpy(sectionIds);

  return (
    <div
      className="fixed right-[18px] top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3.5 max-[900px]:hidden"
      aria-hidden="true"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="relative w-2 h-2 rounded-full transition-all duration-200 group"
          style={{
            background: active === s.id ? 'var(--color-forest)' : 'var(--color-hair-strong)',
            transform: active === s.id ? 'scale(1.2)' : 'scale(1)',
          }}
        >
          <span
            className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 font-mono text-[10px] text-muted whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-paper px-1.5 py-0.5 rounded border"
            style={{ borderColor: 'var(--color-hair)' }}
          >
            {s.label}
          </span>
        </a>
      ))}
    </div>
  );
}
