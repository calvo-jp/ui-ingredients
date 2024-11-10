<script lang="ts">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {buttonRecipe, type ButtonRecipeProps} from './button.recipe.js';

  let {
    class: className,
    variant,
    fullWidth,
    children,
    ...props
  }: Assign<SvelteHTMLElements['button'], ButtonRecipeProps> = $props();
</script>

<button
  class={buttonRecipe({
    variant,
    fullWidth,
    className,
  })}
  {...props}
>
  {@render children?.()}
</button>
