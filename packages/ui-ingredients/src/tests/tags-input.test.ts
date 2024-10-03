import {tagsInputAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import TagsInput from './tags-input.svelte';
import {getAnatomySelector} from './utils.js';

describe('TagsInput', () => {
  it.each(getAnatomySelector(tagsInputAnatomy))(
    'should render %s',
    (selector) => {
      render(TagsInput);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(TagsInput);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
