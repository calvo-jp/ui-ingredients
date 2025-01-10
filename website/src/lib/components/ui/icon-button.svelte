<script lang="ts">
  import type {Assign} from '$lib/types';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {createSplitProps} from 'ui-ingredients';
  import {
    iconButtonRecipe,
    type IconButtonRecipeProps,
  } from './icon-button.recipe';

  let {
    children,
    ...props
  }: Assign<SvelteHTMLElements['button'], IconButtonRecipeProps> = $props();

  let [recipeProps, localProps] = $derived(
    createSplitProps<IconButtonRecipeProps>(iconButtonRecipe.variantKeys)(
      props,
    ),
  );
</script>

<button
  type="button"
  {...props}
  class={[iconButtonRecipe(recipeProps), localProps.class]}
>
  {@render children?.()}
</button>
