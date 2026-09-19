import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Get Involved | CS4IL',
};

export default function GetInvolved() {
  return <ComingSoon />;
}
