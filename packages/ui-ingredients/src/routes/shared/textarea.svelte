<script lang="ts">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {textareaRecipe, type TextareaRecipeProps} from './textarea.recipe.js';

  let {
    size,
    class: className,
    variant,
    ...props
  }: Assign<SvelteHTMLElements['textarea'], TextareaRecipeProps> = $props();
</script>

<textarea
  class={[
    textareaRecipe({
      size,
      variant,
    }),
    className,
  ]}
  {...props}
></textarea>
