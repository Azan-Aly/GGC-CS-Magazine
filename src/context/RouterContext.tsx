import React, { createContext, useContext, useEffect, useState } from 'react';

export type RouteType = 
  | { name: 'home' }
  | { name: 'articles'; category?: string; query?: string }
  | { name: 'article-detail'; slug: string }
  | { name: 'category'; tag: string }
  | { name: 'guides' }
  | { name: 'books' }
  | { name: 'workshops' }
  | { name: 'about' }
  | { name: 'bookmarks' };

interface RouterContextType {
  currentPath: string;
  route: RouteType;
  navigate: (path: string) => void;
  savedSlugs: string[];
  toggleSaveSlug: (slug: string) => void;
  isSaved: (slug: string) => boolean;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  route: { name: 'home' },
  navigate: () => {},
  savedSlugs: [],
  toggleSaveSlug: () => {},
  isSaved: () => false,
});

function parsePath(path: string): RouteType {
  // Normalize path
  const cleanPath = path.split('?')[0].replace(/\/+$/, '') || '/';
  
  if (cleanPath === '/' || cleanPath === '') {
    return { name: 'home' };
  }
  if (cleanPath === '/articles') {
    return { name: 'articles' };
  }
  if (cleanPath.startsWith('/articles/')) {
    const slug = cleanPath.replace('/articles/', '');
    return { name: 'article-detail', slug };
  }
  if (cleanPath.startsWith('/categories/')) {
    const tag = cleanPath.replace('/categories/', '');
    return { name: 'category', tag };
  }
  if (cleanPath === '/guides') {
    return { name: 'guides' };
  }
  if (cleanPath === '/books') {
    return { name: 'books' };
  }
  if (cleanPath === '/workshops') {
    return { name: 'workshops' };
  }
  if (cleanPath === '/about') {
    return { name: 'about' };
  }
  if (cleanPath === '/bookmarks') {
    return { name: 'bookmarks' };
  }
  return { name: 'home' };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [route, setRoute] = useState<RouteType>(() => parsePath(currentPath));

  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('ggc-magazine-bookmarks');
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      setRoute(parsePath(path));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setRoute(parsePath(path));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSaveSlug = (slug: string) => {
    setSavedSlugs((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        localStorage.setItem('ggc-magazine-bookmarks', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const isSaved = (slug: string) => savedSlugs.includes(slug);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        route,
        navigate,
        savedSlugs,
        toggleSaveSlug,
        isSaved,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
