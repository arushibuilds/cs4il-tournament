import { ArrowRight, FileText } from 'lucide-react';
import Image from 'next/image';
import TypingTerminal from '@/components/TypingTerminal';
import ShareFlyerButton from '@/components/ShareFlyerButton';
import { PRE_REGISTER_URL } from '@/lib/constants';

const FULL_RULES_URL = 'https://docs.google.com/document/d/1Xm84bLDv0M8QJtFoemOa5dm4ebje2tePUrggLoEA1Gk/edit';

const HERO_META = [
  ['2025', '60+ teams'],
  ['Launch', 'October'],
  ['Previews', 'September'],
];

export default function Home() {
  return (
    <>
      {/* Hero — dark band */}
      <section className="bg-[var(--ink)] text-[var(--on-ink)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow text-[var(--on-ink-muted)]">
                {'// cs4il — statewide computer science'}
              </p>

              <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-3xl">
                Illinois Computer Science Tournament
              </h1>

              <TypingTerminal />

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={PRE_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Pre-Register
                  <ArrowRight size={18} />
                </a>
                <a
                  href={FULL_RULES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-on-ink inline-flex items-center justify-center gap-2"
                >
                  <FileText size={18} />
                  Rules
                </a>
              </div>

              <dl className="mt-14 border-t border-[var(--ink-line)] pt-6 grid grid-cols-1 sm:grid-cols-3 font-mono text-sm">
                {HERO_META.map(([label, value], i) => (
                  <div
                    key={label}
                    className={
                      i > 0
                        ? 'sm:pl-6 sm:border-l border-[var(--ink-line)] py-2 sm:py-0'
                        : 'py-2 sm:py-0'
                    }
                  >
                    <dt className="text-[var(--on-ink-muted)] uppercase tracking-wider text-xs">
                      {label}
                    </dt>
                    <dd className="mt-1 text-[var(--on-ink)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none lg:mx-0 space-y-4">
              <Image
                src="/tournament-flyer.png"
                alt="2026-27 Illinois Computer Science Tournament flyer — free for all IL schools, register now to win prizes and swag"
                width={1545}
                height={1999}
                sizes="(min-width: 1024px) 340px, (min-width: 768px) 448px, (min-width: 640px) 384px, 320px"
                className="w-full h-auto rounded-md border border-[var(--ink-line)] shadow-lg"
                priority
              />
              <ShareFlyerButton />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-6">
            <p className="eyebrow">{'// welcome'}</p>

            <h2 className="text-3xl md:text-4xl">
              Welcome to our 2nd annual edition!
            </h2>

            <p className="text-lg leading-relaxed max-w-[65ch]">
              Whether you are a returning team or new to the competition, we want to
              extend a warm welcome to teachers, students, administrators, or anyone
              else interested in the first and only statewide computer science
              tournament.
            </p>

            <p className="text-lg leading-relaxed max-w-[65ch]">
              Last year’s inaugural tournament featured 60 teams from schools around
              the state. We had a blast, and the top three finishers were all stellar.
              We learned a lot from designing that experience, and incorporated student
              feedback to make this year’s version even more fun and awesome!
            </p>

            <p className="text-lg leading-relaxed max-w-[65ch]">
              The tournament will officially launch in October, but you can
              pre-register at the link below. We will publish previews of the
              competition starting in September, so check back often for updates.
            </p>
          </div>

          {/* Launch note + calls to action */}
          <div className="panel rounded-md p-8 md:p-10 space-y-6">
            <p className="eyebrow">{'// timeline'}</p>

            <dl className="font-mono text-sm space-y-2">
              <div className="flex gap-4">
                <dt className="w-14 shrink-0 text-[var(--brand-text)]">SEP</dt>
                <dd className="text-[var(--muted)]">Competition previews coming this month — check back often.</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-14 shrink-0 text-[var(--brand-text)]">OCT</dt>
                <dd className="text-[var(--muted)]">Tournament officially launches. Pre-registration is open now.</dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PRE_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Pre-Register
                <ArrowRight size={18} />
              </a>
              <a
                href={FULL_RULES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                Rules
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
