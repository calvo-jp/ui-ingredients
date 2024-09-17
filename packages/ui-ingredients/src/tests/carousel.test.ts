import {carouselAnatomy} from '$lib/index.js';
import {faker} from '@faker-js/faker';
import {render} from '@testing-library/svelte';
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
});
