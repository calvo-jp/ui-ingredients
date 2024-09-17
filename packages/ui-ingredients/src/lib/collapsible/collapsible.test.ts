import {render} from '@testing-library/svelte';
import Collapsible from './collapsible.test.svelte';
import {collapsibleAnatomy} from './index.js';

const parts = Object.values(collapsibleAnatomy.build()).reduce<string[]>(
  (l, o) => {
    return [
      ...l,
      `[data-scope='${o.attrs['data-scope']}'][data-part='${o.attrs['data-part']}']`,
    ];
  },
  [],
);

describe('Collapsible', () => {
  it.each(parts)('should render %s', (selector) => {
    render(Collapsible);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });
});
