import {hoverCardAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte/svelte5';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import HoverCard from './hover-card.svelte';

describe('HoverCard', () => {
  it.each(getAnatomySelector(hoverCardAnatomy))(
    'should render %s',
    (selector) => {
      render(HoverCard);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(HoverCard);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
