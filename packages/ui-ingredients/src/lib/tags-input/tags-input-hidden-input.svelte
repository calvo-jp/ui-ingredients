<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TagsInputHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTagsInputContext} from './tags-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: TagsInputHiddenInputProps = $props();

  let tagsInput = getTagsInputContext();

  let mergedProps = $derived(
    mergeProps(tagsInput.getHiddenInputProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
