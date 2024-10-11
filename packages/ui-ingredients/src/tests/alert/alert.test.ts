import {alertAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Alert from './alert.svelte';

describe('Alert', () => {
  it.each(getAnatomySelector(alertAnatomy))('should render %s', (selector) => {
    render(Alert);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Alert);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
