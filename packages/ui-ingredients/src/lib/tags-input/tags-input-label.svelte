<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTagsInputContext} from './tags-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TagsInputLabelProps = $props();

  let tagsInput = getTagsInputContext();

  let mergedProps = $derived(mergeProps(props, tagsInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
