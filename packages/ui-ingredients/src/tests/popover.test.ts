import {popoverAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Popover from './popover.svelte';
import {getAnatomySelector} from './utils.js';

describe('Popover', () => {
  it.each(getAnatomySelector(popoverAnatomy))(
    'should render %s',
    (selector) => {
      render(Popover);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Popover);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
