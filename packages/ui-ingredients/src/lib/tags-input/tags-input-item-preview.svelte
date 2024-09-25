<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemPreviewProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTagsInputContext,
    getTagsInputItemPropsContext,
  } from './tags-input-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: TagsInputItemPreviewProps = $props();

  let tagsInput = getTagsInputContext();
  let itemProps = getTagsInputItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getItemPreviewProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
