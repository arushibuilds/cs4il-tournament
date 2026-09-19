'use client';

import { useEffect, useState } from 'react';

const TERMINAL_TEXT = 'A Game Within A Game';
const TYPE_DELAY_MS = 350;
const TYPE_SPEED_MS = 130;
const DELETE_SPEED_MS = 70;
const PAUSE_AFTER_TYPE_MS = 2500;
const PAUSE_AFTER_DELETE_MS = 400;

export default function TypingTerminal() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedText(TERMINAL_TEXT);
      return;
    }

    let cancelled = false;
    const timeouts: number[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeouts.push(window.setTimeout(resolve, ms));
      });

    const run = async () => {
      await wait(TYPE_DELAY_MS);

      while (!cancelled) {
        for (let i = 1; i <= TERMINAL_TEXT.length; i++) {
          if (cancelled) return;
          setTypedText(TERMINAL_TEXT.slice(0, i));
          await wait(TYPE_SPEED_MS);
        }

        await wait(PAUSE_AFTER_TYPE_MS);

        for (let i = TERMINAL_TEXT.length - 1; i >= 0; i--) {
          if (cancelled) return;
          setTypedText(TERMINAL_TEXT.slice(0, i));
          await wait(DELETE_SPEED_MS);
        }

        await wait(PAUSE_AFTER_DELETE_MS);
      }
    };

    run();

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <p
      aria-label={`> ${TERMINAL_TEXT}`}
      className="mt-5 font-mono text-2xl md:text-3xl text-[var(--brand-on-ink)]"
    >
      <span aria-hidden="true">&gt; {typedText}</span>
      <span aria-hidden="true" className="cursor-blink">_</span>
    </p>
  );
}
