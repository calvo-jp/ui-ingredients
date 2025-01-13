<script lang="ts">
  import type {Assign} from '$lib/types';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {createSplitProps} from 'ui-ingredients';
  import {inputRecipe, type InputRecipeProps} from './input.recipe';

  let {...props}: Assign<SvelteHTMLElements['input'], InputRecipeProps> =
    $props();

  let [recipeProps, localProps] = $derived(
    createSplitProps<InputRecipeProps>(inputRecipe.variantKeys)(props),
  );
</script>

<input
  type="text"
  {...localProps}
  class={[inputRecipe(recipeProps), props.class]}
/>
