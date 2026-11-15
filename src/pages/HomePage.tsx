import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Check,
  Monitor,
  Cpu,
} from 'lucide-react';
import {
  ARTICLES,
  CATEGORIES,
  DEPARTMENT_NOTICES,
  FACULTY_MEMBERS,
  HANDBOOKS,
  WORKSHOPS,
  GUIDES,
} from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { AnnouncementWidget } from '../components/AnnouncementWidget';
import { AuthorAvatar } from '../components/DepartmentIcons';
import { useRouter } from '../context/RouterContext';

interface HomePageProps {
  onOpenSubmitModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSubmitModal }) => {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const remainingArticles = ARTICLES.filter((a) => a.id !== featuredArticle.id);

  const filteredArticles =
    activeFilter === 'all'
      ? remainingArticles
      : remainingArticles.filter((a) => a.category === activeFilter);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 4000);
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
    <div className="space-y-16 lg:space-y-20">
      {/* 1. Institutional Masthead Banner */}
      <section className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] shadow-xs bg-gradient-to-br from-[#2563EB]/[0.04] via-transparent to-[#5B46F6]/[0.04] dark:from-[#4F8CFF]/[0.07] dark:via-transparent dark:to-[#7C5CFF]/[0.07]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-[#2563EB] dark:text-[#4F8CFF] uppercase tracking-wider">
              <span>Volume IV · Edition 2026</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600 dark:text-slate-300">
                Government Graduate College Jhang
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.12] text-balance">
              Department of Computer Science Digital Magazine
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-article leading-relaxed">
              Peer-reviewed BS Computer Science engineering articles, capstone architectures, and departmental technical guides curated for scholars and practitioners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/articles')}
              className="px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] text-white text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
            >
              Browse Archive
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 dark:bg-[#181B22] dark:hover:bg-[#222631] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#222631] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
            >
              Department &amp; Faculty
            </button>
          </div>
        </div>
      </section>

      {/* 2. Hero Featured Article */}
      <section aria-label="Featured Story">
        <ArticleCard article={featuredArticle} featured={true} />
      </section>

      {/* 3. Research Tracks Navigation Strip */}
      <section className="p-6 rounded-2xl bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase font-mono font-bold tracking-wider text-[#2563EB] dark:text-[#4F8CFF] mb-1">
              Curated Research Tracks
            </p>
            <p className="font-article italic text-sm text-slate-600 dark:text-slate-300">
              Browse peer-reviewed articles and engineering studies by subject area
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/categories/${cat.slug}`)}
                className="px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-[#181B22] hover:bg-[#2563EB] dark:hover:bg-[#4F8CFF] text-slate-800 dark:text-slate-200 hover:text-white dark:hover:text-white border border-slate-200 dark:border-[#222631] hover:border-transparent text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                {cat.shortName}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Publications + Department Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Articles Grid */}
        <section className="lg:col-span-8 space-y-8" aria-label="Latest Publications">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-[#222631]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 text-balance">
                Latest Publications &amp; Dispatches
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-article mt-1">
                Authored by BS Computer Science scholars, faculty mentors, and alumni
              </p>
            </div>

            {/* Functional Filter Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-[#111318] rounded-lg border border-slate-200 dark:border-[#222631] shrink-0">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'all'
                    ? 'bg-white dark:bg-[#181B22] text-[#2563EB] dark:text-[#4F8CFF] shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setActiveFilter('final-year-projects')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'final-year-projects'
                    ? 'bg-white dark:bg-[#181B22] text-[#2563EB] dark:text-[#4F8CFF] shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                FYP Projects
              </button>
              <button
                onClick={() => setActiveFilter('ai-machine-learning')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'ai-machine-learning'
                    ? 'bg-white dark:bg-[#181B22] text-[#2563EB] dark:text-[#4F8CFF] shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                AI &amp; Systems
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => navigate('/articles')}
              className="inline-flex items-center gap-2 px-7 py-3 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore All {ARTICLES.length} Articles &amp; Papers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 space-y-6" aria-label="Department Bulletins and Leadership">
          <AnnouncementWidget
            notices={DEPARTMENT_NOTICES}
            onOpenSubmitModal={onOpenSubmitModal}
          />

          {/* Head of Department Note */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF] uppercase tracking-wider mb-3">
              <Award className="w-4 h-4" />
              <span>From the Head of Department</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-article italic leading-relaxed">
              &quot;At Government Graduate College Jhang, our BS Computer Science program focuses on strong fundamentals and disciplined software craftsmanship. This digital magazine preserves the analytical work of our students and faculty.&quot;
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-[#222631] flex items-center gap-3">
              <AuthorAvatar initials="SR" name="Prof. Saleem Raza Shah" size="sm" accent />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  Prof. Saleem Raza Shah
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  HOD &amp; Associate Professor, Computer Science
                </p>
              </div>
            </div>
          </div>

          {/* Factual Department Snapshot */}
          <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs space-y-4">
            <p className="text-xs uppercase tracking-wider font-bold text-[#2563EB] dark:text-[#4F8CFF]">
              Department Facilities
            </p>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Monitor className="w-4 h-4 text-[#2563EB] dark:text-[#4F8CFF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">
                    1 Computer Science Lab
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Equipped with student computers and chairs for coursework practicals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">
                    DLD Lab (In Progress)
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Digital Logic Design laboratory currently under development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* 5. Computer Science Department Faculty Section */}
      <section className="pt-8 border-t border-slate-200 dark:border-[#222631]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase font-mono font-bold tracking-wider text-[#2563EB] dark:text-[#4F8CFF] mb-1">
              Academic Leadership &amp; Teaching Staff
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Faculty of Computer Science
            </h2>
          </div>
          <button
            onClick={() => navigate('/about')}
            className="text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF] hover:underline inline-flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>Department Profile &amp; Editorial Board</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {FACULTY_MEMBERS.map((faculty) => (
            <div
              key={faculty.id}
              className="p-5 rounded-2xl bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/50 dark:hover:border-[#4F8CFF]/60 shadow-xs transition-colors flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <AuthorAvatar
                  initials={faculty.initials}
                  name={faculty.name}
                  size="md"
                  accent={faculty.isHod}
                />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#4F8CFF]">
                    {faculty.isHod ? `HOD · ${faculty.designation}` : faculty.designation}
                  </p>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                    {faculty.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {faculty.roleTitle}
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-article pt-3 border-t border-slate-200/80 dark:border-[#222631]">
                {faculty.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Department Research Handbooks */}
      <section className="pt-8 border-t border-slate-200 dark:border-[#222631]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase font-mono font-bold tracking-wider text-[#2563EB] dark:text-[#4F8CFF] mb-1">
              Printed Editions &amp; Field Manuals
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Department Research Handbooks
            </h2>
          </div>
          <button
            onClick={() => navigate('/books')}
            className="text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF] hover:underline inline-flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>View All Handbooks ({HANDBOOKS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HANDBOOKS.map((book) => (
            <div
              key={book.id}
              onClick={() => navigate('/books')}
              className="group p-6 rounded-2xl bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/60 dark:hover:border-[#4F8CFF]/70 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div
                  className={`aspect-[16/10] rounded-xl p-5 mb-4 text-white flex flex-col justify-between ${getBookCoverStyle(book.tone)}`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 font-bold">
                    {book.badge}
                  </span>
                  <div>
                    <h4 className="text-base font-extrabold leading-tight text-white mb-0.5">
                      {book.title}
                    </h4>
                    <p className="text-[11px] text-white/80 font-article italic line-clamp-1">
                      {book.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-white/75 tabular-nums">
                    {book.edition} · {book.pages} pp
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 font-article line-clamp-2">
                  {book.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-[#222631] flex items-center justify-between text-xs">
                <span className="font-bold text-[#2563EB] dark:text-[#4F8CFF]">
                  Open-Access PDF
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Curated Technical Guides */}
      <section className="pt-8 border-t border-slate-200 dark:border-[#222631]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase font-mono font-bold tracking-wider text-[#2563EB] dark:text-[#4F8CFF] mb-1">
              Step-by-Step Documentation
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Curated Technical Guides
            </h2>
          </div>
          <button
            onClick={() => navigate('/guides')}
            className="text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF] hover:underline inline-flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>Explore All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES.map((guide) => (
            <div
              key={guide.id}
              onClick={() => navigate('/guides')}
              className="p-6 rounded-2xl bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/60 dark:hover:border-[#4F8CFF]/70 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-bold text-[#2563EB] dark:text-[#4F8CFF]">
                    {guide.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{guide.readTime}</span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] transition-colors mb-2 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-article line-clamp-3">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-[#222631] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono">{guide.updatedAt}</span>
                <span className="inline-flex items-center gap-1 font-bold text-[#2563EB] dark:text-[#4F8CFF]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Department Workshops & Practical Sessions */}
      <section className="pt-8 border-t border-slate-200 dark:border-[#222631]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase font-mono font-bold tracking-wider text-[#2563EB] dark:text-[#4F8CFF] mb-1">
              Computer Lab Practical Sessions
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Upcoming Department Workshops
            </h2>
          </div>
          <button
            onClick={() => navigate('/workshops')}
            className="text-xs font-bold text-[#2563EB] dark:text-[#4F8CFF] hover:underline inline-flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>Reserve Lab Seat ({WORKSHOPS.length} Sessions)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORKSHOPS.map((ws) => (
            <div
              key={ws.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/60 dark:hover:border-[#4F8CFF]/70 shadow-xs transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-bold text-[#2563EB] dark:text-[#4F8CFF]">{ws.tag}</span>
                  <span aria-hidden="true">·</span>
                  <span>{ws.level}</span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 mb-3 leading-snug">
                  {ws.title}
                </h3>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2 font-medium text-slate-800 dark:text-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#4F8CFF] shrink-0" />
                    <span>{ws.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{ws.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{ws.venue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-[#222631] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600 dark:text-slate-300 font-semibold tabular-nums">
                  {ws.seatsLeft} Seats Left
                </span>
                <button
                  onClick={() => navigate('/workshops')}
                  className="px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Departmental Gazette Subscription */}
      <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] dark:from-[#111318] dark:to-[#181B22] text-white border border-[#1D4ED8] dark:border-[#222631] shadow-md">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="w-11 h-11 rounded-xl bg-white/15 dark:bg-[#4F8CFF]/15 text-white dark:text-[#4F8CFF] mx-auto flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-balance">
            The GGC Jhang Computer Science Gazette
          </h3>
          <p className="text-xs sm:text-sm text-white/90 dark:text-slate-300 font-article leading-relaxed">
            Receive bi-weekly dispatches for BS Computer Science students, faculty, and alumni covering new publications, lab notices, and upcoming workshops.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="pt-2 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="scholar@ggcjhang.edu.pk"
              className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#0D0E12] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-xs sm:text-sm outline-none border border-transparent dark:border-[#222631]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-950 dark:bg-[#4F8CFF] text-white hover:bg-slate-900 dark:hover:bg-[#3B79EE] font-bold text-xs sm:text-sm whitespace-nowrap cursor-pointer transition-colors"
            >
              Subscribe Free
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs text-emerald-200 dark:text-emerald-400 font-semibold flex items-center justify-center gap-1.5 pt-1">
              <Check className="w-4 h-4" /> Subscribed to official department dispatches.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
