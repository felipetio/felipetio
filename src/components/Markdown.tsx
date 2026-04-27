import ReactMarkdown, { type Components } from 'react-markdown';

interface MarkdownProps {
  children: string;
  className?: string;
  /** When true, link variant only — drops the prose wrapper, opens links in a new tab. */
  externalLinks?: boolean;
}

const externalLinkComponents: Components = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

export default function Markdown({ children, className, externalLinks }: MarkdownProps) {
  if (externalLinks) {
    return (
      <div className={className}>
        <ReactMarkdown components={externalLinkComponents}>{children}</ReactMarkdown>
      </div>
    );
  }

  return (
    <div className={`prose prose-lg prose-zinc max-w-none ${className ?? ''}`}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
