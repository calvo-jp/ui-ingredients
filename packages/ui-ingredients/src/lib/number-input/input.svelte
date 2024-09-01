<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface NumberInputInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, ...props}: NumberInputInputProps = $props();

  let field = getFieldContext();
  let numberInput = numberInputContext.get();

  let mergedProps = $derived(mergeProps(props, numberInput.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input aria-describedby={field?.['aria-describedby']} {...mergedProps} />
{/if}
