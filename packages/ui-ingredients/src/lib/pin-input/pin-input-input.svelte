<script lang="ts" module>
  import type {InputProps} from '@zag-js/pin-input';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface PinInputInputProps
    extends Assign<
      HtmlIngredientProps<'input', HTMLInputElement>,
      InputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPinInputContext} from './pin-input-context.svelte.js';

  let {
    ref = $bindable(null),
    index,
    asChild,
    ...props
  }: PinInputInputProps = $props();

  let pinInput = getPinInputContext();
  let mergedProps = $derived(
    mergeProps(pinInput.getInputProps({index}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
