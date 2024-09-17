import {checkboxAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
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
});
