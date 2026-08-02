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
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        // The registration modal's entrance — a light pop rather than a slide.
        'modal-in': {
          from: { opacity: '0', transform: 'scale(0.94) translateY(8px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        // The submit button's spinner morphing into a checkmark on success.
        'check-pop': {
          '0%': { opacity: '0', transform: 'scale(0.4)' },
          '65%': { opacity: '1', transform: 'scale(1.18)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.25s ease-out both',
        'modal-in': 'modal-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) both',
        'check-pop': 'check-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
    },
  },
  plugins: [],
}
