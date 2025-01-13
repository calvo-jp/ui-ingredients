<script lang="ts">
  import type {Assign} from '$lib/types';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {createSplitProps} from 'ui-ingredients';
  import {badgeRecipe, type BadgeRecipeProps} from './badge.recipe';

  let {
    children,
    ...props
  }: Assign<SvelteHTMLElements['span'], BadgeRecipeProps> = $props();

  let [recipeProps, localProps] = $derived(
    createSplitProps<BadgeRecipeProps>(badgeRecipe.variantKeys)(props),
  );
</script>

<span {...props} class={[badgeRecipe(recipeProps), localProps.class]}>
  {@render children?.()}
</span>
