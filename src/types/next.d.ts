declare module 'next' {
  export interface Metadata {
    title?: string | { template?: string; default?: string };
    description?: string;
    keywords?: string[];
    authors?: Array<{ name: string; url?: string }>;
    openGraph?: Record<string, any>;
    twitter?: Record<string, any>;
  }
}

declare module 'next/navigation' {
  export function notFound(): never;
  export function useRouter(): {
    push: (url: string) => void;
    replace: (url: string) => void;
    back: () => void;
  };
  export function usePathname(): string;
  export function useSearchParams(): URLSearchParams;
}
