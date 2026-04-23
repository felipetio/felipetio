import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="py-12 border-t border-forest/10 bg-sand">
      <div className="content-container flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Felipe Vieira · {t.footer.lastUpdate}
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-sm font-medium">
             <a href="https://linkedin.com" className="hover:text-forest">LinkedIn</a>
             <a href="https://github.com" className="hover:text-forest">GitHub</a>
          </div>
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="text-[10px] font-mono border border-forest/20 px-2 py-0.5 rounded hover:bg-forest hover:text-sand transition-all uppercase"
          >
            {language === 'pt' ? 'English' : 'Português'}
          </button>
        </div>
      </div>
    </footer>
  );
}
