<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PinInputControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPinInputContext} from './pin-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PinInputControlProps = $props();

  let pinInput = getPinInputContext();

  let mergedProps = $derived(mergeProps(pinInput.getControlProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
