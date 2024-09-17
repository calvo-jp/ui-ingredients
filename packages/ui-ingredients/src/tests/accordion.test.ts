import {accordionAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import Accordion from './accordion.svelte';
import {getAnatomySelector} from './utils.js';

const items = [
  {value: '1', label: 'Item 1', content: 'Content 1'},
  {value: '2', label: 'Item 2', content: 'Content 2'},
  {value: '3', label: 'Item 3', content: 'Content 3'},
];

describe('Accordion', () => {
  it.each(getAnatomySelector(accordionAnatomy))(
    'should render %s',
    (selector) => {
      render(Accordion, {items});
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );
});
