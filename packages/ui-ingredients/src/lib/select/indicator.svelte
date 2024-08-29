<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SelectIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectIndicatorProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
