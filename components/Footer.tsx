import Link from 'next/link';
import { Mail, Globe, Send } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tournament', href: '/tournament' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resources', href: '/resources' },
];

const contactLinks = [
  { label: 'info@cs4il.org', href: 'mailto:info@cs4il.org', icon: Mail, external: false },
  { label: 'cs4il.org', href: 'https://cs4il.org/', icon: Globe, external: true },
  { label: 'Newsletter', href: 'https://mailchi.mp/d20f1a9f8fce/cs4il', icon: Send, external: true },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 bg-[var(--ink)] text-[var(--on-ink-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Wordmark */}
          <div>
            <p className="font-display text-3xl text-[var(--on-ink)] tracking-tight">CS4IL</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em]">
              Computer Science for Illinois
            </p>
          </div>

          {/* Site links */}
          <nav>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--on-ink-muted)]">
              {'// site'}
            </p>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--brand-on-ink)] transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--on-ink-muted)]">
              {'// contact'}
            </p>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              {contactLinks.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 hover:text-[var(--brand-on-ink)] transition-colors duration-150"
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--ink-line)]">
          <p className="font-mono text-xs text-[var(--on-ink-muted)]">
            &copy; {new Date().getFullYear()} CS4IL — Computer Science for Illinois
          </p>
        </div>
      </div>
    </footer>
  );
}
