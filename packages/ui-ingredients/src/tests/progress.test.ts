import {progressAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Progress from './progress.svelte';
import {getAnatomySelector} from './utils.js';

describe('Progress', () => {
  it.each(getAnatomySelector(progressAnatomy))(
    'should render %s',
    (selector) => {
      render(Progress);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Progress);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
