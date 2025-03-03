import {breadcrumbsAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Breadcrumbs from './breadcrumbs.svelte';

describe.skip('Breadcrumbs', () => {
  it.each(getAnatomySelector(breadcrumbsAnatomy))(
    'should render %s',
    (selector) => {
      render(Breadcrumbs);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Breadcrumbs);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
