'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const REGISTER_URL = 'https://valiant-seashore-c82.notion.site/6f4c21535b958264b2098146eff72607';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Tournament', href: '/tournament' },
    // { name: 'Timeline', href: '/timeline' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    // { name: 'Get Involved', href: '/get-involved' },
    // { name: 'Sponsors', href: '/sponsors' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--brand-line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 flex-nowrap whitespace-nowrap">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 gap-2">
            <Image
              src="/horizontal-logo.png"
              alt="CS4IL - Computer Science for Illinois"
              width={1256}
              height={716}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group font-mono text-sm uppercase tracking-wide text-[var(--muted)] hover:text-[var(--brand-text)] transition-colors duration-150"
              >
                <span className="text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  &gt;
                </span>{' '}
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm"
            >
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text)] hover:text-[var(--brand-text)] transition-colors duration-150"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden panel border-t border-[var(--brand-line)]">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-1 py-2 font-mono text-sm uppercase tracking-wide text-[var(--muted)] hover:text-[var(--brand-text)] transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
