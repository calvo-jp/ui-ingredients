<script lang="ts" module>
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
  import {setPinInputContext} from './context.svelte.js';
  import {createPinInputContext} from './create-pin-input.svelte.js';

  let {this: e, asChild, children, ...props}: PinInputProps = $props();

  let [pinInputProps, localProps] = $derived(
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

  let pinInput = createPinInputContext(reflect(() => pinInputProps));

  let mergedProps = $derived(mergeProps(localProps, pinInput.getRootProps()));

  setPinInputContext(pinInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, pinInput)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(pinInput)}
  </div>
{/if}
