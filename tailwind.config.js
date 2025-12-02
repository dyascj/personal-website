/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
            color: '#374151', // gray-700 for light mode
            maxWidth: 'none',
            img: {
              borderRadius: '0.75rem', // rounded-xl
              border: '1px solid rgba(229, 231, 235, 1)', // gray-200
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            h1: {
              color: '#111827', // gray-900
            },
            h2: {
              color: '#111827', // gray-900
            },
            h3: {
              color: '#111827', // gray-900
            },
            h4: {
              color: '#111827', // gray-900
            },
            strong: {
              color: '#111827', // gray-900
            },
            code: {
              color: '#111827', // gray-900
              backgroundColor: '#f3f4f6', // gray-100
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#f9fafb', // gray-50
              border: '1px solid rgba(229, 231, 235, 1)', // gray-200
              borderRadius: '0.75rem',
              padding: '1.5rem',
              overflow: 'auto',
              color: '#111827', // gray-900 - ensures text inside pre is dark
            },
            'pre code': {
              color: '#111827', // gray-900 - explicit color for code inside pre
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              fontSize: '0.875rem',
            },
            a: {
              color: '#2563eb', // blue-600
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#1d4ed8', // blue-700
              },
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            blockquote: {
              borderLeftColor: '#d1d5db', // gray-300
              color: '#6b7280', // gray-500
            },
          },
        },
        invert: {
          css: {
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: 'none',
            h1: { color: '#ffffff' },
            h2: { color: '#ffffff' },
            h3: { color: '#ffffff' },
            h4: { color: '#ffffff' },
            strong: { color: '#ffffff' },
            code: {
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              overflow: 'auto',
              color: '#ffffff', // white - ensures text inside pre is light
            },
            'pre code': {
              color: '#ffffff', // white - explicit color for code inside pre
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              fontSize: '0.875rem',
            },
            img: {
              borderRadius: '0.75rem',
              border: '1px solid rgba(255,255,255,0.1)',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            a: {
              color: '#60a5fa', // blue-400
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#93c5fd', // blue-300
              },
            },
            blockquote: {
              borderLeftColor: 'rgba(255, 255, 255, 0.3)',
              color: 'rgba(255, 255, 255, 0.6)',
            },
          }
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
