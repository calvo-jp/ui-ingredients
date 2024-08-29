<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface NumberInputInputProps extends HtmlProps<'input'> {
    asChild?: AsChild<HtmlProps<'input'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, ...props}: NumberInputInputProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getInputProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
