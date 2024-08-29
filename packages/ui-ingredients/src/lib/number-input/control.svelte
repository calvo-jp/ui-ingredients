<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface NumberInputControlTriggerProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: NumberInputControlTriggerProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getControlProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
