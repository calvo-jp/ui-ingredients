<script lang="ts">
  import type {Assign} from '$lib/types';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {textareaRecipe, type TextareaRecipeProps} from './textarea.recipe';

  let {
    size,
    class: className,
    variant,
    ...props
  }: Assign<SvelteHTMLElements['textarea'], TextareaRecipeProps> = $props();
</script>

<textarea
  class={textareaRecipe({
    size,
    variant,
    className,
  })}
  {...props}
></textarea>
