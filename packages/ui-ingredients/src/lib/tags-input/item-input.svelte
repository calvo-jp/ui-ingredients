<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TagsInputItemInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tagsInputContext, tagsInputItemPropsContext} from './context.svelte.js';

  let {asChild, ...props}: TagsInputItemInputProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = tagsInputItemPropsContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getItemInputProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
