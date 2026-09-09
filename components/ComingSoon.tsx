import { Mail, Globe, Send } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section className="min-h-[60vh] flex items-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto w-full space-y-8">
        <div className="space-y-4">
          <p className="eyebrow">{'// status'}</p>

          <h1 className="text-4xl md:text-6xl leading-[1.05]">More Info</h1>

          <p className="font-mono text-lg text-[var(--brand-text)]">
            &gt; loading…
            <span aria-hidden="true" className="cursor-blink">_</span>
          </p>
        </div>

        <div className="panel rounded-md p-8 md:p-10 space-y-4">
          <p className="eyebrow">{'// contact'}</p>

          <p className="text-[var(--muted)]">
            Have a question in the meantime? We&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-3 font-mono text-sm">
            <a
              href="mailto:info@cs4il.org"
              className="inline-flex items-center gap-2 text-[var(--brand-text)] hover:underline"
            >
              <Mail size={16} />
              info@cs4il.org
            </a>
            <a
              href="https://cs4il.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--brand-text)] hover:underline"
            >
              <Globe size={16} />
              Visit our official website
            </a>
            <a
              href="https://mailchi.mp/d20f1a9f8fce/cs4il"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--brand-text)] hover:underline"
            >
              <Send size={16} />
              Subscribe to our newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
