import {stepsAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Steps from './steps.svelte';

const items = [
  {title: 'Step 1', content: 'Step 1 Content'},
  {title: 'Step 2', content: 'Step 2 Content'},
  {title: 'Step 3', content: 'Step 3 Content'},
];

describe.skip('Steps', () => {
  it.each(getAnatomySelector(stepsAnatomy))('should render %s', (selector) => {
    render(Steps, {props: {items}});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it.skip('should have no a11y violations', async () => {
    const {container} = render(Steps, {props: {items}});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
