import '@testing-library/jest-dom/vitest';
import 'vitest-axe/extend-expect';
import 'vitest-canvas-mock';

import {faker} from '@faker-js/faker';
import {cleanup} from '@testing-library/svelte';
import {JSDOM} from 'jsdom';
import ResizeObserver from 'resize-observer-polyfill';
import {vi} from 'vitest';

const {window} = new JSDOM();

vi.stubGlobal('ResizeObserver', ResizeObserver);

window['ResizeObserver'] = ResizeObserver;
window.URL.createObjectURL = () => faker.image.avatar();

Object.assign(global, {window, document: window.document});

afterEach(() => {
  cleanup();
});
