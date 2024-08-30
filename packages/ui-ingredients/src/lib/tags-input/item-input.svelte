<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TagsInputItemInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    tagsInputContext,
    tagsInputItemPropsContext,
  } from './context.svelte.js';

  let {asChild, ...props}: TagsInputItemInputProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = tagsInputItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getItemInputProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
