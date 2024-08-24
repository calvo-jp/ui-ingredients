<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreatePinInputContextProps, CreatePinInputContextReturn} from './context.svelte.js';

  export interface PinInputProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreatePinInputContextProps, 'id'>
    > {
    children?: Snippet<[context: CreatePinInputContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
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

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createPinInputContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
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
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setPinInputContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
