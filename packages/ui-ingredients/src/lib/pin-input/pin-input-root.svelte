<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreatePinInputProps,
    CreatePinInputReturn,
  } from './create-pin-input.svelte.js';

  export interface PinInputProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreatePinInputReturn>,
      CreatePinInputProps
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPinInputContext} from './create-pin-input.svelte.js';
  import {setPinInputContext} from './pin-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PinInputProps = $props();

  let [createPinInputProps, localProps] = $derived(
    createSplitProps<CreatePinInputProps>([
      'autoFocus',
      'blurOnComplete',
      'defaultValue',
      'disabled',
      'form',
      'id',
      'ids',
      'invalid',
      'mask',
      'name',
      'onValueChange',
      'onValueComplete',
      'onValueInvalid',
      'otp',
      'pattern',
      'placeholder',
      'readOnly',
      'required',
      'selectOnFocus',
      'translations',
      'type',
      'value',
    ])(props),
  );

  let pinInput = createPinInputContext(reflect(() => createPinInputProps));
  let mergedProps = $derived(mergeProps(pinInput.getRootProps(), localProps));

  setPinInputContext(pinInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, pinInput)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(pinInput)}
  </div>
{/if}
