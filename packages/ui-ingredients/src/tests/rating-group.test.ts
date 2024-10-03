import {ratingGroupAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import RatingGroup from './rating-group.svelte';
import {getAnatomySelector} from './utils.js';

describe('RatingGroup', () => {
  it.each(getAnatomySelector(ratingGroupAnatomy))(
    'should render %s',
    (selector) => {
      render(RatingGroup);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(RatingGroup);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});