<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
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
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
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
      'id',
      'ids',
      'otp',
      'form',
      'mask',
      'name',
      'type',
      'value',
      'pattern',
      'invalid',
      'disabled',
      'readOnly',
      'required',
      'autoFocus',
      'placeholder',
      'translations',
      'selectOnFocus',
      'blurOnComplete',
      'onValueChange',
      'onValueInvalid',
      'onValueComplete',
    ])(props),
  );

  let pinInput = createPinInputContext(reflect(() => createPinInputProps));

  let mergedProps = $derived(mergeProps(localProps, pinInput.getRootProps()));

  setPinInputContext(pinInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, pinInput)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(pinInput)}
  </div>
{/if}
