import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calendar | CS4IL',
  description: 'Upcoming dates and deadlines for the Illinois Computer Science Tournament.',
};

const CALENDAR_ID = 'c_8f72fffa86df743ca4705f197f60b688c745997a87ab198c126079a985e2f81a@group.calendar.google.com';
const CALENDAR_TZ = 'America/Chicago';
const EMBED_SRC = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ID)}&ctz=${encodeURIComponent(CALENDAR_TZ)}`;
const OPEN_SRC = `https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(CALENDAR_ID)}`;

export default function Calendar() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <p className="eyebrow">{'// calendar'}</p>
          <h1 className="text-4xl md:text-5xl">Calendar</h1>
          <p className="text-lg leading-relaxed max-w-[65ch] text-[var(--muted)]">
            Tournament dates, deadlines, and previews, all in one place. Check back
            often, or add it to your own calendar below.
          </p>
        </div>

        <div className="panel rounded-md p-3 sm:p-4">
          <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: '800 / 600' }}>
            <iframe
              src={EMBED_SRC}
              title="CS4IL Tournament Calendar"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              scrolling="no"
            />
          </div>
        </div>

        <a
          href={OPEN_SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center justify-center gap-2"
        >
          <ExternalLink size={18} />
          Open in Google Calendar
        </a>
      </div>
    </section>
  );
}
