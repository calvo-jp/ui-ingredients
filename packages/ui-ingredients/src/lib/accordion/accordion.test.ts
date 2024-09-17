import {render} from '@testing-library/svelte';
import Accordion from './accordion.test.svelte';
import {accordionAnatomy} from './index.js';

const parts = Object.values(accordionAnatomy.build()).reduce<string[]>(
  (l, o) => {
    return [
      ...l,
      `[data-scope='${o.attrs['data-scope']}'][data-part='${o.attrs['data-part']}']`,
    ];
  },
  [],
);

const items = [
  {value: '1', label: 'Item 1', content: 'Content 1'},
  {value: '2', label: 'Item 2', content: 'Content 2'},
  {value: '3', label: 'Item 3', content: 'Content 3'},
];

describe('Accordion', () => {
  it.each(parts)('should render %s', (selector) => {
    render(Accordion, {items});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });
});
