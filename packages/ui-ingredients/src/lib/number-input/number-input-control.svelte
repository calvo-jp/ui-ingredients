<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface NumberInputControlTriggerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getNumberInputContext} from './number-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: NumberInputControlTriggerProps = $props();

  let numberInput = getNumberInputContext();
  let mergedProps = $derived(mergeProps(numberInput.getControlProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
