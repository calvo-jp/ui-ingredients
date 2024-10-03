import {menuAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Menu from './menu.svelte';
import {getAnatomySelector} from './utils.js';

const items = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
];

describe('Menu', () => {
  it.each(getAnatomySelector(menuAnatomy))('should render %s', (selector) => {
    render(Menu, {props: {items}});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Menu, {props: {items}});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
