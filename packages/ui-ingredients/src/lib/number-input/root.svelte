<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateNumberInputProps,
    CreateNumberInputReturn,
  } from './create-number-input.svelte.js';

  export interface NumberInputProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateNumberInputProps> {
    asChild?: AsChild<CreateNumberInputReturn>;
    children?: Snippet<[CreateNumberInputReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    asChild,
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

  let mergedProps = $derived(mergeProps(props, numberInput.getRootProps()));

  numberInputContext.set(numberInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, numberInput)}
{:else}
  <div {...mergedProps}>
    {@render children?.(numberInput)}
  </div>
{/if}
