<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface PinInputLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {pinInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: PinInputLabelProps = $props();

  let pinInput = pinInputContext.get();

  let attrs = $derived(mergeProps(props, pinInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
