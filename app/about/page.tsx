import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'About | CS4IL',
};

export default function About() {
  return <ComingSoon />;
}
