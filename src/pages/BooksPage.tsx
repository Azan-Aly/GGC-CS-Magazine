import React, { useState } from 'react';
import { Download, Check } from 'lucide-react';
import { HANDBOOKS } from '../data/articles';

export const BooksPage: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccess(id);
      setTimeout(() => setDownloadSuccess(null), 3000);
    }, 1000);
  };

  const getBookCoverStyle = (tone: 'crimson' | 'slate' | 'indigo') => {
    if (tone === 'crimson') {
      return 'bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] dark:from-[#1E3A8A] dark:to-[#2563EB]';
    }
    if (tone === 'indigo') {
      return 'bg-gradient-to-br from-[#3730A3] to-[#5B46F6] dark:from-[#2A2056] dark:to-[#4C1D95]';
    }
    return 'bg-gradient-to-br from-slate-800 to-slate-900 dark:from-[#181B22] dark:to-[#0D0E12] border border-slate-700 dark:border-[#2A2F3D]';
  };

  return (
    <div className="space-y-12">
      <div className="pb-8 border-b border-slate-200 dark:border-[#222631]">
        <p className="text-xs uppercase font-mono tracking-widest text-[#2563EB] dark:text-[#4F8CFF] font-bold mb-1">
          Printed Editions &amp; Digital Handbooks
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4 text-balance">
          Department Books &amp; Monograph Handbooks
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-article max-w-3xl leading-relaxed">
          Reference manuals and capstone handbooks compiled by faculty and student contributors in the Department of Computer Science at Government Graduate College Jhang.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {HANDBOOKS.map((book) => (
          <div
            key={book.id}
            className="flex flex-col justify-between rounded-2xl p-6 bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/60 dark:hover:border-[#4F8CFF]/70 shadow-xs hover:shadow-md transition-all group"
          >
            <div>
              <div
                className={`w-full aspect-[4/3] rounded-xl p-6 mb-6 flex flex-col justify-between text-white overflow-hidden ${getBookCoverStyle(book.tone)}`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono font-semibold uppercase tracking-wider text-white/80">
                  <span>GGC Jhang CS</span>
                  <span>{book.badge}</span>
                </div>
                <div>
                  <h4 className="text-xl font-extrabold leading-tight text-white mb-1">
                    {book.title}
                  </h4>
                  <p className="text-xs text-white/80 font-article italic">{book.subtitle}</p>
                </div>
                <div className="text-[11px] font-mono text-white/75 pt-2 border-t border-white/20 flex justify-between tabular-nums">
                  <span>{book.edition}</span>
                  <span>{book.pages} Pages</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF]">
                  By {book.author}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-article leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-[#222631] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                <span>{book.chaptersCount} Chapters</span>
                <span>Includes Code Repos</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-[#222631]">
              <button
                onClick={() => handleDownload(book.id)}
                disabled={downloadingId === book.id}
                className="w-full py-2.5 px-4 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {downloadSuccess === book.id ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>PDF Ready for Download</span>
                  </>
                ) : downloadingId === book.id ? (
                  <span>Preparing Digital Copy...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Open-Access PDF ({book.pages} pp)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] shadow-xs text-xs text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 font-article">
        <p>
          Reference copies are available for BS Computer Science students through the department reading collection and college library.
        </p>
        <span className="font-mono text-[11px] text-[#2563EB] dark:text-[#4F8CFF] font-bold shrink-0">
          BS COMPUTER SCIENCE CURRICULUM
        </span>
      </div>
    </div>
  );
};
