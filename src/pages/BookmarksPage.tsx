import React from 'react';
import { Bookmark } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { useRouter } from '../context/RouterContext';

export const BookmarksPage: React.FC = () => {
  const { savedSlugs, navigate } = useRouter();

  const savedArticles = ARTICLES.filter((a) => savedSlugs.includes(a.slug));

  return (
    <div className="space-y-10">
      <div className="pb-6 border-b border-slate-200 dark:border-[#222631]">
        <div className="text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF] uppercase tracking-wider mb-2">
          Personal Reading Archive
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-2 tabular-nums">
          Saved Publications ({savedArticles.length})
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 font-article max-w-2xl leading-relaxed">
          Articles and student project monographs you have bookmarked for reference, literature reviews, or later reading.
        </p>
      </div>

      {savedArticles.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-[#222631] bg-white dark:bg-[#111318] space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-[#181B22] text-slate-500 dark:text-slate-400 mx-auto flex items-center justify-center">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            No saved articles yet
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto font-article">
            Select the bookmark icon on any article card or detail page to curate your reading list.
          </p>
          <button
            onClick={() => navigate('/articles')}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg cursor-pointer transition-colors"
          >
            Browse All Publications
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {savedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};
