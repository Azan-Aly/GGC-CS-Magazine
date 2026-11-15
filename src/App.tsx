import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { SubmitArticleModal } from './components/SubmitArticleModal';
import { HomePage } from './pages/HomePage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { BookmarksPage } from './pages/BookmarksPage';
import { GuidesPage } from './pages/GuidesPage';
import { BooksPage } from './pages/BooksPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { ARTICLES, CATEGORIES } from './data/articles';

const AppContent: React.FC = () => {
  const { route, currentPath } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Dynamic Metadata synchronization (simulating Next.js Metadata API)
  useEffect(() => {
    let title = 'GGC Jhang CS Digital Magazine | Dept of Computer Science';
    if (route.name === 'articles') {
      title = 'Articles Archive | GGC Jhang CS Magazine';
    } else if (route.name === 'article-detail') {
      const art = ARTICLES.find((a) => a.slug === route.slug);
      if (art) {
        title = `${art.title} | GGC Jhang CS Magazine`;
      }
    } else if (route.name === 'guides') {
      title = 'Smashing Guides & Field Manuals | GGC Jhang CS Magazine';
    } else if (route.name === 'books') {
      title = 'Department Research Handbooks & Books | GGC Jhang CS Magazine';
    } else if (route.name === 'workshops') {
      title = 'Workshops & Live Seminars | GGC Jhang CS Magazine';
    } else if (route.name === 'category') {
      const cat = CATEGORIES.find((c) => c.slug === route.tag || c.id === route.tag);
      if (cat) {
        title = `${cat.name} Publications | GGC Jhang CS Magazine`;
      }
    } else if (route.name === 'about') {
      title = 'About & Faculty | Department of Computer Science, GGC Jhang';
    } else if (route.name === 'bookmarks') {
      title = 'Saved Reading List | GGC Jhang CS Magazine';
    }

    document.title = title;
  }, [route]);

  const renderCurrentPage = () => {
    switch (route.name) {
      case 'home':
        return <HomePage onOpenSubmitModal={() => setIsSubmitModalOpen(true)} />;
      case 'articles':
        return <ArticlesPage />;
      case 'article-detail':
        return <ArticleDetailPage slug={route.slug} />;
      case 'guides':
        return <GuidesPage />;
      case 'books':
        return <BooksPage />;
      case 'workshops':
        return <WorkshopsPage />;
      case 'category':
        return <CategoryPage tag={route.tag} />;
      case 'about':
        return <AboutPage onOpenSubmitModal={() => setIsSubmitModalOpen(true)} />;
      case 'bookmarks':
        return <BookmarksPage />;
      default:
        return <HomePage onOpenSubmitModal={() => setIsSubmitModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#08090B] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {renderCurrentPage()}
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <SubmitArticleModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
