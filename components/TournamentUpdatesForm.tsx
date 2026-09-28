'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const SESSION_KEY = 'cs4il-updates-popup-shown';

export default function TournamentUpdatesForm() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // sessionStorage unavailable (e.g. private browsing) - show it anyway
    }
    setShouldLoad(true);
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script
      id="kit-tournament-updates-form"
      async
      data-uid="e26316e72a"
      src="https://cs4il.kit.com/e26316e72a/index.js"
      strategy="afterInteractive"
    />
  );
}
