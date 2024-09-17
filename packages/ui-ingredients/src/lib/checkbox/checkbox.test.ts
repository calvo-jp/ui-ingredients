import {render} from '@testing-library/svelte';
import Checkbox from './checkbox.test.svelte';
import {checkboxAnatomy} from './index.js';

const parts = Object.values(checkboxAnatomy.build()).reduce<string[]>(
  (l, o) => {
    return [
      ...l,
      `[data-scope='${o.attrs['data-scope']}'][data-part='${o.attrs['data-part']}']`,
    ];
  },
  [],
);

describe('Checkbox', () => {
  it.each(parts)('should render %s', (selector) => {
    render(Checkbox);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });
});
