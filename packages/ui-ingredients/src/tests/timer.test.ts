import {timerAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Timer from './timer.svelte';
import {getAnatomySelector} from './utils.js';

describe('Timer', () => {
  it.each(getAnatomySelector(timerAnatomy))('should render %s', (selector) => {
    render(Timer);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Timer);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});