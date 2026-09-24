import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About | CS4IL',
  description: 'Challenges, badges, and prizes for the 2026-27 Illinois Computer Science Tournament.',
};

type Challenge = {
  index: string;
  slug: string;
  title: string;
  description: ReactNode;
  badges: string[];
  resources?: string[];
};

const HOW_IT_WORKS = [
  'Submissions live on a private Padlet site: one per team, link provided after enrollment.',
  'Padlet works like a Google Classroom page: post notes, screenshots, video, and links as proof of work.',
  'Only CS4IL judges can view your Padlet; it stays private from the public.',
  'Complete a phase, earn its badge(s). More badges improve your shot at the overall prize.',
  'Work continues all year on your own schedule. Deadlines go to coaches and post here.',
];

const CHALLENGES: Challenge[] = [
  {
    index: '01',
    slug: 'minecraft-velocity-prize',
    title: 'Minecraft Velocity Prize',
    description: (
      <>
        Starting in October, Microsoft releases its new Minecraft world,{' '}
        <strong className="font-semibold text-[var(--text)]">Velocity Prize</strong>. Teams
        submit a timed run through the world to locate a hidden flag, using{' '}
        <strong className="font-semibold text-[var(--text)]">Python</strong> or{' '}
        <strong className="font-semibold text-[var(--text)]">JavaScript</strong> inside Minecraft
        Education Edition, or other methods including AI-assisted companions.
      </>
    ),
    badges: ['Fastest team time', 'Fastest alliance time (avg. of all teams in an alliance)', 'Worldwide Top 100'],
    resources: ['Minecraft Education Edition (licenses available on request)'],
  },
  {
    index: '02',
    slug: 'processing-code-yourself',
    title: 'Processing / Code Yourself',
    description: (
      <>
        Teams submit generative art built with{' '}
        <strong className="font-semibold text-[var(--text)]">P5.js</strong>, an open-source,
        beginner-friendly language for 2D and 3D artwork also used in national competitions like{' '}
        <strong className="font-semibold text-[var(--text)]">Code Yourself</strong>. Several badges
        are earnable here, so there's more than one way to score.
      </>
    ),
    badges: [
      'Submit to Code Yourself competition (must meet criteria)',
      'Create a playable 2D or 3D game using Processing',
      'Collaboration Badge (details TBD)',
      'Code Yourself National Finalist',
    ],
    resources: ['Processing software: OpenProcessing or equivalent platform'],
  },
  {
    index: '03',
    slug: 'hardware-hack-cybersecurity',
    title: 'Hardware Hack / Cybersecurity',
    description: (
      <>
        Each team gets a custom{' '}
        <strong className="font-semibold text-[var(--text)]">printed circuit board (PCB)</strong>{' '}
        designed by CS4IL, packed with puzzles to decode. Figure out how to boot the card and load
        programs onto it, then show off your hardware badges at the end-of-season showcase or on
        your Padlet.
      </>
    ),
    badges: ['PowerOn Badge', 'BootUp Badge', 'GameOn Badge', 'AI Badge', 'End to End Badge'],
  },
];

const OTHER_BADGES = [
  'Creativity Badge',
  'Unique Solution Badge',
  'Team Spirit Badge',
  'FirstTimer Badge',
  'Community Helper Badge',
];

const PRIZES = [
  { place: '1st', amount: '$1000' },
  { place: '2nd', amount: '$500' },
  { place: '3rd', amount: '$250' },
];

