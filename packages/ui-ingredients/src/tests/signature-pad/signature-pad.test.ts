import {signaturePadAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import SignaturePad from './signature-pad.svelte';

describe.skip('SignaturePad', () => {
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
