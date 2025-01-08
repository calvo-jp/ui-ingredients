<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface NumberInputValueTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getNumberInputContext} from './number-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: NumberInputValueTextProps = $props();

  let numberInput = getNumberInputContext();
  let mergedProps = $derived(
    mergeProps(numberInput.getValueTextProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {numberInput.valueAsNumber}
    {/if}
  </span>
{/if}
