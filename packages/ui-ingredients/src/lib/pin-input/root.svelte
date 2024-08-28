<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreatePinInputProps, CreatePinInputReturn} from './create-pin-input.svelte.js';

  export interface PinInputProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreatePinInputProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>, pinInput: CreatePinInputReturn]>;
    children?: Snippet<[pinInput: CreatePinInputReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    asChild,
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

{#if asChild}
  {@render asChild(attrs, pinInput)}
{:else}
  <div {...attrs}>
    {@render children?.(pinInput)}
  </div>
{/if}
