import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ISRIB A15 - Release Your Brain\'s Hidden Potential',
  description: 'The science-backed compound that reverses cognitive decline by targeting the root cause: your brain\'s stress response.',
  keywords: 'ISRIB, cognitive enhancement, nootropics, memory, focus, brain fog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
