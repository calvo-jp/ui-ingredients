<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SelectTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {selectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectTriggerProps = $props();

  let select = selectContext.get();

  let mergedProps = $derived(mergeProps(props, select.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
