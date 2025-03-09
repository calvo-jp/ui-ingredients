import {drawerAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Drawer from './drawer.svelte';

describe.skip('Drawer', () => {
  it.each(getAnatomySelector(drawerAnatomy))('should render %s', (selector) => {
    render(Drawer);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Drawer);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
