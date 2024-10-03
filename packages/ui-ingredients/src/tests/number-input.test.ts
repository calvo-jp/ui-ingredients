import {numberInputAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import NumberInput from './number-input.svelte';
import {getAnatomySelector} from './utils.js';

describe('NumberInput', () => {
  it.each(getAnatomySelector(numberInputAnatomy))(
    'should render %s',
    (selector) => {
      render(NumberInput);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(NumberInput);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
