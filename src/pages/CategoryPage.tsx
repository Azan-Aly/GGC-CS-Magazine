import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { CATEGORIES, ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { useRouter } from '../context/RouterContext';

interface CategoryPageProps {
  tag: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ tag }) => {
  const { navigate } = useRouter();

  const currentCategory =
    CATEGORIES.find((c) => c.slug === tag || c.id === tag) || CATEGORIES[0];
  const articlesInCat = ARTICLES.filter((a) => a.category === currentCategory.id);

  return (
    <div className="space-y-12">
      <div className="pb-8 border-b border-slate-200 dark:border-[#222631]">
        <button
          onClick={() => navigate('/articles')}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors mb-4 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>All Publications</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#4F8CFF] mb-1 tabular-nums">
              <span>Department Track</span>
              <span aria-hidden="true">·</span>
              <span>{articlesInCat.length} Articles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              {currentCategory.name}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-article mt-2 max-w-2xl leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </div>

        {/* Category Segmented Navigation */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => {
            const isCurrent = cat.id === currentCategory.id;
            return (
              <button
                key={cat.id}
                onClick={() => navigate(`/categories/${cat.slug}`)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer border shrink-0 ${
                  isCurrent
                    ? 'bg-[#2563EB] dark:bg-[#4F8CFF] text-white border-transparent'
                    : 'border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] text-slate-700 dark:text-slate-300 hover:border-[#2563EB] dark:hover:border-[#4F8CFF]'
                }`}
              >
                {cat.shortName}
              </button>
            );
          })}
        </div>
      </div>

      {articlesInCat.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-[#222631] bg-white dark:bg-[#111318]">
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
            No papers in this track yet.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Student submissions for this track are currently undergoing peer review.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesInCat.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Have research to share in {currentCategory.shortName}?
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-article mt-0.5">
            BS Computer Science scholars and faculty researchers are invited to submit papers for the upcoming issue.
          </p>
        </div>
        <button
          onClick={() => navigate('/about')}
          className="px-4 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg cursor-pointer whitespace-nowrap transition-colors"
        >
          View Submission Criteria
        </button>
      </div>
    </div>
  );
};
