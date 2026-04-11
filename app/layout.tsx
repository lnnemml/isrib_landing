import type { Metadata } from 'next';
import './globals.css';
import GoogleTagManager from '@/components/GoogleTagManager';

export const metadata: Metadata = {
  title: 'ISRIB Research',
  description: 'Independent scientific resource on ISRIB, ISR pathway, and cognitive enhancement.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}
