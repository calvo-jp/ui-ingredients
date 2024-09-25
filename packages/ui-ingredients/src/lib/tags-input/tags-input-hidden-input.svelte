<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTagsInputContext} from './tags-input-context.svelte.js';

  let {this: e, asChild, ...props}: TagsInputHiddenInputProps = $props();

  let tagsInput = getTagsInputContext();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getHiddenInputProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
