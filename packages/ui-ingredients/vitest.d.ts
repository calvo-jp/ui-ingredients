import 'vitest';

import type {TestingLibraryMatchers} from '@testing-library/jest-dom/matchers';
import type {AxeMatchers} from 'vitest-axe/matchers';

declare module 'vitest' {
  interface Assertion extends TestingLibraryMatchers<any, any>, AxeMatchers {}

  interface AsymmetricMatchersContaining
    extends TestingLibraryMatchers<any, any>,
      AxeMatchers {}
}
