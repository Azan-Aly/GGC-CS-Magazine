import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { CodeSnippet } from '../types/magazine';

interface CodeBlockProps {
  snippet: CodeSnippet;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ snippet }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const lines = snippet.code.trim().split('\n');

  // Simple, robust syntax colorizer for keywords, strings, comments, numbers
  const highlightToken = (line: string): React.ReactNode => {
    // If comment
    if (line.trim().startsWith('//') || line.trim().startsWith('#') || line.trim().startsWith('/*')) {
      return <span className="text-emerald-600 dark:text-emerald-400 italic">{line}</span>;
    }

    // Tokenize strings, numbers, keywords
    const parts = line.split(/(".*?"|'.*?'|`.*?`|\b(?:import|export|from|def|class|return|const|let|var|function|async|await|if|else|for|while|try|catch|struct|void|uint8_t|uint32_t|int|float|bool|public|private)\b)/g);

    return parts.map((part, idx) => {
      if (!part) return null;
      if (part.startsWith('"') || part.startsWith("'") || part.startsWith('`')) {
        return <span key={idx} className="text-amber-600 dark:text-amber-300">{part}</span>;
      }
      if (/^(?:import|export|from|def|class|return|const|let|var|function|async|await|if|else|for|while|try|catch|struct|void|uint8_t|uint32_t|int|float|bool|public|private)$/.test(part)) {
        return <span key={idx} className="text-[#7C5CFF] dark:text-[#7C5CFF] font-semibold">{part}</span>;
      }
      if (/^\b\d+(?:\.\d+)?\b$/.test(part)) {
        return <span key={idx} className="text-cyan-600 dark:text-cyan-300">{part}</span>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-[#222631] bg-slate-900 text-slate-100 shadow-md">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-[#4F8CFF]" />
          <span>{snippet.filename || `${snippet.language} snippet`}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-500 uppercase text-[11px] font-sans tracking-wider">{snippet.language}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs font-sans"
            title="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code description banner if present */}
      {snippet.description && (
        <div className="px-4 py-1.5 text-xs text-slate-400 bg-slate-950/40 border-b border-slate-800/60 font-sans">
          {snippet.description}
        </div>
      )}

      {/* Code body with line numbers */}
      <div className="overflow-x-auto p-4 text-xs font-code leading-relaxed">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                <td className="w-10 pr-4 select-none text-right text-slate-600 font-mono tabular-nums text-[11px] align-top">
                  {index + 1}
                </td>
                <td className="whitespace-pre font-mono text-slate-200">
                  {highlightToken(line)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
