import React, { useState } from 'react';
import { X, Send, CheckCircle2, FileText, Code2, AlertCircle } from 'lucide-react';
import { CATEGORIES } from '../data/articles';

interface SubmitArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitArticleModal: React.FC<SubmitArticleModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    authorName: '',
    rollNumberOrDesignation: '',
    email: '',
    program: 'BS Computer Science',
    category: 'final-year-projects',
    title: '',
    abstract: '',
    repoOrPaperUrl: '',
    codeSnippetSample: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.abstract || !formData.authorName || !formData.email) {
      setError('Please fill in all required academic fields.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111318] border border-slate-200 dark:border-[#222631] rounded-2xl shadow-2xl overflow-hidden my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-[#222631]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 dark:bg-[#4F8CFF]/15 text-[#2563EB] dark:text-[#4F8CFF] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Submit Research / FYP Article
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Department of Computer Science (BS CS) · Editorial Review Board
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-[#181B22] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Submission Received for Peer Review
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto font-article leading-relaxed">
              Thank you, <strong>{formData.authorName}</strong>. Your draft &quot;<em>{formData.title}</em>&quot; has been logged for review by the Editorial Board led by Prof. Khurram Chattha.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg cursor-pointer transition-colors"
              >
                Return to Magazine
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Lead Author / Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.authorName}
                  onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                  placeholder="e.g. Syeda Fatima Zahra"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  BS CS Roll No. / Faculty Designation *
                </label>
                <input
                  type="text"
                  required
                  value={formData.rollNumberOrDesignation}
                  onChange={(e) => setFormData({ ...formData, rollNumberOrDesignation: e.target.value })}
                  placeholder="e.g. BSCS-22-14 or Lecturer"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="scholar@ggcjhang.edu.pk"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Topic Track *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Symmetrical Quantization for Agricultural Drone Telemetry"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Summary / Abstract (150–300 words) *
              </label>
              <textarea
                required
                rows={3}
                value={formData.abstract}
                onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                placeholder="Describe your research methodology, engineering constraints, and empirical outcomes..."
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                GitHub Repository / Paper Link (Optional)
              </label>
              <input
                type="url"
                value={formData.repoOrPaperUrl}
                onChange={(e) => setFormData({ ...formData, repoOrPaperUrl: e.target.value })}
                placeholder="https://github.com/ggc-jhang-cs/your-project"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-50 dark:bg-[#181B22] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#4F8CFF]" />
                  <span>Representative Code Snippet</span>
                </label>
                <span className="text-[11px] text-slate-500 font-mono">Python / C++ / Go / TS</span>
              </div>
              <textarea
                rows={3}
                value={formData.codeSnippetSample}
                onChange={(e) => setFormData({ ...formData, codeSnippetSample: e.target.value })}
                placeholder="Paste key algorithmic routine or system configuration..."
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-[#222631] bg-slate-950 text-slate-200 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#4F8CFF]"
              />
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-[#222631] flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Open to BS Computer Science students and faculty.
              </span>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#181B22] rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#4F8CFF] dark:hover:bg-[#3B79EE] rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit for Review</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
