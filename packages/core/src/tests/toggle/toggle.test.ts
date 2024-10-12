import {toggleAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Toggle from './toggle.svelte';

describe('Toggle', () => {
  it.each(getAnatomySelector(toggleAnatomy))('should render %s', (selector) => {
    render(Toggle);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Toggle);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
