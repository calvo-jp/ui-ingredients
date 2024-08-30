<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface PinInputLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {pinInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: PinInputLabelProps = $props();

  let pinInput = pinInputContext.get();

  let mergedProps = $derived(mergeProps(props, pinInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
