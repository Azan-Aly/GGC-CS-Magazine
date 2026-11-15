import React from 'react';
import type { Metadata } from 'next';
import { ArticlesPage } from '@/src/pages/ArticlesPage';

export const metadata: Metadata = {
  title: 'All Publications & Research Papers',
  description: 'Searchable, filterable archive of computer science monographs and student research at GGC Jhang.',
};

export default function ArticlesIndexPage() {
  return <ArticlesPage />;
}
