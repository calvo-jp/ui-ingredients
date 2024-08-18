<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateNumberInputContextProps} from './context.svelte.js';

  export interface NumberInputProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<CreateNumberInputContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createNumberInputContext, setNumberInputContext} from './context.svelte.js';

  let {
    id = nanoid(),
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
  });

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setNumberInputContext(context);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
