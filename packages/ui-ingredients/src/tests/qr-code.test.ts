import {qrCodeAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import QrCode from './qr-code.svelte';
import {getAnatomySelector} from './utils.js';

describe('QrCode', () => {
  it.each(getAnatomySelector(qrCodeAnatomy))('should render %s', (selector) => {
    render(QrCode);
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(QrCode);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
