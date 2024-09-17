import {carouselAnatomy} from '$lib/index.js';
import {faker} from '@faker-js/faker';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Carousel from './carousel.svelte';
import {getAnatomySelector} from './utils.js';

const images = Array.from({length: 5}).map(() => faker.image.url());

describe('Carousel', () => {
  it.each(getAnatomySelector(carouselAnatomy))(
    'should render %s',
    (selector) => {
      render(Carousel, {images});
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Carousel, {images});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
