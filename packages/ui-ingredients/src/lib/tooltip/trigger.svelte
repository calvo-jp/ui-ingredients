<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface TooltipTriggerProps extends HtmlProps<'button'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tooltipContext} from './context.svelte.js';

  let {asChild, children, ...props}: TooltipTriggerProps = $props();

  let tooltip = tooltipContext.get();

  let attrs = $derived(mergeProps(props, tooltip.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
