import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/src/data/articles';
import { ArticleDetailPage } from '@/src/pages/ArticleDetailPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [{ url: article.coverImage, alt: article.coverImageAlt }],
    },
  };
}

export default async function DynamicArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailPage slug={slug} />;
}
