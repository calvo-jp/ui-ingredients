<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface NumberInputInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getNumberInputContext} from './number-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: NumberInputInputProps = $props();

  let numberInput = getNumberInputContext();

  let mergedProps = $derived(mergeProps(numberInput.getInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
