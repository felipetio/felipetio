import { useLanguage } from '../context/LanguageContext';
import { getContent, getCaseSections, getAboutSections, type ContentKey } from '../content';

export function useContent() {
  const { language } = useLanguage();

  return {
    content: (key: ContentKey) => getContent(key, language),
    caseSections: (slug: string) => getCaseSections(slug, language),
    aboutSections: () => getAboutSections(language),
  };
}
