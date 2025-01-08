import {collapsibleAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Collapsible from './collapsible.svelte';

describe('Collapsible', () => {
  it.each(getAnatomySelector(collapsibleAnatomy))(
    'should render %s',
    (selector) => {
      render(Collapsible);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Collapsible);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
