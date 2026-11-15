import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | GGC Jhang CS Digital Magazine',
    default: 'GGC Jhang CS Digital Magazine | Department of Computer Science',
  },
  description: 'The premier digital computing magazine by the Department of Computer Science at Government Graduate College Jhang, featuring student research, FYP spotlights, and engineering insights.',
  keywords: ['Computer Science', 'GGC Jhang', 'Final Year Projects', 'TinyML', 'Edge AI', 'Kubernetes', 'Academic Computing'],
  authors: [{ name: 'Department of Computer Science, GGC Jhang' }],
  openGraph: {
    title: 'GGC Jhang CS Digital Magazine',
    description: 'Empirical research, undergraduate capstones, and software engineering from Govt Graduate College Jhang.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'GGC Jhang CS Magazine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GGC Jhang CS Digital Magazine',
    description: 'Empirical research and FYP showcases from Department of Computer Science, GGC Jhang.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-[#08090B] text-slate-900 dark:text-slate-100 antialiased selection:bg-[#4F8CFF]/20 selection:text-[#4F8CFF]">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
