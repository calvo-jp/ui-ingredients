import {paginationAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Pagination from './pagination.svelte';
import {getAnatomySelector} from './utils.js';

describe('Pagination', () => {
  it.each(getAnatomySelector(paginationAnatomy))(
    'should render %s',
    (selector) => {
      render(Pagination);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Pagination);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
