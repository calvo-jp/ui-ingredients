<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface NumberInputLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: NumberInputLabelProps = $props();

  let numberInput = numberInputContext.get();

  let mergedProps = $derived(mergeProps(props, numberInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
