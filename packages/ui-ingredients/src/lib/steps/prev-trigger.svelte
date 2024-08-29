<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface StepsPrevTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsPrevTriggerProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(mergeProps(props, steps.getPrevTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
