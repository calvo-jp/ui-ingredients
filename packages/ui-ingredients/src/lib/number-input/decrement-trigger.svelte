<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface NumberInputDecrementTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild<HtmlProps<'button'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: NumberInputDecrementTriggerProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getDecrementTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
