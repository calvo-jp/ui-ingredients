<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface StepsTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext, stepsItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsTriggerProps = $props();

  let steps = stepsContext.get();
  let itemProps = stepsItemPropsContext.get();

  let attrs = $derived(mergeProps(props, steps.getTriggerProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
