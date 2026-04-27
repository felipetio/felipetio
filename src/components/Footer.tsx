import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="shell font-mono text-[11px] text-muted"
      style={{
        padding: '28px clamp(20px, 4vw, 56px) 60px',
        borderTop: '1px solid var(--color-hair)',
        marginTop: '24px',
      }}
    >
      <div className="flex justify-between gap-4 flex-wrap">
        <div>// {t.footer.tagline}</div>
        <div>{t.footer.lastUpdate}</div>
      </div>
    </footer>
  );
}
