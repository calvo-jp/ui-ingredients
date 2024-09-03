<script lang="ts">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {inputRecipe, type InputRecipeProps} from './input.recipe.js';

  let {
    class: className,
    variant,
    ...props
  }: Assign<SvelteHTMLElements['input'], InputRecipeProps> = $props();
</script>

<input
  class={inputRecipe({
    variant,
    className,
  })}
  {...props}
/>
