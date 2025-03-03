import {carouselAnatomy} from '$lib/index.js';
import {faker} from '@faker-js/faker';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Carousel from './carousel.svelte';

const images = Array.from({length: 5}).map(() => faker.image.url());

describe.skip('Carousel', () => {
  it.each(getAnatomySelector(carouselAnatomy))(
    'should render %s',
    (selector) => {
      render(Carousel, {props: {images}});
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Carousel, {props: {images}});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
