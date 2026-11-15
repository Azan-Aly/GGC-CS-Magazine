import React from 'react';
import { Bell, Calendar, ChevronRight } from 'lucide-react';
import { DepartmentNotice } from '../types/magazine';
import { useRouter } from '../context/RouterContext';

interface AnnouncementWidgetProps {
  notices: DepartmentNotice[];
  onOpenSubmitModal?: () => void;
}

export const AnnouncementWidget: React.FC<AnnouncementWidgetProps> = ({
  notices,
  onOpenSubmitModal,
}) => {
  const { navigate } = useRouter();

  return (
    <div className="rounded-2xl border border-slate-200/90 dark:border-[#222631] bg-white dark:bg-[#111318] p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/80 dark:border-[#222631]">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-[#2563EB] dark:text-[#4F8CFF]" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Department Bulletins
          </h3>
        </div>
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tabular-nums">
          Session 2026
        </span>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="group text-xs">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
              <span className="text-[11px] font-bold text-[#5B46F6] dark:text-[#7C5CFF]">
                {notice.tag}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 tabular-nums">
                <Calendar className="w-3 h-3" />
                {notice.date}
              </span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 leading-snug">
              {notice.title}
            </h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed font-article">
              {notice.summary}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-[#222631] flex flex-col gap-2">
        <button
          onClick={onOpenSubmitModal}
          className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Submit Research Preprint</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => navigate('/about')}
          className="text-center text-xs text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#4F8CFF] transition-colors pt-1 cursor-pointer"
        >
          View Peer-Review Cycle &amp; Standards
        </button>
      </div>
    </div>
  );
};
