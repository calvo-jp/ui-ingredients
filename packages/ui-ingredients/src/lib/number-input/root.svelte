<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateNumberInputProps,
    CreateNumberInputReturn,
  } from './create-number-input.svelte.js';

  export interface NumberInputProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateNumberInputProps, 'id'>
    > {
    children?: Snippet<[api: CreateNumberInputReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {numberInputContext} from './context.svelte.js';
  import {createNumberInput} from './create-number-input.svelte.js';

  let {
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
    children,
    ...props
  }: NumberInputProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createNumberInput({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
    max,
    min,
    step,
    name,
    form,
    value: $state.snapshot(value),
    locale: locale ?? localeContext?.locale,
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
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  numberInputContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
