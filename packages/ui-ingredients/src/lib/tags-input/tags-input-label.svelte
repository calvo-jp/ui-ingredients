<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TagsInputLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getTagsInputContext} from './tags-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TagsInputLabelProps = $props();

  let tagsInput = getTagsInputContext();
  let mergedProps = $derived(mergeProps(tagsInput.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
