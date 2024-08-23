<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateNumberInputContextProps,
    CreateNumberInputContextReturn,
  } from './context.svelte.js';

  export interface NumberInputProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateNumberInputContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateNumberInputContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createNumberInputContext,
    setNumberInputContext,
  } from './context.svelte.js';

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

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createNumberInputContext({
    id: id ?? createUniqueId(),
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

  setNumberInputContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
