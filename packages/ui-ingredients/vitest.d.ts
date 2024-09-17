import 'vitest';

import type {TestingLibraryMatchers} from '@testing-library/jest-dom/matchers';
import type {AxeMatchers} from 'vitest-axe/matchers';

declare module 'vitest' {
  interface Assertion<T> extends TestingLibraryMatchers<T>, AxeMatchers {}
  interface AsymmetricMatchersContaining<T>
    extends TestingLibraryMatchers<T>,
      AxeMatchers {}
}
