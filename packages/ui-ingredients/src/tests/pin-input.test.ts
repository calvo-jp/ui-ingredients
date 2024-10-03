import {pinInputAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import PinInput from './pin-input.svelte';
import {getAnatomySelector} from './utils.js';

describe('PinInput', () => {
  it.each(getAnatomySelector(pinInputAnatomy))(
    'should render %s',
    (selector) => {
      render(PinInput);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(PinInput);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
