import React from 'react';
import type { Metadata } from 'next';
import { HomePage } from '@/src/pages/HomePage';

export const metadata: Metadata = {
  title: 'Home | GGC Jhang CS Digital Magazine',
  description: 'Featured research publications, final year capstones, and departmental bulletins from the Department of Computer Science at Government Graduate College Jhang.',
};

export default function Page() {
  return <HomePage onOpenSubmitModal={() => {}} />;
}
