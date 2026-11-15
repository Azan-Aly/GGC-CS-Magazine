import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';

export const ArticlesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'views' | 'readTime'>('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredAndSortedArticles = useMemo(() => {
    let result = [...ARTICLES];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.author.name.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((a) => a.category === selectedCategory);
    }

    if (sortBy === 'views') {
      result.sort((a, b) => b.stats.views - a.stats.views);
    } else if (sortBy === 'readTime') {
      result.sort((a, b) => b.readTimeMinutes - a.readTimeMinutes);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedArticles.length / itemsPerPage) || 1;
  const paginatedArticles = filteredAndSortedArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('latest');
    setCurrentPage(1);
  };

  return (
    <div className="space-y-10">
      <div className="pb-8 border-b border-slate-200 dark:border-[#222631]">
        <p className="text-xs uppercase font-mono tracking-widest text-[#2563EB] dark:text-[#4F8CFF] font-bold mb-1 tabular-nums">
          {ARTICLES.length} Articles &amp; Research Papers
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
          Articles
        </h1>

        <div className="space-y-3">
          <p className="font-article italic text-sm text-slate-600 dark:text-slate-400">
            Filter by research track:
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer border whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#2563EB] dark:bg-[#4F8CFF] text-white border-transparent'
                  : 'bg-white dark:bg-[#111318] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-[#222631] hover:border-[#2563EB] dark:hover:border-[#4F8CFF]'
              }`}
            >
              All Topics ({ARTICLES.length})
            </button>

            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer border whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#2563EB] dark:bg-[#4F8CFF] text-white border-transparent'
                      : 'bg-white dark:bg-[#111318] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-[#222631] hover:border-[#2563EB] dark:hover:border-[#4F8CFF]'
                  }`}
                >
                  {cat.shortName}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search across title, author, code, or tags..."
            className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              aria-label="Clear query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 dark:text-slate-400 font-medium">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'latest' | 'views' | 'readTime')}
            className="py-2 px-3 rounded-lg border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
          >
            <option value="latest">Latest Publications</option>
            <option value="views">Most Read</option>
            <option value="readTime">In-Depth Longform</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 tabular-nums">
        <span>
          Showing <strong>{paginatedArticles.length}</strong> of{' '}
          <strong>{filteredAndSortedArticles.length}</strong> articles
        </span>
        {(searchQuery || selectedCategory !== 'all') && (
          <button
            onClick={handleClearFilters}
            className="text-[#2563EB] dark:text-[#4F8CFF] font-semibold hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {filteredAndSortedArticles.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-[#222631] bg-white dark:bg-[#111318]">
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
            No publications found matching your criteria.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto font-article">
            Try adjusting your search terms or select another research track.
          </p>
          <button
            onClick={handleClearFilters}
            className="mt-4 px-4 py-2 text-xs font-bold text-white bg-[#2563EB] dark:bg-[#4F8CFF] rounded-lg cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="pt-8 border-t border-slate-200 dark:border-[#222631] flex items-center justify-between">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#181B22] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Page</span>
          </button>

          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#181B22] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <span>Next Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
