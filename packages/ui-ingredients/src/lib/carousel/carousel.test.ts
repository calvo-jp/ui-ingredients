import {faker} from '@faker-js/faker';
import {render} from '@testing-library/svelte';
import Carousel from './carousel.test.svelte';
import {carouselAnatomy} from './index.js';

const parts = Object.values(carouselAnatomy.build()).reduce<string[]>(
  (l, o) => {
    return [
      ...l,
      `[data-scope='${o.attrs['data-scope']}'][data-part='${o.attrs['data-part']}']`,
    ];
  },
  [],
);

const images = Array.from({length: 5}).map(() => faker.image.url());

describe('Carousel', () => {
  it.each(parts)('should render %s', (selector) => {
    render(Carousel, {images});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });
});
