import type { Metadata } from 'next'
import { DM_Serif_Display, Source_Serif_4, DM_Sans, JetBrains_Mono } from 'next/font/google'
import GoogleTagManager from '@/components/GoogleTagManager'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ui',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ISRIB Research',
    template: '%s | ISRIB Research',
  },
  description: 'Independent research resource on ISRIB A15 and the Integrated Stress Response pathway.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`
        ${dmSerifDisplay.variable}
        ${sourceSerif4.variable}
        ${dmSans.variable}
        ${jetbrainsMono.variable}
      `}
    >
      <body>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
