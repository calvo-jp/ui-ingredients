<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreatePinInputProps,
    CreatePinInputReturn,
  } from './create-pin-input.svelte.js';

  export interface PinInputProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreatePinInputProps> {
    asChild?: AsChild<CreatePinInputReturn>;
    children?: Snippet<[CreatePinInputReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {pinInputContext} from './context.svelte.js';
  import {createPinInputContext} from './create-pin-input.svelte.js';

  let {asChild, children, ...props}: PinInputProps = $props();

  let [pinInputProps, otherProps] = $derived(
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

  let pinInput = createPinInputContext(pinInputProps);

  let mergedProps = $derived(mergeProps(otherProps, pinInput.getRootProps()));

  pinInputContext.set(pinInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, pinInput)}
{:else}
  <div {...mergedProps}>
    {@render children?.(pinInput)}
  </div>
{/if}
