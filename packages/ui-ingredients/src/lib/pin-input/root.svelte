<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreatePinInputProps, CreatePinInputReturn} from './create-pin-input.svelte.js';

  export interface PinInputProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, Omit<CreatePinInputProps, 'id'>> {
    children?: Snippet<[api: CreatePinInputReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {pinInputContext} from './context.svelte.js';
  import {createPinInputContext} from './create-pin-input.svelte.js';

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

  let uid = createUniqueId();

  let context = createPinInputContext({
    id: id ?? uid,
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

  pinInputContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
