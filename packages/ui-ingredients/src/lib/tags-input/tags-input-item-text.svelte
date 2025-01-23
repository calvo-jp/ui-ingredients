<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TagsInputItemTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getTagsInputContext,
    getTagsInputItemPropsContext,
  } from './tags-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TagsInputItemTextProps = $props();

  let tagsInput = getTagsInputContext();
  let itemProps = getTagsInputItemPropsContext();
  let mergedProps = $derived(
    mergeProps(tagsInput.getItemTextProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
