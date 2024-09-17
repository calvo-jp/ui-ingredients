import {comboboxAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Combobox from './combobox.svelte';
import {getAnatomySelector} from './utils.js';

const items = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
];

describe('Combobox', () => {
  it.each(getAnatomySelector(comboboxAnatomy))(
    'should render %s',
    (selector) => {
      render(Combobox, {items});
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it.skip('should have no a11y violations', async () => {
    const {container} = render(Combobox, {items});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
