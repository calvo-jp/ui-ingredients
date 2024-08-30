<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TagsInputInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {tagsInputContext} from './context.svelte.js';

  let {asChild, ...props}: TagsInputInputProps = $props();

  let tagsInput = tagsInputContext.get();

  let mergedProps = $derived(mergeProps(props, tagsInput.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
