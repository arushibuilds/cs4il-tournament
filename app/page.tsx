import { ArrowRight } from 'lucide-react';
// import { FileText } from 'lucide-react'; // re-enable with the Full Rules button
import TypingTerminal from '@/components/TypingTerminal';

/* TODO: the href is a placeholder — swap in the real pre-registration form when it exists. */
const PRE_REGISTER_URL = '#';
// const FULL_RULES_URL = '#'; // re-enable with the Full Rules button (needs the full-rules doc)

const HERO_META = [
  ['60 teams', '2025 inaugural'],
  ['Launch', 'October'],
  ['Previews', 'September'],
];

export default function Home() {
  return (
    <>
      {/* Hero — dark band */}
      <section className="bg-[var(--ink)] text-[var(--on-ink)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow text-[var(--on-ink-muted)]">
            {'// cs4il — statewide computer science — est. 2025'}
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            Illinois Computer Science Tournament
          </h1>

          <TypingTerminal />

          <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-[var(--on-ink-muted)]">
            A Game Within A Game
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={PRE_REGISTER_URL}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Pre-Register
              <ArrowRight size={18} />
            </a>
            {/* Full Rules — hidden until the full-rules doc is ready
            <a
              href={FULL_RULES_URL}
              className="btn-on-ink inline-flex items-center justify-center gap-2"
            >
              <FileText size={18} />
              Full Rules
            </a>
            */}
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
      </section>

      {/* Welcome */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-6">
            <p className="eyebrow">{'// welcome'}</p>

            <h2 className="text-3xl md:text-4xl">
              Welcome to our 2nd annual edition
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
          </div>

          {/* Launch note + calls to action */}
          <div className="panel rounded-md p-8 md:p-10 space-y-6">
            <p className="eyebrow">{'// timeline'}</p>

            <dl className="font-mono text-sm space-y-2">
              <div className="flex gap-4">
                <dt className="w-14 shrink-0 text-[var(--brand-text)]">SEP</dt>
                <dd className="text-[var(--muted)]">Competition previews published — check back often.</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-14 shrink-0 text-[var(--brand-text)]">OCT</dt>
                <dd className="text-[var(--muted)]">Tournament officially launches. Pre-registration is open now.</dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PRE_REGISTER_URL}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Pre-Register
                <ArrowRight size={18} />
              </a>
              {/* Full Rules — hidden until the full-rules doc is ready
              <a
                href={FULL_RULES_URL}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                Full Rules
              </a>
              */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
