import {clipboardAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
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
});
