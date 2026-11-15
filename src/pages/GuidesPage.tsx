import React from 'react';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GUIDES } from '../data/articles';
import { useRouter } from '../context/RouterContext';

export const GuidesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-12">
      <div className="pb-8 border-b border-slate-200 dark:border-[#222631]">
        <p className="text-xs uppercase font-mono tracking-widest text-[#2563EB] dark:text-[#4F8CFF] font-bold mb-1">
          Curated Academic Documentation
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
          Technical Guides
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-article max-w-3xl leading-relaxed">
          Structured multi-chapter field guides written by faculty leads and student researchers in the Department of Computer Science at Government Graduate College Jhang.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {GUIDES.map((guide) => (
          <div
            key={guide.id}
            className="flex flex-col justify-between rounded-2xl p-6 bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/60 dark:hover:border-[#4F8CFF]/70 shadow-xs hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="font-bold text-[#2563EB] dark:text-[#4F8CFF]">
                  {guide.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] tabular-nums">
                  <Clock className="w-3 h-3" />
                  {guide.readTime}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] transition-colors leading-snug mb-3">
                {guide.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-article leading-relaxed mb-6">
                {guide.summary}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-[#222631]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Included Chapters
                </p>
                <div className="space-y-1.5">
                  {guide.chapters.map((ch, chIdx) => (
                    <div
                      key={chIdx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#4F8CFF] shrink-0" />
                      <span className="font-medium">{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-[#222631] flex items-center justify-between">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                {guide.updatedAt}
              </span>
              <button
                onClick={() => navigate('/articles/edge-ai-computer-vision-microcontrollers')}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF] group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
            Want to author a technical guide for the department?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-article mt-1">
            Faculty members and BS Computer Science student groups may propose new reference guides for editorial review.
          </p>
        </div>
        <button
          onClick={() => navigate('/about')}
          className="px-6 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] text-white font-bold text-xs transition-colors cursor-pointer whitespace-nowrap"
        >
          Propose a Guide
        </button>
      </div>
    </div>
  );
};
