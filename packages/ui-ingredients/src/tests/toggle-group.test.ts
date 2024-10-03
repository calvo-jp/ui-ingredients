import {toggleGroupAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import ToggleGroup from './toggle-group.svelte';
import {getAnatomySelector} from './utils.js';

describe('ToggleGroup', () => {
  it.each(getAnatomySelector(toggleGroupAnatomy))(
    'should render %s',
    (selector) => {
      render(ToggleGroup);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(ToggleGroup);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
