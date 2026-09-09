'use client';

import { useEffect, useState } from 'react';

const TERMINAL_TEXT = 'ICST';
const TYPE_DELAY_MS = 350;
const TYPE_SPEED_MS = 130;

export default function TypingTerminal() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let characterIndex = 0;
    let typingInterval: number | undefined;

    const startTyping = window.setTimeout(() => {
      typingInterval = window.setInterval(() => {
        characterIndex += 1;
        setTypedText(TERMINAL_TEXT.slice(0, characterIndex));

        if (characterIndex === TERMINAL_TEXT.length) {
          window.clearInterval(typingInterval);
        }
      }, TYPE_SPEED_MS);
    }, TYPE_DELAY_MS);

    return () => {
      window.clearTimeout(startTyping);
      if (typingInterval !== undefined) {
        window.clearInterval(typingInterval);
      }
    };
  }, []);

  return (
    <p
      aria-label={`&gt; ${TERMINAL_TEXT}`}
      className="mt-5 font-mono text-2xl md:text-3xl text-[var(--brand-on-ink)]"
    >
      <span aria-hidden="true">&gt; {typedText}</span>
      <span aria-hidden="true" className="cursor-blink">_</span>
    </p>
  );
}
