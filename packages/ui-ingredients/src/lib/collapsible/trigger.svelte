<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CollapsibleTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {collapsibleContext} from './context.svelte.js';

  let {asChild, children, ...props}: CollapsibleTriggerProps = $props();

  let collapsible = collapsibleContext.get();

  let attrs = $derived(mergeProps(props, collapsible.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
