import React from 'react';
import type { Metadata } from 'next';
import { AboutPage } from '@/src/pages/AboutPage';

export const metadata: Metadata = {
  title: 'About Department & Editorial Board | GGC Jhang CS',
  description: 'History, faculty directory, computing testbed laboratories, and student submission guidelines for Government Graduate College Jhang.',
};

export default function AboutRoutePage() {
  return <AboutPage onOpenSubmitModal={() => {}} />;
}
