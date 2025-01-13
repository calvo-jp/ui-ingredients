<script lang="ts">
  import type {Assign} from '$lib/types';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {createSplitProps} from 'ui-ingredients';
  import {labelRecipe, type LabelRecipeProps} from './label.recipe';

  let {
    children,
    ...props
  }: Assign<SvelteHTMLElements['label'], LabelRecipeProps> = $props();

  let [recipeProps, localProps] = $derived(
    createSplitProps<LabelRecipeProps>(labelRecipe.variantKeys)(props),
  );
</script>

<label {...props} class={[labelRecipe(recipeProps), localProps.class]}>
  {@render children?.()}
</label>
