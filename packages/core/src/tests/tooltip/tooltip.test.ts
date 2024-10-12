import {tooltipAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Tooltip from './tooltip.svelte';

describe('Tooltip', () => {
  it.each(getAnatomySelector(tooltipAnatomy))(
    'should render %s',
    (selector) => {
      render(Tooltip);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Tooltip);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
