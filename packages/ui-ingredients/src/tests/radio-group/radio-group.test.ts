import {radioGroupAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import RadioGroup from './radio-group.svelte';

const items = [
  {value: '1', label: 'Item 1'},
  {value: '2', label: 'Item 2'},
  {value: '3', label: 'Item 3'},
];

describe('RadioGroup', () => {
  it.each(getAnatomySelector(radioGroupAnatomy))(
    'should render %s',
    (selector) => {
      render(RadioGroup, {props: {items}});
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(RadioGroup, {props: {items}});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
