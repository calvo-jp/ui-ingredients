import {checkboxAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Checkbox from './checkbox.svelte';
import {getAnatomySelector} from './utils.js';

describe('Checkbox', () => {
  it.each(getAnatomySelector(checkboxAnatomy))(
    'should render %s',
    (selector) => {
      render(Checkbox);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Checkbox);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
