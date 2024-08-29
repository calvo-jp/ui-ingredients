<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SwitchLabelProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {switchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchLabelProps = $props();

  let switch$ = switchContext.get();

  let attrs = $derived(mergeProps(props, switch$.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
