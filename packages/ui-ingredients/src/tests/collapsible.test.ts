import {collapsibleAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Collapsible from './collapsible.svelte';
import {getAnatomySelector} from './utils.js';

describe('Collapsible', () => {
  it.each(getAnatomySelector(collapsibleAnatomy))(
    'should render %s',
    (selector) => {
      render(Collapsible as any);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Collapsible as any);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
