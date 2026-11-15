import React, { useEffect, useState } from 'react';

export const ReadingProgressBar: React.FC = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setCompletion(0);
        return;
      }
      const currentScroll = window.scrollY;
      const progress = Math.min(100, Math.max(0, (currentScroll / scrollHeight) * 100));
      setCompletion(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-16 sm:top-18 left-0 right-0 h-1 z-50 pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#2563EB] to-[#5B46F6] dark:from-[#4F8CFF] dark:to-[#7C5CFF] transition-all duration-150 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};
