<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TagsInputInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getTagsInputContext} from './tags-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: TagsInputInputProps = $props();

  let tagsInput = getTagsInputContext();
  let mergedProps = $derived(mergeProps(tagsInput.getInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
