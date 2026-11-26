/** @type {import('tailwindcss').Config} */

// The golden ratio, and its square root for half steps. Every size, gap and width on the site comes off these.
const PHI = 1.618
const HALF = Math.sqrt(PHI) // 1.272
const rem = (n) => `${+n.toFixed(3)}rem`

// Type: 16 px times a half step per level. phi-0 is body text; each two levels up is one full golden step.
//   phi--1 12.6 · phi-0 16 · phi-1 20.4 · phi-2 25.9 · phi-3 33 · phi-4 41.9 · phi-5 53.3 · phi-6 67.8 · phi-7 86.3
const type = (level, leading) => [rem(HALF ** level), { lineHeight: String(leading) }]

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          card: '#141414',
          border: '#252525',
          text: '#e5e5e5',
          muted: '#a3a3a3',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      // Text gets the full golden line height; headings tighten as they grow.
      fontSize: {
        'phi--1': type(-1, 1.5),
        'phi-0': type(0, PHI),
        'phi-1': type(1, 1.5),
        'phi-2': type(2, 1.3),
        'phi-3': type(3, 1.2),
        'phi-4': type(4, 1.15),
        'phi-5': type(5, 1.1),
        'phi-6': type(6, 1.05),
        'phi-7': type(7, 1),
      },
      lineHeight: {
        golden: String(PHI),
      },
      // Spacing: the Fibonacci numbers, whose neighbours approach the golden ratio. Used as p-f21, mb-f55, gap-f13.
      spacing: {
        f3: '3px',
        f5: '5px',
        f8: '8px',
        f13: '13px',
        f21: '21px',
        f34: '34px',
        f55: '55px',
        f89: '89px',
        f144: '144px',
      },
      // Widths: the 1280 px frame, then a half step down each time.
      //   phi-xl 1280 (nav, /work) · phi-lg 1006 (home sections) · phi-md 791 (project pages) · phi-sm 622 (lead paragraphs)
      maxWidth: {
        'phi-xl': '1280px',
        'phi-lg': `${Math.round(1280 / HALF)}px`,
        'phi-md': `${Math.round(1280 / PHI)}px`,
        'phi-sm': `${Math.round(1280 / PHI / HALF)}px`,
      },
      borderRadius: {
        f5: '5px',
        f8: '8px',
        f13: '13px',
      },
      aspectRatio: {
        golden: String(PHI),
      },
      // Motion runs on Fibonacci milliseconds too: 144 for hovers and colour changes (the default for every transition-*),
      // 233 for things that lift or move. The CSS drifts follow the same numbers in seconds (233, 377, 610).
      transitionDuration: {
        DEFAULT: '144ms',
        f89: '89ms',
        f144: '144ms',
        f233: '233ms',
        f377: '377ms',
      },
    },
  },
  plugins: [],
}
