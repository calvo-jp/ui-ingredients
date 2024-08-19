import defaultTheme from 'tailwindcss/defaultTheme.js';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      mono: ["'Fira Code'", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      zIndex: {
        hide: '-1',
        auto: 'auto',
        base: '0',
        docked: '10',
        dropdown: '1000',
        sticky: '1100',
        banner: '1200',
        overlay: '1300',
        modal: '1400',
        popover: '1500',
        skipLink: '1600',
        toast: '1700',
        tooltip: '1800',
      },
      data: {
        open: 'state="open"',
        closed: 'state="closed"',
        checked: 'state="checked"',
        unchecked: 'state="unchecked"',
        disabled: 'disabled',
        current: 'current',
        selected: 'selected',
      },
      aria: {
        page: 'current="page"',
        pressed: 'pressed="true"',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      keyframes: {
        'collapse-in': {
          '0%': {
            height: '0px',
          },
          '100%': {
            height: 'var(--height)',
          },
        },
        'collapse-out': {
          '0%': {
            height: 'var(--height)',
          },
          '100%': {
            height: '0px',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        'collapse-in': 'collapse-in 200ms ease-in-out',
        'collapse-out': 'collapse-out 200ms ease-in-out',
        'fade-in': 'fade-in 200ms ease-in-out',
        'fade-out': 'fade-out 200ms ease-in-out',
      },
      borderColor(theme) {
        return {
          ...theme('colors'),
          DEFAULT: theme('colors.neutral.700'),
        };
      },
    },
  },
  plugins: [],
};
