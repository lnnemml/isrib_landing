/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        bg:           'var(--color-bg)',
        'bg-code':    'var(--color-bg-code)',
        'bg-accent':  'var(--color-bg-accent)',
        text:         'var(--color-text)',
        muted:        'var(--color-text-muted)',
        accent:       'var(--color-accent)',
        'accent-dark':'var(--color-accent-dark)',
        border:       'var(--color-border)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body:    'var(--font-body)',
        ui:      'var(--font-ui)',
        mono:    'var(--font-mono)',
      },
      maxWidth: {
        content: 'var(--content-width)',
      },
    },
  },
  plugins: [],
}
