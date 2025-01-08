import {splitterAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Splitter from './splitter.svelte';

describe('Splitter', () => {
  it.each(getAnatomySelector(splitterAnatomy))(
    'should render %s',
    (selector) => {
      render(Splitter);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Splitter);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
