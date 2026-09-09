import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  // Baked in at build time. Set NEXT_PUBLIC_SITE_URL in the deploy environment so
  // Open Graph / Twitter image URLs resolve absolutely instead of against localhost.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'CS4IL - Computer Science for Illinois',
  description: 'Computer Science for Illinois.',
  keywords: ['CS4IL', 'Illinois'],
  authors: [{ name: 'CS4IL' }],
  openGraph: {
    title: 'CS4IL - Computer Science for Illinois',
    description: 'Computer Science for Illinois.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CS4IL - Computer Science for Illinois',
    description: 'Computer Science for Illinois.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DS7XFCSFE5"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DS7XFCSFE5');`}
        </Script>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}