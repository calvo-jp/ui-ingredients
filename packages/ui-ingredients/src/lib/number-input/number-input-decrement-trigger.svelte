<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface NumberInputDecrementTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getNumberInputContext} from './number-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: NumberInputDecrementTriggerProps = $props();

  let numberInput = getNumberInputContext();

  let mergedProps = $derived(
    mergeProps(numberInput.getDecrementTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
