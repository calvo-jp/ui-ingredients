import {switchAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Switch from './switch.svelte';

describe.skip('Switch', () => {
  it.each(getAnatomySelector(switchAnatomy))('should render %s', (selector) => {
    render(Switch);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Switch);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
