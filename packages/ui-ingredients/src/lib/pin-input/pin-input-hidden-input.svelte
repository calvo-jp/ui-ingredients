<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PinInputHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPinInputContext} from './pin-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: PinInputHiddenInputProps = $props();

  let pinInput = getPinInputContext();
  let mergedProps = $derived(mergeProps(pinInput.getHiddenInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
