'use client';

import { Mail } from 'lucide-react';
import Script from 'next/script';

export default function TournamentUpdatesButton() {
  return (
    <>
      <Script
        id="kit-tournament-updates-form"
        async
        data-uid="e26316e72a"
        src="https://cs4il.kit.com/e26316e72a/index.js"
        strategy="afterInteractive"
      />
      <a
        href="https://cs4il.kit.com/e26316e72a"
        data-formkit-toggle="e26316e72a"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary inline-flex items-center justify-center gap-2"
      >
        <Mail size={18} />
        Get Tournament Updates
      </a>
    </>
  );
}
