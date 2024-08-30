<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface NumberInputDecrementTriggerProps
    extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: NumberInputDecrementTriggerProps =
    $props();

  let numberInput = numberInputContext.get();

  let mergedProps = $derived(
    mergeProps(props, numberInput.getDecrementTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
