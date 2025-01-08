<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TagsInputItemDeleteTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
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
  }: TagsInputItemDeleteTriggerProps = $props();

  let tagsInput = getTagsInputContext();
  let itemProps = getTagsInputItemPropsContext();
  let mergedProps = $derived(
    mergeProps(tagsInput.getItemDeleteTriggerProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
