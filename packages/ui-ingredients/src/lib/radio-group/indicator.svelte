<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface RadioGroupIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {radioGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: RadioGroupIndicatorProps = $props();

  let radioGroup = radioGroupContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
