import React, { useState } from 'react';
import { Bookmark, ArrowUpRight, FileText } from 'lucide-react';
import { Article } from '../types/magazine';
import { useRouter } from '../context/RouterContext';
import { AuthorAvatar } from './DepartmentIcons';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  compact?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  featured = false,
  compact = false,
}) => {
  const { navigate, isSaved, toggleSaveSlug } = useRouter();
  const [imageError, setImageError] = useState(false);
  const saved = isSaved(article.slug);

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    navigate(`/articles/${article.slug}`);
  };

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/categories/${article.category}`);
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSaveSlug(article.slug);
  };

  if (compact) {
    return (
      <article
        onClick={handleCardClick}
        className="group py-3.5 border-b border-slate-200 dark:border-[#222631] cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
          <button
            onClick={handleCategoryClick}
            className="text-[#2563EB] dark:text-[#4F8CFF] font-semibold hover:underline text-left cursor-pointer whitespace-nowrap"
          >
            {article.tags[0] || 'Computing'}
          </button>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{article.readTimeMinutes} min read</span>
        </div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] transition-colors leading-snug">
          {article.title}
        </h4>
        <div className="flex items-center justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-article">
            {article.author.name} <em className="text-slate-400 not-italic font-sans">wrote</em>
          </span>
          <span className="text-[11px] font-mono tabular-nums">{article.publishedAt}</span>
        </div>
      </article>
    );
  }

  if (featured) {
    return (
      <article
        onClick={handleCardClick}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/60 dark:hover:border-[#4F8CFF]/70 shadow-xs hover:shadow-lg dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)] transition-all duration-200 cursor-pointer"
      >
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#4F8CFF] mb-4">
              <span>Featured Monograph</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                {article.readTimeMinutes} min read
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] transition-colors leading-[1.16] mb-4 text-balance">
              {article.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-article line-clamp-3">
              <span className="text-xs uppercase tracking-wider font-sans font-semibold text-slate-500 dark:text-slate-400">
                {article.publishedAt.toUpperCase()} —
              </span>{' '}
              {article.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-200/80 dark:border-[#222631]">
            <div className="flex items-center gap-3">
              <AuthorAvatar
                initials={article.author.initials}
                name={article.author.name}
                size="md"
                accent
              />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {article.author.name}{' '}
                  <span className="font-article italic font-normal text-slate-500 dark:text-slate-400">
                    wrote
                  </span>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {article.author.role} · {article.author.batchOrDesignation || 'GGC Jhang'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleSaveClick}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  saved
                    ? 'bg-[#2563EB]/10 border-[#2563EB] text-[#2563EB] dark:bg-[#4F8CFF]/15 dark:border-[#4F8CFF] dark:text-[#4F8CFF]'
                    : 'border-slate-200 dark:border-[#222631] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
                aria-label={saved ? 'Remove bookmark' : 'Bookmark publication'}
                title={saved ? 'Remove bookmark' : 'Bookmark publication'}
              >
                <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
              </button>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF]">
                Read Article <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative rounded-xl overflow-hidden min-h-[250px] lg:h-full bg-slate-100 dark:bg-[#181B22] flex items-center justify-center border border-slate-200/80 dark:border-[#222631]">
          {!imageError ? (
            <img
              src={article.coverImage}
              alt={article.coverImageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            />
          ) : (
            <div className="p-6 text-center space-y-2 text-slate-500 dark:text-slate-400">
              <FileText className="w-8 h-8 mx-auto text-[#2563EB] dark:text-[#4F8CFF]" />
              <p className="text-xs font-semibold">{article.title}</p>
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={handleCardClick}
      className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/60 dark:hover:border-[#4F8CFF]/70 shadow-xs hover:shadow-md dark:hover:shadow-[0_10px_28px_rgba(0,0,0,0.4)] transition-all duration-200 cursor-pointer"
    >
      <div>
        {/* Editorial 16:9 Media Header */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-[#181B22] border-b border-slate-200/80 dark:border-[#222631]">
          {!imageError ? (
            <img
              src={article.coverImage}
              alt={article.coverImageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-slate-400">
              <FileText className="w-7 h-7 text-[#2563EB] dark:text-[#4F8CFF] mb-1" />
              <span className="text-[11px] font-medium line-clamp-1">{article.title}</span>
            </div>
          )}
        </div>

        <div className="p-6 pb-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
            <button
              onClick={handleCategoryClick}
              className="font-bold text-[#2563EB] dark:text-[#4F8CFF] hover:underline cursor-pointer whitespace-nowrap"
            >
              {article.tags[0]}
            </button>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{article.readTimeMinutes} min read</span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] transition-colors leading-snug mb-2.5 text-balance">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-article">
            <span className="text-[11px] uppercase tracking-wider font-sans font-semibold text-slate-500 dark:text-slate-400">
              {article.publishedAt.toUpperCase()} —
            </span>{' '}
            {article.summary}
          </p>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-slate-200/80 dark:border-[#222631] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <AuthorAvatar
            initials={article.author.initials}
            name={article.author.name}
            size="sm"
            accent
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
              {article.author.name}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
              {article.author.role}
            </p>
          </div>
        </div>

        <button
          onClick={handleSaveClick}
          className={`p-1.5 rounded-lg border transition-colors cursor-pointer shrink-0 ${
            saved
              ? 'bg-[#2563EB]/10 border-[#2563EB] text-[#2563EB] dark:bg-[#4F8CFF]/15 dark:border-[#4F8CFF] dark:text-[#4F8CFF]'
              : 'border-slate-200 dark:border-[#222631] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
          }`}
          aria-label={saved ? 'Remove bookmark' : 'Bookmark publication'}
          title={saved ? 'Remove bookmark' : 'Bookmark publication'}
        >
          <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
        </button>
      </div>
    </article>
  );
};
