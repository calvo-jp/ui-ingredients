<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface NumberInputInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, ...props}: NumberInputInputProps = $props();

  let numberInput = numberInputContext.get();

  let mergedProps = $derived(mergeProps(props, numberInput.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
