import React from 'react';

interface LogoProps {
  className?: string;
}

export const CSNodesMark: React.FC<LogoProps> = ({ className = 'h-9 w-auto' }) => (
  <svg
    viewBox="0 0 134 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Slanted Bold Geometric CS Monogram */}
    <g transform="skewX(-11) translate(9, 0)">
      {/* C outer loop flowing seamlessly into lower bar under S */}
      <path
        d="M40 13H22.5C13.8 13 9.5 18.2 9.5 26C9.5 33.8 13.8 39 22.5 39H65.5C73.2 39 76.5 36.2 76.5 32.2C76.5 28.4 73 26.6 66 26H52C45.8 25.5 43 23.6 43 19.6C43 15.6 46.5 13 54 13H77"
        className="stroke-[#1E40AF] dark:stroke-white"
        strokeWidth="7.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* 5 Symmetrical Branching Circuit Traces & Hollow Circle Nodes */}
    <g
      className="stroke-[#2563EB] dark:stroke-[#4F8CFF]"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top trace */}
      <path d="M84 15L93 7.5H108" />
      <circle cx="111.5" cy="7.5" r="3" />

      {/* Upper-middle trace */}
      <path d="M85 20.5L92.5 16.5H116" />
      <circle cx="119.5" cy="16.5" r="3" />

      {/* Center longest trace */}
      <path d="M85 26H124" />
      <circle cx="127.5" cy="26" r="3" />

      {/* Lower-middle trace */}
      <path d="M85 31.5L92.5 35.5H116" />
      <circle cx="119.5" cy="35.5" r="3" />

      {/* Bottom trace */}
      <path d="M83 37L93 44.5H108" />
      <circle cx="111.5" cy="44.5" r="3" />
    </g>
  </svg>
);

export const DepartmentCrest: React.FC<LogoProps> = ({ className = 'h-9 w-auto' }) => (
  <CSNodesMark className={className} />
);

export const FooterCrest: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <CSNodesMark className={className} />
);

interface AuthorAvatarProps {
  initials: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  accent?: boolean;
}

export const AuthorAvatar: React.FC<AuthorAvatarProps> = ({
  initials,
  name,
  size = 'md',
  accent = false,
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'w-9 h-9 text-xs'
      : size === 'lg'
        ? 'w-14 h-14 text-base'
        : 'w-11 h-11 text-xs';

  return (
    <div
      role="img"
      aria-label={name}
      className={`${sizeClasses} rounded-xl flex items-center justify-center font-bold tracking-tight shrink-0 border transition-colors ${
        accent
          ? 'bg-[#2563EB]/10 dark:bg-[#4F8CFF]/15 text-[#2563EB] dark:text-[#4F8CFF] border-[#2563EB]/25 dark:border-[#4F8CFF]/35'
          : 'bg-slate-100 dark:bg-[#181B22] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-[#222631]'
      }`}
    >
      <span className="font-mono">{initials}</span>
    </div>
  );
};
