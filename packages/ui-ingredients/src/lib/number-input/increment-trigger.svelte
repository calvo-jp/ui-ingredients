<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface NumberInputIncrementTriggerProps extends HtmlProps<'button'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: NumberInputIncrementTriggerProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getIncrementTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