export default function About() {
  return (
    <>
      {/* Header - dark band, matches homepage hero */}
      <section className="bg-[var(--ink)] text-[var(--on-ink)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20">
          <p className="eyebrow text-[var(--on-ink-muted)]">{'// about: season 2026-27'}</p>

          <h1 className="mt-6 text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Challenges
          </h1>

          <p className="mt-5 font-mono text-lg md:text-xl text-[var(--brand-on-ink)]">
            &gt; three phases. one badge board. earn as many as you can.
            <span aria-hidden="true" className="cursor-blink">_</span>
          </p>

          {/* How it works - scannable, replaces a wall of prose */}
          <dl className="mt-14 border-t border-[var(--ink-line)] pt-6 space-y-3 font-mono text-sm max-w-2xl">
            {HOW_IT_WORKS.map((line) => (
              <div key={line} className="flex gap-3">
                <dt aria-hidden="true" className="shrink-0 text-[var(--brand-on-ink)]">
                  &gt;
                </dt>
                <dd className="text-[var(--on-ink-muted)] leading-relaxed">{line}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Quick nav */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow">{'// jump to'}</p>
          <nav className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-6 font-mono text-sm">
            {CHALLENGES.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="group inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--brand-text)] transition-colors duration-150"
              >
                <span className="text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  &gt;
                </span>
                <span className="text-[var(--brand-text)]">[{c.index}]</span>
                {c.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {CHALLENGES.map((challenge) => (
            <article
              key={challenge.slug}
              id={challenge.slug}
              className="panel rounded-md p-8 md:p-10 space-y-6 scroll-mt-24"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-[var(--brand-text)]">[{challenge.index}]</span>
                <h2 className="text-2xl md:text-3xl">{challenge.title}</h2>
              </div>

              <p className="text-lg leading-relaxed max-w-[65ch]">{challenge.description}</p>

              <div className="space-y-2">
                <p className="eyebrow">{'// earnable badges'}</p>
                <div className="flex flex-wrap gap-2">
                  {challenge.badges.map((badge) => (
                    <span key={badge} className="tag">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {challenge.resources && (
                <div className="space-y-2">
                  <p className="eyebrow">{'// resources needed'}</p>
                  <div className="flex flex-wrap gap-2">
                    {challenge.resources.map((resource) => (
                      <span key={resource} className="tag">
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}

          {/* Other badges */}
          <div className="panel rounded-md p-8 md:p-10 space-y-4">
            <p className="eyebrow">{'// cross-challenge badges'}</p>
            <p className="text-[var(--muted)]">Earnable on top of any challenge above.</p>
            <div className="flex flex-wrap gap-2">
              {OTHER_BADGES.map((badge) => (
                <span key={badge} className="tag">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes + judging - dark band */}
      <section className="bg-[var(--ink)] text-[var(--on-ink)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
          <div>
            <p className="eyebrow text-[var(--on-ink-muted)]">{'// results'}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Prizes</h2>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 font-mono text-sm border-t border-[var(--ink-line)] pt-6">
            {PRIZES.map(({ place, amount }, i) => (
              <div
                key={place}
                className={
                  i > 0
                    ? 'sm:pl-6 sm:border-l border-[var(--ink-line)] py-2 sm:py-0'
                    : 'py-2 sm:py-0'
                }
              >
                <dt className="text-[var(--on-ink-muted)] uppercase tracking-wider text-xs">
                  {place} place
                </dt>
                <dd className="mt-1 text-3xl text-[var(--on-ink)] font-display">{amount}</dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-[var(--ink-line)] pt-6 space-y-3">
            <p className="font-mono text-sm text-[var(--brand-on-ink)]">&gt; judging</p>
            <p className="text-[var(--on-ink-muted)] leading-relaxed max-w-[65ch]">
              Judged solely on merit, quality, completeness, and creativity by an
              independent panel designated by CS4IL. Winners announced spring 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Additional challenges */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="panel rounded-md p-8 md:p-10 space-y-3">
            <p className="eyebrow">{'// additional challenges'}</p>
            <p className="text-[var(--muted)] leading-relaxed max-w-[65ch]">
              New challenges and badges may be added throughout the year, announced
              to coaches and posted here. Some will be optional or local-teams-only
              and won't affect overall standings; those will always be labeled
              clearly when posted.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
