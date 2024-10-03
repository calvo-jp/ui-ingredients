import {sliderAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Slider from './slider.svelte';
import {getAnatomySelector} from './utils.js';

describe('Slider', () => {
  it.each(getAnatomySelector(sliderAnatomy))('should render %s', (selector) => {
    render(Slider);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Slider);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
