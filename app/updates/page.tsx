const PRE_REGISTER_URL = 'https://valiant-seashore-c82.notion.site/6f4c21535b958264b2098146eff72607';

type UpdateBlock = string | { cta: string; href: string };

type Update = {
  date: string; // ISO yyyy-mm-dd
  body: UpdateBlock[];
};

const UPDATES: Update[] = [
  {
    date: '2026-09-15',
    body: [
      'Dear ICST coaches,',
      'Welcome back!',
      `Hope this message finds you off to a good start for the 2026-27 academic year! Our CS tournament returns for its 2nd year in October. Thank you again for participating in its inaugural year. We hope your students had fun and were challenged with one or more of the activities. This year, we took your feedback to heart and simplified the format, while keeping the overall tournament structure intact.`,
      `We are also going to give you more details upfront this time around so that your teams can plan accordingly. We are also doing away with Kattis and points-based scoring, in favor of badges. Finally, teams will be placed into alliances, so that everyone can compete and contribute to the cause regardless of ability. More details will be shared in early October.`,
      `Until then, you can pre-register your school at the link below. You don't need to have all your team rosters set right away. We'd just like to know you're planning to join us again this fall!`,
      { cta: 'Pre-Register Your School', href: PRE_REGISTER_URL },
      'Happy computing!',
      'Team CS4IL',
    ],
  },
];

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Updates() {
  const sorted = [...UPDATES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <p className="eyebrow">{'// updates'}</p>
          <h1 className="text-4xl md:text-5xl">Updates</h1>
        </div>

        <div className="space-y-8">
          {sorted.map((update) => (
            <article
              key={update.date}
              className="panel rounded-md p-8 md:p-10 space-y-5"
            >
              <p className="eyebrow">{formatDate(update.date)}</p>

              <div className="space-y-4">
                {update.body.map((block, i) => {
                  if (typeof block === 'object') {
                    return (
                      <a
                        key={i}
                        href={block.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center"
                      >
                        {block.cta}
                      </a>
                    );
                  }

                  const isSignoff = i === update.body.length - 1;

                  return (
                    <p
                      key={i}
                      className={
                        isSignoff
                          ? 'text-lg font-semibold'
                          : 'text-lg leading-relaxed max-w-[65ch]'
                      }
                    >
                      {block}
                    </p>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
