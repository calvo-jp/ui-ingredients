import {clipboardAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Clipboard from './clipboard.svelte';
import {getAnatomySelector} from './utils.js';

describe('Clipboard', () => {
  it.each(getAnatomySelector(clipboardAnatomy))(
    'should render %s',
    (selector) => {
      render(Clipboard);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Clipboard);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
