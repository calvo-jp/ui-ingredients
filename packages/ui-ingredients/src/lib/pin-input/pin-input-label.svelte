<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PinInputLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPinInputContext} from './pin-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PinInputLabelProps = $props();

  let pinInput = getPinInputContext();
  let mergedProps = $derived(mergeProps(pinInput.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
