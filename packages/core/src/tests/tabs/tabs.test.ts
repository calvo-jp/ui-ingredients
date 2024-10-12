import {tabsAnatomy} from '$lib/index.js';
import {faker} from '@faker-js/faker';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Tabs from './tabs.svelte';

const items = [
  {
    value: '1',
    label: 'Tab 1',
    content: faker.lorem.words({min: 5, max: 10}),
  },
  {
    value: '2',
    label: 'Tab 2',
    content: faker.lorem.words({min: 5, max: 10}),
  },
  {
    value: '3',
    label: 'Tab 3',
    content: faker.lorem.words({min: 5, max: 10}),
  },
];

describe('Tabs', () => {
  it.each(getAnatomySelector(tabsAnatomy))('should render %s', (selector) => {
    render(Tabs, {props: {items}});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Tabs, {props: {items}});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
