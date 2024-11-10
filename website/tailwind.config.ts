import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      mono: ["'Fira Code'", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [typography, aspectRatio],
};

export default config;
