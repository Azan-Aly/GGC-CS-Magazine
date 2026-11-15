import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { useRouter } from '../context/RouterContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered =
    query.trim() === ''
      ? []
      : ARTICLES.filter((art) => {
          const q = query.toLowerCase();
          return (
            art.title.toLowerCase().includes(q) ||
            art.summary.toLowerCase().includes(q) ||
            art.author.name.toLowerCase().includes(q) ||
            art.tags.some((t) => t.toLowerCase().includes(q))
          );
        });

  const handleSelect = (slug: string) => {
    navigate(`/articles/${slug}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#222631] rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-[#222631]">
          <Search className="w-5 h-5 text-[#2563EB] dark:text-[#4F8CFF] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, research topics, authors, or algorithms..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 border border-slate-200 dark:border-[#222631] rounded cursor-pointer"
          >
            Esc
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-xs text-slate-500 dark:text-slate-400">
              <p className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                Suggested Search Queries
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Edge AI', 'ROS 2', 'Microservices', 'Server Actions', 'Zero Trust', 'Open Source'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-[#181B22] text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#4F8CFF] cursor-pointer transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400">
              No articles found matching &quot;{query}&quot;. Try searching for topics like &quot;AI&quot;, &quot;FYP&quot;, or &quot;Kubernetes&quot;.
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleSelect(art.slug)}
                  className="group p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-[#181B22] cursor-pointer transition-colors flex items-center justify-between"
                >
                  <div className="pr-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <span className="text-[#2563EB] dark:text-[#4F8CFF] font-semibold">{art.tags[0]}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 tabular-nums">
                        <Clock className="w-3 h-3" /> {art.readTimeMinutes} min
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>By {art.author.name}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] transition-colors">
                      {art.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-article">
                      {art.summary}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-2 bg-slate-50 dark:bg-[#08090B] border-t border-slate-200 dark:border-[#222631] text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>Search covers departmental research &amp; FYP articles</span>
          <span className="tabular-nums">{ARTICLES.length} published records</span>
        </div>
      </div>
    </div>
  );
};
