<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateNumberInputProps,
    CreateNumberInputReturn,
  } from './create-number-input.svelte.js';

  export interface NumberInputProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateNumberInputProps> {
    children?: Snippet<[numberInput: CreateNumberInputReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {numberInputContext} from './context.svelte.js';
  import {createNumberInput} from './create-number-input.svelte.js';

  let {
    id,
    ids,
    max,
    min,
    step,
    name,
    form,
    value,
    locale,
    pattern,
    invalid,
    disabled,
    readOnly,
    required,
    inputMode,
    spinOnPress,
    translations,
    formatOptions,
    allowOverflow,
    allowMouseWheel,
    clampValueOnBlur,
    focusInputOnChange,
    onFocusChange,
    onValueChange,
    onValueInvalid,
    children,
    ...props
  }: NumberInputProps = $props();

  let numberInput = createNumberInput({
    id,
    ids,
    max,
    min,
    step,
    name,
    form,
    value: $state.snapshot(value),
    locale,
    pattern,
    invalid,
    disabled,
    readOnly,
    required,
    inputMode,
    spinOnPress,
    translations,
    formatOptions,
    allowOverflow,
    allowMouseWheel,
    clampValueOnBlur,
    focusInputOnChange,
    onFocusChange,
    onValueChange,
    onValueInvalid,
  });

  let attrs = $derived(mergeProps(props, numberInput.getRootProps()));

  numberInputContext.set(numberInput);
</script>

<div {...attrs}>
  {@render children?.(numberInput)}
</div>
