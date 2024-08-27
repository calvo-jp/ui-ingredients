<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface NumberInputDecrementTriggerProps extends HtmlProps<'button'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
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
