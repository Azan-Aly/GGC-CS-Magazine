import React, { useState } from 'react';
import { Search, Sun, Moon, Bookmark, Menu, X, PlusCircle } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { DepartmentCrest } from './DepartmentIcons';

interface NavbarProps {
  onOpenSubmitModal?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSubmitModal, onOpenSearch }) => {
  const { currentPath, navigate, savedSlugs } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Articles', path: '/articles' },
    { label: 'Guides', path: '/guides' },
    { label: 'Books', path: '/books' },
    { label: 'Workshops', path: '/workshops' },
    { label: 'About & Faculty', path: '/about' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const trendingTopics = [
    { label: 'AI & ML', cat: 'ai-machine-learning' },
    { label: 'FYP Spotlight', cat: 'final-year-projects' },
    { label: 'Cloud & DevOps', cat: 'cloud-devops' },
    { label: 'Web Engineering', cat: 'web-development' },
    { label: 'Cybersecurity', cat: 'cybersecurity' },
    { label: 'Student Life', cat: 'student-life' },
  ];

  return (
    <div className="w-full sticky top-0 z-40">
      {/* Primary Editorial Header — Unified Cobalt/Obsidian Aesthetic */}
      <header className="w-full bg-white/95 dark:bg-[#111318]/95 backdrop-blur-md text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-[#222631] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: CS + Nodes Logo & Magazine Title */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-2 text-left group cursor-pointer shrink-0 whitespace-nowrap"
          >
            <DepartmentCrest className="h-9 sm:h-10 w-auto shrink-0 transition-transform duration-200 group-hover:scale-[1.03]" />
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0">
              Magazine
            </span>
          </button>

          {/* Zone 2: Concise Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);

              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`py-1.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'border-[#2563EB] dark:border-[#4F8CFF] text-[#2563EB] dark:text-white'
                      : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-[#2563EB]/40 dark:hover:border-[#4F8CFF]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Utility & Primary Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#181B22] hover:bg-slate-200/80 dark:hover:bg-[#222631] border border-slate-200/80 dark:border-[#222631] text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
              aria-label="Search articles"
              title="Search articles"
            >
              <Search className="w-4 h-4 text-[#2563EB] dark:text-[#4F8CFF] shrink-0" />
              <span className="hidden md:inline">Search</span>
            </button>

            <button
              onClick={() => handleNav('/bookmarks')}
              className={`p-2 rounded-lg border transition-colors cursor-pointer relative shrink-0 ${
                currentPath === '/bookmarks'
                  ? 'bg-[#2563EB]/10 border-[#2563EB]/30 text-[#2563EB] dark:bg-[#4F8CFF]/15 dark:border-[#4F8CFF]/40 dark:text-[#4F8CFF]'
                  : 'bg-slate-100 dark:bg-[#181B22] border-slate-200/80 dark:border-[#222631] text-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-[#222631]'
              }`}
              aria-label="Saved reading list"
              title="Saved reading list"
            >
              <Bookmark className="w-4 h-4" />
              {savedSlugs.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#2563EB] dark:bg-[#4F8CFF] text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                  {savedSlugs.length}
                </span>
              )}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#181B22] border border-slate-200/80 dark:border-[#222631] hover:bg-slate-200/80 dark:hover:bg-[#222631] text-slate-700 dark:text-slate-200 transition-colors cursor-pointer shrink-0"
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#2563EB]" />
              )}
            </button>

            <button
              onClick={onOpenSubmitModal}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <PlusCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Submit Paper</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-[#181B22] border border-slate-200/80 dark:border-[#222631] text-slate-800 dark:text-slate-200 cursor-pointer shrink-0"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Secondary Topic Strip */}
      <div className="w-full bg-slate-50/95 dark:bg-[#0D0E12]/95 backdrop-blur-sm border-b border-slate-200 dark:border-[#222631] py-2 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-5 text-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0 whitespace-nowrap">
            Tracks
          </span>
          <div className="flex items-center gap-5">
            {trendingTopics.map((topic) => {
              const isTopicActive = currentPath === `/categories/${topic.cat}`;
              return (
                <button
                  key={topic.cat}
                  onClick={() => handleNav(`/categories/${topic.cat}`)}
                  className={`font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 py-0.5 border-b ${
                    isTopicActive
                      ? 'text-[#2563EB] dark:text-[#4F8CFF] border-[#2563EB] dark:border-[#4F8CFF]'
                      : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-[#2563EB] dark:hover:text-[#4F8CFF]'
                  }`}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-18 z-40 bg-white dark:bg-[#111318] border-b border-slate-200 dark:border-[#222631] p-5 shadow-xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  currentPath.startsWith(link.path)
                    ? 'bg-[#2563EB]/10 dark:bg-[#4F8CFF]/15 text-[#2563EB] dark:text-[#4F8CFF]'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#181B22]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-[#222631]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSubmitModal?.();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-[#2563EB] dark:bg-[#4F8CFF] rounded-lg cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Submit Research Paper</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
