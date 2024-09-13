<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputClearTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTagsInputContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: TagsInputClearTriggerProps = $props();

  let tagsInput = getTagsInputContext();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getClearTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
