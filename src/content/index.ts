import type { Language } from '../translations';

const modules = import.meta.glob('./**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

type ContentMap = Record<string, Record<Language, string>>;

function buildContentMap(): ContentMap {
  const map: ContentMap = {};

  for (const [path, raw] of Object.entries(modules)) {
    const match = path.match(/^\.\/(.+?)\/(.+?)\.(pt|en)\.md$/);
    if (!match) continue;

    const [, dir, slugRaw, lang] = match;
    const slug = slugRaw.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const key = `${dir}.${slug}`;

    if (!map[key]) map[key] = { pt: '', en: '' };
    map[key][lang as Language] = raw;
  }

  return map;
}

const contentMap = buildContentMap();

export type ContentKey = 'about.narrative' | 'cases.data360' | 'cases.tupi';

export function getContent(key: ContentKey, language: Language): string {
  const entry = contentMap[key];
  if (!entry) {
    console.warn(`[content] Missing key: ${key}`);
    return '';
  }
  return entry[language] || entry.pt || '';
}

function parseSections(raw: string): Record<string, string> {
  const sections: Record<string, string> = {};
  const parts = raw.split(/^## (\w+)\s*$/m);
  for (let i = 1; i < parts.length; i += 2) {
    sections[parts[i].trim()] = parts[i + 1]?.trim() || '';
  }
  return sections;
}

interface CaseSections {
  context: string;
  problem: string;
  action: string;
  result: string;
}

export function getCaseSections(slug: string, language: Language): CaseSections {
  const raw = getContent(`cases.${slug}` as ContentKey, language);
  const parsed = parseSections(raw);
  return {
    context: parsed.context || '',
    problem: parsed.problem || '',
    action: parsed.action || '',
    result: parsed.result || '',
  };
}

interface AboutSections {
  bio: string;
  outside: string;
}

export function getAboutSections(language: Language): AboutSections {
  const parsed = parseSections(getContent('about.narrative', language));
  return {
    bio: parsed.bio || '',
    outside: parsed.outside || '',
  };
}
