<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreatePinInputProps, CreatePinInputReturn} from './create-pin-input.svelte.js';

  export interface PinInputProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreatePinInputProps> {
    children?: Snippet<[pinInput: CreatePinInputReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {pinInputContext} from './context.svelte.js';
  import {createPinInputContext} from './create-pin-input.svelte.js';

  let {
    id,
    ids,
    otp,
    form,
    mask,
    name,
    type,
    value,
    pattern,
    invalid,
    disabled,
    readOnly,
    required,
    autoFocus,
    placeholder,
    translations,
    selectOnFocus,
    blurOnComplete,
    onValueChange,
    onValueInvalid,
    onValueComplete,
    children,
    ...props
  }: PinInputProps = $props();

  let pinInput = createPinInputContext({
    id,
    ids,
    otp,
    form,
    mask,
    name,
    type,
    value: $state.snapshot(value),
    pattern,
    invalid,
    disabled,
    readOnly,
    required,
    autoFocus,
    placeholder,
    translations,
    selectOnFocus,
    blurOnComplete,
    onValueChange,
    onValueInvalid,
    onValueComplete,
  });

  let attrs = $derived(mergeProps(props, pinInput.getRootProps()));

  pinInputContext.set(pinInput);
</script>

<div {...attrs}>
  {@render children?.(pinInput)}
</div>
