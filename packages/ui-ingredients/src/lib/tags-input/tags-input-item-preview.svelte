<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TagsInputItemPreviewProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getTagsInputContext,
    getTagsInputItemPropsContext,
  } from './tags-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TagsInputItemPreviewProps = $props();

  let tagsInput = getTagsInputContext();
  let itemProps = getTagsInputItemPropsContext();
  let mergedProps = $derived(
    mergeProps(tagsInput.getItemPreviewProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
