<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface NumberInputIncrementTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getNumberInputContext} from './number-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: NumberInputIncrementTriggerProps = $props();

  let numberInput = getNumberInputContext();
  let mergedProps = $derived(
    mergeProps(numberInput.getIncrementTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
