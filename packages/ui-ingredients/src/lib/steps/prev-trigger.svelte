<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface StepsPrevTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {stepsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsPrevTriggerProps = $props();

  let steps = stepsContext.get();

  let mergedProps = $derived(mergeProps(props, steps.getPrevTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
