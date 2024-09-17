import {dialogAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Dialog from './dialog.svelte';
import {getAnatomySelector} from './utils.js';

describe('Dialog', () => {
  it.each(getAnatomySelector(dialogAnatomy))('should render %s', (selector) => {
    render(Dialog);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Dialog);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
