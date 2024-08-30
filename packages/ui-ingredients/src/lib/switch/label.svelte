<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SwitchLabelProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {switchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchLabelProps = $props();

  let switch$ = switchContext.get();

  let mergedProps = $derived(mergeProps(props, switch$.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
