import {qrCodeAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import QrCode from './qr-code.svelte';

describe.skip('QrCode', () => {
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
