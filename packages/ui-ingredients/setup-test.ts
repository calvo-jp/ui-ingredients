import '@testing-library/jest-dom/vitest';
import 'vitest-axe/extend-expect.js';
import 'vitest-canvas-mock';

import ResizeObserver from 'resize-observer-polyfill';
import {expect, vi} from 'vitest';
import * as matchers from 'vitest-axe/matchers.js';

vi.stubGlobal('ResizeObserver', ResizeObserver);
expect.extend(matchers);
