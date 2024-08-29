<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface NumberInputLabelProps extends HtmlProps<'label'> {
    asChild?: AsChild<HtmlProps<'label'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: NumberInputLabelProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
