import {render} from '@testing-library/svelte';
import Clipboard from './clipboard.test.svelte';
import {clipboardAnatomy} from './index.js';

const parts = Object.values(clipboardAnatomy.build()).reduce<string[]>(
  (l, o) => {
    return [
      ...l,
      `[data-scope='${o.attrs['data-scope']}'][data-part='${o.attrs['data-part']}']`,
    ];
  },
  [],
);

describe('Clipboard', () => {
  it.each(parts)('should render %s', (selector) => {
    render(Clipboard);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });
});
