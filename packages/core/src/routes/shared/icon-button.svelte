<script lang="ts">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {
    iconButtonRecipe,
    type IconButtonRecipeProps,
  } from './icon-button.recipe.js';

  let {
    class: className,
    variant,
    children,
    ...props
  }: Assign<SvelteHTMLElements['button'], IconButtonRecipeProps> = $props();
</script>

<button class={[iconButtonRecipe({variant}), className]} {...props}>
  {@render children?.()}
</button>
