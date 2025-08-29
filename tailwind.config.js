/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        vercel: {
          card: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
          accent: 'rgba(255, 255, 255, 0.2)',
        },
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgba(255, 255, 255, 0.7)',
            img: {
              borderRadius: '0.75rem', // rounded-xl
              border: '1px solid rgba(255,255,255,0.1)',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            code: {
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
            },
            pre: {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              overflow: 'auto',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
          },
        },
        invert: {
          css: {
            color: 'rgba(255, 255, 255, 0.7)',
            h1: { color: '#ffffff' },
            h2: { color: '#ffffff' },
            h3: { color: '#ffffff' },
            h4: { color: '#ffffff' },
            strong: { color: '#ffffff' },
            code: {
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            img: {
              borderRadius: '0.75rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }
          }
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
