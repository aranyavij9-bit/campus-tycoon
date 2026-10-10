/** @type {import('tailwindcss').Config} */
// Palette follows aranyavij.com: soft blue and pink on cream, navy text.
const blue = {
  50: '#EEF5FF',
  100: '#DCEBFF',
  200: '#BCD7FF',
  300: '#94BEFF',
  400: '#6DA2FA',
  500: '#4F8CF7',
  600: '#4F8CF7',
  700: '#3A72DE',
  800: '#2F5CB8',
  900: '#253F74',
  950: '#1A2A4D',
};
const pink = {
  50: '#FFF5F9',
  100: '#FFE3EC',
  200: '#FFCCDD',
  300: '#FFB6D0',
  400: '#FF8FB8',
  500: '#F2709F',
  600: '#DE5A8A',
  700: '#C24774',
  800: '#9C3A5E',
  900: '#7A2F4B',
  950: '#45172A',
};
const sage = {
  50: '#EFF9F4',
  100: '#D8F1E5',
  200: '#B4E3CD',
  300: '#8ED2B3',
  400: '#5DBB98',
  500: '#4AA884',
  600: '#3B8C6D',
  700: '#2F7158',
  800: '#285A47',
  900: '#224A3B',
  950: '#102920',
};
const emerald = {
  50: '#EDFAF5',
  100: '#D3F3E6',
  200: '#A9E6CF',
  300: '#74D3B2',
  400: '#45BC95',
  500: '#28A27D',
  600: '#1E8466',
  700: '#1B6A54',
  800: '#195545',
  900: '#17463A',
  950: '#0A2820',
};
const amber = {
  50: '#FFF6EC',
  100: '#FFEAD2',
  200: '#FDD3A6',
  300: '#FAB877',
  400: '#F6A35C',
  500: '#F6A35C',
  600: '#C96F28',
  700: '#A15622',
  800: '#7F4520',
  900: '#663A1D',
  950: '#3A1E0C',
};
const rose = {
  50: '#FFF1F4',
  100: '#FFE0E8',
  200: '#FFC2D2',
  300: '#FF97B3',
  400: '#F76D93',
  500: '#E8507A',
  600: '#CC3A63',
  700: '#A82E50',
  800: '#8A2945',
  900: '#73263D',
  950: '#40101F',
};
const lavender = {
  50: '#F5F2FE',
  100: '#EAE4FD',
  200: '#D6CCFA',
  300: '#BCADF6',
  400: '#9C88F0',
  500: '#8670E6',
  600: '#6F57CF',
  700: '#5A45AB',
  800: '#4A3A8A',
  900: '#3D3270',
  950: '#231C42',
};
// Navy-tinted neutrals. 50 is the cream page background.
const navy = {
  50: '#FBF8F5',
  100: '#F3F0EF',
  200: '#E7E4EA',
  300: '#CDCFDE',
  400: '#A0A6C2',
  500: '#7A82A6',
  600: '#5B6590',
  700: '#424C7A',
  800: '#30395E',
  900: '#1F2850',
  950: '#141A35',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Classes built from strings at runtime (MetricBar, CampusMap tiles)
  safelist: [
    { pattern: /^bg-(primary|secondary|accent|success|warning|error)-500$/ },
    { pattern: /^bg-(primary|secondary|accent|neutral)-100$/ },
  ],
  theme: {
    extend: {
      colors: {
        // Primary: brand blue
        primary: blue,
        // Secondary: soft pink accent
        secondary: pink,
        // Accent: sage campus green
        accent: sage,
        success: emerald,
        warning: amber,
        error: rose,
        neutral: navy,
        slate: navy,
        gray: navy,
        blue,
        sky: blue,
        pink: pink,
        blush: pink,
        emerald,
        green: emerald,
        amber,
        orange: amber,
        yellow: {
          ...amber,
          400: '#F4C152',
          500: '#F4C152',
        },
        red: rose,
        rose,
        violet: lavender,
        purple: lavender,
        indigo: lavender,
        cyan: {
          50: '#EEF8FC',
          100: '#D7EFF8',
          400: '#52B6D9',
          500: '#52B6D9',
          600: '#3A97B9',
          700: '#2F7A96',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31, 40, 80, 0.04), 0 10px 28px -14px rgba(31, 40, 80, 0.12)',
        lift: '0 2px 4px rgba(31, 40, 80, 0.05), 0 16px 36px -16px rgba(31, 40, 80, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.97)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
