import React from 'react';
import type { Metadata } from 'next';
import { CATEGORIES } from '@/src/data/articles';
import { CategoryPage } from '@/src/pages/CategoryPage';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const category = CATEGORIES.find((c) => c.slug === tag || c.id === tag);
  if (!category) return { title: 'Category Not Found' };

  return {
    title: `${category.name} | GGC Jhang CS Magazine`,
    description: category.description,
  };
}

export default async function DynamicCategoryPage({ params }: Props) {
  const { tag } = await params;
  return <CategoryPage tag={tag} />;
}
