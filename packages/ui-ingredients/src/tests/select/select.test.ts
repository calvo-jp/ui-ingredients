import {selectAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Select from './select.svelte';

const items = [
  {value: '1', label: 'Option 1'},
  {value: '2', label: 'Option 2'},
  {value: '3', label: 'Option 3'},
  {value: '4', label: 'Option 4', disabled: true},
  {value: '5', label: 'Option 5'},
];

describe.skip('Select', () => {
  it.each(getAnatomySelector(selectAnatomy))('should render %s', (selector) => {
    render(Select, {props: {items}});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Select, {props: {items}});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
