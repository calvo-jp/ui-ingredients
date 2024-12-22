import {withTV} from 'tailwind-variants/transformer';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default withTV({
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        muted: colors.neutral[500],
        accent: colors.indigo[500],
        success: colors.green[500],
        danger: colors.red[500],
        disabled: colors.neutral[600],
      },
      borderColor: {
        DEFAULT: colors.neutral[800],
        light: colors.neutral[700],
        lighter: colors.neutral[600],
        accent: colors.indigo[500],
        success: colors.green[500],
        danger: colors.red[500],
      },
      backgroundColor: {
        DEFAULT: colors.neutral[900],
        light: colors.neutral[800],
        lighter: colors.neutral[700],
        accent: colors.indigo[500],
        success: colors.green[500],
        danger: colors.red[500],
      },
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
        invalid: 'invalid',
        current: 'current',
        selected: 'selected',
        complete: 'complete',
        highlighted: 'highlighted',
        focus: 'focus',
        today: 'today',
        'in-range': 'in-range',
        'range-start': 'range-start',
        'range-end': 'range-end',
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
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-out-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-out-right': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'collapse-in': 'collapse-in 200ms ease-in-out',
        'collapse-out': 'collapse-out 200ms ease-in-out',
        'fade-in': 'fade-in 200ms ease-in-out',
        'fade-out': 'fade-out 200ms ease-in-out',
        'slide-in-left': 'slide-in-left 200ms ease-in-out',
        'slide-out-left': 'slide-out-left 200ms ease-in-out',
        'slide-in-right': 'slide-in-right 200ms ease-in-out',
        'slide-out-right': 'slide-out-right 200ms ease-in-out',
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        '.overflow-y-invisible': {
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.overflow-x-invisible': {
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
});
