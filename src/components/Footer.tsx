import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { FooterCrest } from './DepartmentIcons';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-[#222631] bg-white dark:bg-[#0B0D11] text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Institutional Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <FooterCrest className="h-10 w-auto shrink-0" />
              <span className="font-extrabold text-slate-900 dark:text-slate-100 tracking-tight text-base sm:text-lg">
                Magazine
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Department of Computer Science, Govt Graduate College Jhang
            </p>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-article">
              Dedicated to clear technical writing and peer-reviewed BS Computer Science student research, laboratory documentation, and capstone project publications.
            </p>
            <div className="pt-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
              BS Computer Science Program · GGC Jhang
            </div>
          </div>

          {/* Topics Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#4F8CFF]">
              Topics
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => navigate('/categories/ai-machine-learning')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  Artificial Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/final-year-projects')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  FYP Capstone Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/cloud-devops')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  Cloud &amp; Distributed
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/web-development')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  Web Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/cybersecurity')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  Cybersecurity &amp; VLANs
                </button>
              </li>
            </ul>
          </div>

          {/* Publications Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#4F8CFF]">
              Publications
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => navigate('/articles')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  All Articles Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/guides')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  Technical Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/books')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  Handbooks &amp; Manuals
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/workshops')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  Department Workshops
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
                >
                  Editorial Board &amp; Faculty
                </button>
              </li>
            </ul>
          </div>

          {/* Department Bulletin Dispatch */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#4F8CFF]">
              The CS Gazette Dispatch
            </h4>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-article">
              Receive notifications on new BS Computer Science issues, paper calls, and Computer Lab workshop schedules.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-lg overflow-hidden border border-slate-300 dark:border-[#222631] bg-slate-50 dark:bg-[#111318] focus-within:border-[#2563EB] dark:focus-within:border-[#4F8CFF]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="scholar@ggcjhang.edu.pk"
                  required
                  className="w-full px-3.5 py-2.5 text-xs bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                  title="Subscribe"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <Check className="w-3.5 h-3.5" /> Subscribed to official dispatches
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-[#222631] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Department of Computer Science, Government Graduate College Jhang. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono">BS Computer Science Publication</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => navigate('/about')}
              className="hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors cursor-pointer"
            >
              Submission Guidelines
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
