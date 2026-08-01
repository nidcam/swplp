/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme — matches the reference layout's white/soft-mint page.
        page: '#FFFFFF',
        mint: '#F1FAF4',
        card: '#FFFFFF',
        line: '#E4EDEA',
        heading: '#12261E',
        muted: '#5B6B64',
        // Primary CTA — green, per reference. Darker than the reference's bright
        // green so white button text and text-accent labels both clear 4.5:1
        // against every point of the gradient / against white.
        accent: {
          DEFAULT: '#14793A',
          dark: '#0C5C28',
          soft: '#E6F7EC',
        },
        // Info badges, coach stats, section sub-headings.
        info: {
          DEFAULT: '#2563EB',
          soft: '#EAF1FE',
        },
        // "Before" column, warning strip, star ratings' red accents.
        danger: {
          DEFAULT: '#DC2626',
          soft: '#FDECEC',
        },
        gold: '#F5A623',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
        btn: '8px',
      },
      backgroundImage: {
        // Both stops individually clear >= 5:1 for white text — no lighter
        // "highlight" stop, since a lighter green there would dip under 4.5:1.
        'accent-grad': 'linear-gradient(135deg, #14793A 0%, #0C5C28 100%)',
        'danger-grad': 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
        'info-grad': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
        'mint-grad': 'linear-gradient(180deg, #F1FAF4 0%, #E8F6EC 100%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(18, 38, 30, 0.05), 0 8px 24px rgba(18, 38, 30, 0.06)',
        lift: '0 2px 6px rgba(18, 38, 30, 0.06), 0 18px 44px rgba(18, 38, 30, 0.1)',
        bar: '0 -8px 28px rgba(18, 38, 30, 0.12)',
      },
      maxWidth: {
        video: '860px',
        card: '760px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
