import { useLanguage } from '../context/LanguageContext';
import { getContent, getAboutSections, type ContentKey } from '../content';

export function useContent() {
  const { language } = useLanguage();

  return {
    content: (key: ContentKey) => getContent(key, language),
    aboutSections: () => getAboutSections(language),
  };
}
