import {signaturePadAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import SignaturePad from './signature-pad.svelte';
import {getAnatomySelector} from './utils.js';

describe('SignaturePad', () => {
  it.each(getAnatomySelector(signaturePadAnatomy))(
    'should render %s',
    (selector) => {
      render(SignaturePad);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(SignaturePad);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
