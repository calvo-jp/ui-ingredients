import {collapsibleAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import Collapsible from './collapsible.svelte';
import {getAnatomySelector} from './utils.js';

describe('Collapsible', () => {
  it.each(getAnatomySelector(collapsibleAnatomy))(
    'should render %s',
    (selector) => {
      render(Collapsible);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );
});
