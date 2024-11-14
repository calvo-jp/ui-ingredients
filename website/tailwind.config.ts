import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import scrollbar from 'tailwind-scrollbar';
import {withTV} from 'tailwind-variants/transformer';
import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = withTV({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["'Geist'", ...defaultTheme.fontFamily.sans],
      mono: ["'Geist Mono'", ...defaultTheme.fontFamily.mono],
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
        'collapse-in': 'collapse-in 150ms ease-in-out',
        'collapse-out': 'collapse-out 150ms ease-in-out',
        'fade-in': 'fade-in 150ms ease-in-out',
        'fade-out': 'fade-out 150ms ease-in-out',
        'slide-in-left': 'slide-in-left 150ms ease-in-out',
        'slide-out-left': 'slide-out-left 150ms ease-in-out',
        'slide-in-right': 'slide-in-right 150ms ease-in-out',
        'slide-out-right': 'slide-out-right 150ms ease-in-out',
      },
    },
  },
  plugins: [typography, aspectRatio, scrollbar],
});

export default config;
