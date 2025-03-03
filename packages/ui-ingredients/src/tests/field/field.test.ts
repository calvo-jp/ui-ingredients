import {fieldAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte/svelte5';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Field from './field.svelte';

describe('Field', () => {
  it.each(getAnatomySelector(fieldAnatomy))('should render %s', (selector) => {
    render(Field);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Field);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
