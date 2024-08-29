import {withTV} from 'tailwind-variants/transformer';

/** @type {import('tailwindcss').Config} */
export default withTV({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
});
