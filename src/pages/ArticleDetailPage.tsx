import React, { useState } from 'react';
import {
  Clock,
  Bookmark,
  Share2,
  ChevronLeft,
  ArrowRight,
  Check,
  Eye,
  Calendar,
  Layers,
  FileText,
} from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { CodeBlock } from '../components/CodeBlock';
import { ArticleCard } from '../components/ArticleCard';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { AuthorAvatar } from '../components/DepartmentIcons';
import { useRouter } from '../context/RouterContext';

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  const { navigate, isSaved, toggleSaveSlug } = useRouter();
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState<'text-base' | 'text-lg'>('text-base');

  const article = ARTICLES.find((a) => a.slug === slug) || ARTICLES[0];
  const category = CATEGORIES.find((c) => c.id === article.category);
  const saved = isSaved(article.slug);

  const relatedArticles = ARTICLES.filter(
    (a) =>
      article.relatedSlugs?.includes(a.slug) ||
      (a.category === article.category && a.id !== article.id)
  ).slice(0, 2);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      // clipboard fallback
    }
  };

  const headings = article.sections
    .filter((s) => s.type === 'heading-2' && s.text)
    .map((s) => s.text as string);

  return (
    <article className="relative">
      <ReadingProgressBar />

      {/* Top Breadcrumb Navigation */}
      <div className="pb-6 mb-8 border-b border-slate-200 dark:border-[#222631] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <button
          onClick={() => navigate('/articles')}
          className="flex items-center gap-1.5 font-semibold hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/categories/${article.category}`)}
            className="text-[#2563EB] dark:text-[#4F8CFF] font-semibold hover:underline cursor-pointer"
          >
            {category?.name || article.category}
          </button>
          <span aria-hidden="true">/</span>
          <span className="truncate max-w-[200px] text-slate-500 dark:text-slate-400">
            {article.title}
          </span>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span className="text-[#2563EB] dark:text-[#4F8CFF] uppercase font-bold tracking-wider text-[11px]">
            {category?.shortName || 'Research Report'}
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 tabular-nums">
            <Calendar className="w-3 h-3" />
            {article.publishedAt}
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 tabular-nums">
            <Clock className="w-3 h-3" />
            {article.readTimeMinutes} min read
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 tabular-nums">
            <Eye className="w-3 h-3" />
            {article.stats.views.toLocaleString()} reads
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.15] text-balance">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-article italic leading-relaxed text-balance">
            {article.subtitle}
          </p>
        )}

        <div className="pt-6 border-t border-slate-200 dark:border-[#222631] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <AuthorAvatar
              initials={article.author.initials}
              name={article.author.name}
              size="md"
              accent
            />
            <div>
              <p className="text-sm font-bold text-[#2563EB] dark:text-[#4F8CFF]">
                {article.author.name}{' '}
                <span className="font-article italic font-normal text-slate-600 dark:text-slate-400">
                  wrote
                </span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {article.author.role} · {article.author.department}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] p-0.5 text-xs">
              <button
                onClick={() => setFontSizeClass('text-base')}
                className={`px-2.5 py-1 rounded cursor-pointer ${
                  fontSizeClass === 'text-base'
                    ? 'bg-slate-100 dark:bg-[#181B22] text-slate-900 dark:text-white font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                title="Normal font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeClass('text-lg')}
                className={`px-2.5 py-1 rounded cursor-pointer ${
                  fontSizeClass === 'text-lg'
                    ? 'bg-slate-100 dark:bg-[#181B22] text-slate-900 dark:text-white font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                title="Large font size"
              >
                A+
              </button>
            </div>

            <button
              onClick={() => toggleSaveSlug(article.slug)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                saved
                  ? 'bg-[#2563EB]/10 border-[#2563EB] text-[#2563EB] dark:bg-[#4F8CFF]/15 dark:border-[#4F8CFF] dark:text-[#4F8CFF]'
                  : 'border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              aria-label={saved ? 'Remove bookmark' : 'Bookmark this article'}
              title={saved ? 'Remove bookmark' : 'Bookmark this article'}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#181B22] transition-colors cursor-pointer"
              title="Copy share link"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Link Copied
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden mb-12 border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs">
        {!imageError ? (
          <img
            src={article.coverImage}
            alt={article.coverImageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full max-h-[440px] object-cover"
          />
        ) : (
          <div className="h-64 flex flex-col items-center justify-center p-6 text-slate-500 dark:text-slate-400 gap-2">
            <FileText className="w-10 h-10 text-[#2563EB] dark:text-[#4F8CFF]" />
            <p className="text-sm font-semibold">{article.title}</p>
          </div>
        )}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-[#111318] border-t border-slate-200 dark:border-[#222631] text-xs text-slate-500 dark:text-slate-400 font-article italic flex items-center justify-between gap-4">
          <span>{article.coverImageAlt}</span>
          <span className="font-mono text-[11px] not-italic uppercase">Archive #{article.id}</span>
        </div>
      </div>

      {/* Reading Column & Table of Contents */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          {article.sections.map((sec, idx) => {
            if (sec.type === 'paragraph') {
              const isFirst = idx === 0;
              return (
                <p
                  key={idx}
                  className={`font-article leading-relaxed text-slate-800 dark:text-slate-200 ${fontSizeClass} ${
                    isFirst
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#2563EB] dark:first-letter:text-[#4F8CFF] first-letter:leading-none'
                      : ''
                  }`}
                >
                  {sec.text}
                </p>
              );
            }

            if (sec.type === 'heading-2') {
              return (
                <h2
                  key={idx}
                  id={`sec-${idx}`}
                  className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 pt-6 pb-2 border-b border-slate-200 dark:border-[#222631] scroll-mt-24"
                >
                  {sec.text}
                </h2>
              );
            }

            if (sec.type === 'heading-3') {
              return (
                <h3
                  key={idx}
                  className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 pt-4"
                >
                  {sec.text}
                </h3>
              );
            }

            if (sec.type === 'code' && sec.codeSnippet) {
              return <CodeBlock key={idx} snippet={sec.codeSnippet} />;
            }

            if (sec.type === 'callout') {
              return (
                <div
                  key={idx}
                  className="my-6 p-5 rounded-xl border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-article leading-relaxed shadow-xs"
                >
                  <p className="font-semibold text-[#2563EB] dark:text-[#4F8CFF] mb-1 font-sans">
                    Key Architectural Takeaway
                  </p>
                  <p>{sec.text}</p>
                </div>
              );
            }

            if (sec.type === 'pull-quote') {
              return (
                <blockquote
                  key={idx}
                  className="my-8 py-5 border-y border-slate-200 dark:border-[#222631] text-center px-4"
                >
                  <p className="text-lg sm:text-xl font-article italic font-medium text-slate-900 dark:text-slate-100 leading-relaxed text-balance">
                    &ldquo;{sec.text}&rdquo;
                  </p>
                  {sec.authorQuote && (
                    <footer className="mt-2 text-xs font-sans text-slate-500 dark:text-slate-400 font-semibold tracking-wide uppercase">
                      — {sec.authorQuote}
                    </footer>
                  )}
                </blockquote>
              );
            }

            return null;
          })}

          {/* Unboxed Topic Classifications */}
          <div className="pt-8 border-t border-slate-200 dark:border-[#222631]">
            <p className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Topic Classifications
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-700 dark:text-slate-300">
              {article.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {idx < article.tags.length - 1 && (
                    <span aria-hidden="true" className="text-slate-400">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Author Biography */}
          <section className="mt-10 p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-4">
              About the Author
            </h3>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <AuthorAvatar
                initials={article.author.initials}
                name={article.author.name}
                size="lg"
                accent
              />
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {article.author.name}
                </h4>
                <p className="text-xs text-[#2563EB] dark:text-[#4F8CFF] font-semibold">
                  {article.author.role} · {article.author.batchOrDesignation}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-article leading-relaxed pt-1">
                  {article.author.bio}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                  Affiliation: {article.author.department}, Government Graduate College Jhang
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Rail: Table of Contents & Citation */}
        <aside className="hidden lg:block lg:col-span-4 space-y-6">
          {headings.length > 0 && (
            <div className="sticky top-28 p-5 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#4F8CFF]" />
                <span>Article Structure</span>
              </h4>
              <nav className="space-y-2 text-xs">
                {headings.map((heading, hIdx) => (
                  <a
                    key={hIdx}
                    href={`#sec-${hIdx}`}
                    className="block text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors leading-snug"
                  >
                    {heading}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#222631] text-[11px] text-slate-500 space-y-2">
                <p className="font-semibold text-slate-700 dark:text-slate-300">
                  Citation Format (BibTeX):
                </p>
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#181B22] font-mono text-[10px] text-slate-700 dark:text-slate-300 overflow-x-auto">
                  @article&#123;ggc_{article.slug.replace(/-/g, '_')},<br />
                  &nbsp;&nbsp;author = &#123;{article.author.name}&#125;,<br />
                  &nbsp;&nbsp;title = &#123;{article.title}&#125;,<br />
                  &nbsp;&nbsp;journal = &#123;GGC Jhang CS Gazette&#125;,<br />
                  &nbsp;&nbsp;year = &#123;2026&#125;<br />
                  &#125;
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Related Publications */}
      {relatedArticles.length > 0 && (
        <section className="mt-16 pt-10 border-t border-slate-200 dark:border-[#222631] max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Related Publications in This Track
            </h3>
            <button
              onClick={() => navigate(`/categories/${article.category}`)}
              className="text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View Track Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
