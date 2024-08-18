<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreatePinInputContextProps, CreatePinInputContextReturn} from './context.svelte.js';

  export interface PinInputProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreatePinInputContextProps>
    > {
    children?: Snippet<[CreatePinInputContextReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createPinInputContext, setPinInputContext} from './context.svelte.js';

  let {
    id = nanoid(),
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
    id,
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
