<script lang="ts" context="module">
  import type {Assign, SvelteHtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreatePinInputContextProps,
    CreatePinInputContextReturn,
  } from './context.svelte.js';

  export interface PinInputProps
    extends Assign<
      Omit<SvelteHtmlProps<'div'>, 'children'>,
      Omit<CreatePinInputContextProps, 'id'>
    > {
    children?: Snippet<[context: CreatePinInputContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createPinInputContext, setPinInputContext} from './context.svelte.js';

  let {
    id,
    ids,
    dir,
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
    getRootNode,
    children,
    ...props
  }: PinInputProps = $props();

  let context = createPinInputContext({
    id: id ?? uuid(),
    ids,
    dir,
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
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setPinInputContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
