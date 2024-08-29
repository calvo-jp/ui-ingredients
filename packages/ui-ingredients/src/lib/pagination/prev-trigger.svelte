<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface PaginationPrevTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {paginationContext} from './context.svelte.js';

  let {asChild, children, ...props}: PaginationPrevTriggerProps = $props();

  let pagination = paginationContext.get();

  let attrs = $derived(mergeProps(props, pagination.getPrevTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
