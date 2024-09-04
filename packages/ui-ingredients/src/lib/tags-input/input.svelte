<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTagsInputContext} from './context.svelte.js';

  let {asChild, ...props}: TagsInputInputProps = $props();

  let tagsInput = getTagsInputContext();

  let mergedProps = $derived(mergeProps(props, tagsInput.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
