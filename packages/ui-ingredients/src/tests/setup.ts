import '@testing-library/jest-dom/vitest';
import 'vitest-axe/extend-expect';
import 'vitest-canvas-mock';

import {JSDOM} from 'jsdom';
import ResizeObserver from 'resize-observer-polyfill';
import {expect, vi} from 'vitest';
import {toHaveNoViolations} from 'vitest-axe/matchers';

const {window} = new JSDOM();

vi.stubGlobal('ResizeObserver', ResizeObserver);
window['ResizeObserver'] = ResizeObserver;
expect.extend({toHaveNoViolations});
