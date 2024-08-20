<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {
    CreateNumberInputContextProps,
    CreateNumberInputContextReturn,
  } from './context.svelte.js';

  export interface NumberInputProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateNumberInputContextProps>
    > {
    children?: Snippet<[context: CreateNumberInputContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createNumberInputContext, setNumberInputContext} from './context.svelte.js';

  let {
    id = uuid(),
    ids,
    dir,
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
    getRootNode,
    children,
    ...props
  }: NumberInputProps = $props();

  let context = createNumberInputContext({
    id,
    ids,
    dir,
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
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setNumberInputContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
