'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

const FLYER_PATH = '/tournament-flyer.png';
const FLYER_FILENAME = 'cs4il-tournament-flyer.png';
const SHARE_TITLE = 'Illinois Computer Science Tournament';
const SHARE_TEXT = 'Check out the 2026-27 Illinois Computer Science Tournament — free for all IL schools!';

function downloadFlyer() {
  const link = document.createElement('a');
  link.href = FLYER_PATH;
  link.download = FLYER_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function ShareFlyerButton() {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const flyerUrl = `${window.location.origin}${FLYER_PATH}`;

    // Prefer sharing the actual image file where the OS share sheet supports it.
    try {
      const response = await fetch(FLYER_PATH);
      const blob = await response.blob();
      const file = new File([blob], FLYER_FILENAME, { type: blob.type });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: SHARE_TITLE, text: SHARE_TEXT });
        return;
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
    }

    // Next, fall back to sharing a link (desktop share sheets, e.g. Edge/Chrome on Windows).
    if (navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: flyerUrl });
        return;
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
      }
    }

    // No share API available — copy a link they can paste, or download the image.
    try {
      await navigator.clipboard.writeText(flyerUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      downloadFlyer();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn-on-ink inline-flex items-center justify-center gap-2 w-full"
    >
      {copied ? <Check size={18} /> : <Share2 size={18} />}
      {copied ? 'Link Copied!' : 'Share Flyer'}
    </button>
  );
}
