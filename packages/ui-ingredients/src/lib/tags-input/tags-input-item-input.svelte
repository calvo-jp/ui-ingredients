<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTagsInputContext,
    getTagsInputItemPropsContext,
  } from './tags-input-context.svelte.js';

  let {this: e, asChild, ...props}: TagsInputItemInputProps = $props();

  let tagsInput = getTagsInputContext();
  let itemProps = getTagsInputItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getItemInputProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
