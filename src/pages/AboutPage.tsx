import React from 'react';
import {
  Building2,
  Monitor,
  Cpu,
  GraduationCap,
  Award,
  CheckCircle2,
  FileText,
  Clock,
  BookOpen,
} from 'lucide-react';
import { EDITORIAL_BOARD, FACULTY_MEMBERS } from '../data/articles';
import { AuthorAvatar, CSNodesMark } from '../components/DepartmentIcons';

interface AboutPageProps {
  onOpenSubmitModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenSubmitModal }) => {
  return (
    <div className="space-y-16">
      {/* Header Banner */}
      <section className="pb-8 border-b border-slate-200 dark:border-[#222631] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#4F8CFF] mb-2">
            <span>Institutional Profile</span>
            <span aria-hidden="true">·</span>
            <span>Government Graduate College Jhang</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4 text-balance">
            Department of Computer Science
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-article leading-relaxed max-w-3xl text-balance">
            Advancing foundational computer science education, software engineering discipline, and faculty-mentored student scholarship at Government Graduate College Jhang.
          </p>
        </div>

        <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-slate-200 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs shrink-0">
          <CSNodesMark className="h-12 w-auto shrink-0" />
          <div className="border-l border-slate-200 dark:border-[#222631] pl-3">
            <span className="block text-base font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Magazine
            </span>
            <span className="block text-[11px] font-mono text-[#2563EB] dark:text-[#4F8CFF] mt-1">
              GGC Jhang
            </span>
          </div>
        </div>
      </section>

      {/* Department Overview & Key Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 dark:bg-[#4F8CFF]/15 text-[#2563EB] dark:text-[#4F8CFF] flex items-center justify-center mb-4">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
            Institutional Heritage
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-article leading-relaxed">
            Government Graduate College Jhang is a historic center of higher learning in Punjab. The Department of Computer Science equips undergraduate scholars with rigorous theoretical and practical computing foundations.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-[#5B46F6]/10 dark:bg-[#7C5CFF]/15 text-[#5B46F6] dark:text-[#7C5CFF] flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
            Practical Engineering Rigor
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-article leading-relaxed">
            Coursework pairs algorithms, operating systems, and database architecture with hands-on programming and capstone development inside our departmental Computer Lab.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 dark:bg-[#4F8CFF]/15 text-[#2563EB] dark:text-[#4F8CFF] flex items-center justify-center mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
            Scholarly Publication Culture
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-article leading-relaxed">
            This digital magazine provides BS Computer Science students and faculty a platform to document project architectures, reproducible code, and technical monographs.
          </p>
        </div>
      </section>

      {/* Academic Degree Offering (Strictly BS Computer Science) */}
      <section className="space-y-6">
        <div className="pb-3 border-b border-slate-200 dark:border-[#222631]">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Academic Degree Offering
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            The Department of Computer Science exclusively offers the four-year BS Computer Science degree program
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#2563EB] dark:text-[#4F8CFF]">
              <GraduationCap className="w-4 h-4" />
              <span>4 YEARS · 8 SEMESTERS · UNDERGRADUATE HONORS</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              BS Computer Science
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-article leading-relaxed">
              A comprehensive eight-semester undergraduate degree grounded in programming fundamentals, object-oriented design, data structures and algorithms, operating systems, computer networks, database systems, software engineering, and a culminating Final Year Project (FYP).
            </p>
          </div>
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-[#222631] pt-5 lg:pt-0 lg:pl-8 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Degree Track</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">BS Computer Science</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Duration</span>
              <span className="font-mono font-semibold text-slate-900 dark:text-slate-100 tabular-nums">4 Years (8 Semesters)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Capstone</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Final Year Project</span>
            </div>
          </div>
        </div>
      </section>

      {/* Computing Laboratories & Facilities */}
      <section className="space-y-6">
        <div className="pb-3 border-b border-slate-200 dark:border-[#222631]">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Department Laboratories
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Current computing lab facilities and upcoming hardware laboratory expansion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 dark:bg-[#4F8CFF]/15 text-[#2563EB] dark:text-[#4F8CFF] flex items-center justify-center shrink-0">
                  <Monitor className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Computer Science Lab
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Operational</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-article leading-relaxed">
              The department operates one dedicated Computer Lab furnished with desktop computers and student seating chairs for practical programming sessions, coursework exercises, and BS Computer Science project work.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Digital Logic Design (DLD) Lab
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 shrink-0">
                <Clock className="w-3.5 h-3.5" />
                <span>In Progress</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-article leading-relaxed">
              A dedicated Digital Logic Design (DLD) Lab is currently under development to provide students with dedicated hardware logic trainers, breadboards, and digital circuit testing stations.
            </p>
          </div>
        </div>
      </section>

      {/* Department Faculty Directory */}
      <section className="space-y-6" id="faculty">
        <div className="pb-3 border-b border-slate-200 dark:border-[#222631]">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Faculty of Computer Science
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Teaching faculty mentoring the BS Computer Science program at Government Graduate College Jhang
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACULTY_MEMBERS.map((faculty) => (
            <div
              key={faculty.id}
              className="p-6 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs flex flex-col justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <AuthorAvatar
                  initials={faculty.initials}
                  name={faculty.name}
                  size="lg"
                  accent={faculty.isHod}
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#4F8CFF]">
                    {faculty.isHod ? `HOD · ${faculty.designation}` : faculty.designation}
                  </p>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
                    {faculty.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {faculty.roleTitle}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 dark:border-[#222631] text-xs text-slate-600 dark:text-slate-400 font-article leading-relaxed">
                {faculty.focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Board */}
      <section className="space-y-6">
        <div className="pb-3 border-b border-slate-200 dark:border-[#222631]">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Magazine Editorial Board
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Faculty editors and student coordinators overseeing publication quality and peer review
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDITORIAL_BOARD.map((member) => (
            <div
              key={member.name}
              className="p-5 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="mb-3.5">
                  <AuthorAvatar
                    initials={member.initials}
                    name={member.name}
                    size="md"
                    accent={member.name === 'Prof. Khurram Chattha'}
                  />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {member.name}
                </h4>
                <p className="text-xs text-[#2563EB] dark:text-[#4F8CFF] font-semibold mt-0.5">
                  {member.role}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {member.academicTitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-[#222631] text-xs text-slate-500 dark:text-slate-400 font-article">
                {member.specialization}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] shadow-xs space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Student Author Submission Guidelines
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-article mt-1">
            We welcome technical contributions from currently enrolled BS Computer Science students, faculty members, and departmental alumni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div className="space-y-4 font-article leading-relaxed">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#4F8CFF] shrink-0 mt-0.5" />
              <div>
                <strong className="font-sans font-semibold text-slate-900 dark:text-slate-100">
                  Original Technical Work:
                </strong>
                <p className="text-slate-600 dark:text-slate-400">
                  Articles must showcase original project findings, algorithmic analyses, or reproducible tutorials with documented source code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#4F8CFF] shrink-0 mt-0.5" />
              <div>
                <strong className="font-sans font-semibold text-slate-900 dark:text-slate-100">
                  Code Quality &amp; Verification:
                </strong>
                <p className="text-slate-600 dark:text-slate-400">
                  All code samples must be well-commented and reproducible on standard workstations in our Computer Lab.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 font-article leading-relaxed">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#4F8CFF] shrink-0 mt-0.5" />
              <div>
                <strong className="font-sans font-semibold text-slate-900 dark:text-slate-100">
                  Editorial Review Process:
                </strong>
                <p className="text-slate-600 dark:text-slate-400">
                  Submissions are reviewed by the Editorial Board led by Prof. Khurram Chattha alongside departmental faculty reviewers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#4F8CFF] shrink-0 mt-0.5" />
              <div>
                <strong className="font-sans font-semibold text-slate-900 dark:text-slate-100">
                  Academic Indexing:
                </strong>
                <p className="text-slate-600 dark:text-slate-400">
                  Published articles are archived digitally and may be cited in student portfolios and academic applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-[#222631] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Editorial inquiries:{' '}
            <span className="font-mono text-slate-800 dark:text-slate-200">
              cs.magazine@ggcjhang.edu.pk
            </span>
          </p>

          <button
            onClick={onOpenSubmitModal}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-4 h-4" />
            <span>Open Online Submission Form</span>
          </button>
        </div>
      </section>
    </div>
  );
};
