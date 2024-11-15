<script lang="ts">
  import type {Assign} from '$lib/types';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {buttonRecipe, type ButtonRecipeProps} from './button.recipe';

  let {
    class: className,
    size,
    variant,
    fullWidth,
    children,
    ...props
  }: Assign<SvelteHTMLElements['button'], ButtonRecipeProps> = $props();
</script>

<button
  class={buttonRecipe({
    size,
    variant,
    fullWidth,
    className,
  })}
  {...props}
>
  {@render children?.()}
</button>
