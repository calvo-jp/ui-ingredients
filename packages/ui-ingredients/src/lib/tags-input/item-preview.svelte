<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemPreviewProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTagsInputContext,
    getTagsInputItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TagsInputItemPreviewProps = $props();

  let tagsInput = getTagsInputContext();
  let itemProps = getTagsInputItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getItemPreviewProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
