<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TagsInputLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tagsInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: TagsInputLabelProps = $props();

  let tagsInput = tagsInputContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
