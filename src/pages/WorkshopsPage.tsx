import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Check } from 'lucide-react';
import { WORKSHOPS } from '../data/articles';

export const WorkshopsPage: React.FC = () => {
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);
  const [studentName, setStudentName] = useState('');
  const [studentRoll, setStudentRoll] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleOpenRegister = (id: string) => {
    setSelectedWorkshop(id);
    setModalOpen(true);
  };

  const handleConfirmRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentRoll || !selectedWorkshop) return;
    setRegisteredIds((prev) => [...prev, selectedWorkshop]);
    setModalOpen(false);
    setSuccessMessage(
      `Seat reserved for ${studentName} (${studentRoll}). Your Computer Lab session pass is confirmed.`
    );
    setStudentName('');
    setStudentRoll('');
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  return (
    <div className="space-y-12">
      <div className="pb-8 border-b border-slate-200 dark:border-[#222631]">
        <p className="text-xs uppercase font-mono tracking-widest text-[#2563EB] dark:text-[#4F8CFF] font-bold mb-1">
          Hands-On Computer Lab Sessions &amp; Seminars
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4 text-balance">
          Workshops &amp; Academic Seminars
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-article max-w-3xl leading-relaxed">
          Practical technical sessions hosted in the Department of Computer Science Computer Lab and lecture hall, led by faculty members and alumni mentors.
        </p>
      </div>

      {successMessage && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-3">
          <Check className="w-5 h-5 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {WORKSHOPS.map((ws) => {
          const isRegistered = registeredIds.includes(ws.id);

          return (
            <div
              key={ws.id}
              className="flex flex-col justify-between rounded-2xl p-6 bg-white dark:bg-[#111318] border border-slate-200/90 dark:border-[#222631] hover:border-[#2563EB]/60 dark:hover:border-[#4F8CFF]/70 shadow-xs hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-[#2563EB] dark:text-[#4F8CFF]">{ws.tag}</span>
                  <span className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {ws.level} Level
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] dark:group-hover:text-[#4F8CFF] transition-colors leading-snug mb-3">
                  {ws.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-article leading-relaxed mb-6">
                  {ws.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-[#222631] text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#4F8CFF] shrink-0" />
                    <span className="font-medium text-slate-900 dark:text-slate-200">{ws.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{ws.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{ws.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <Users className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#4F8CFF] shrink-0" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Instructor: {ws.speaker}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-[#222631] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600 dark:text-slate-300 font-semibold tabular-nums">
                  {ws.seatsLeft} Seats Left
                </span>

                <button
                  onClick={() => handleOpenRegister(ws.id)}
                  disabled={isRegistered}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    isRegistered
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] text-white'
                  }`}
                >
                  {isRegistered ? 'Seat Confirmed' : 'Reserve Lab Seat'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#222631] rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Reserve Workshop Seat
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-article mb-4">
              Enter your BS Computer Science details to reserve a Computer Lab workstation for this session.
            </p>

            <form onSubmit={handleConfirmRegistration} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Ali Hassan"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  BS CS Roll Number or Email *
                </label>
                <input
                  type="text"
                  required
                  value={studentRoll}
                  onChange={(e) => setStudentRoll(e.target.value)}
                  placeholder="e.g. BSCS-23-28"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-[#222631] flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg cursor-pointer transition-colors"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
