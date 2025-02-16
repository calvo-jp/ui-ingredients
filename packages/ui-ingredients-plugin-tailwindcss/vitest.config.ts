import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    watch: false,
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'node',
    passWithNoTests: true,
  },
});
