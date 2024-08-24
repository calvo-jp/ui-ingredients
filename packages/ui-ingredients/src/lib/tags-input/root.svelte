<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTagsInputProps, CreateTagsInputReturn} from './create-tags-input.svelte.js';

  export interface TagsInputProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, Omit<CreateTagsInputProps, 'id'>> {
    children?: Snippet<[api: CreateTagsInputReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {tagsInputContext} from './context.svelte.js';
  import {createTagsInputt} from './create-tags-input.svelte.js';

  let {
    id,
    ids,
    dir,
    max,
    form,
    name,
    value,
    invalid,
    disabled,
    editable,
    readOnly,
    validate,
    required,
    delimiter,
    autoFocus,
    maxLength,
    addOnPaste,
    inputValue,
    blurBehavior,
    translations,
    allowOverflow,
    onValueChange,
    onFocusOutside,
    onValueInvalid,
    onInteractOutside,
    onHighlightChange,
    onInputValueChange,
    onPointerDownOutside,
    getRootNode,
    children,
    ...props
  }: TagsInputProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createTagsInputt({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
    max,
    form,
    name,
    value: $state.snapshot(value),
    invalid,
    disabled,
    editable,
    readOnly,
    validate,
    required,
    delimiter,
    autoFocus,
    maxLength,
    addOnPaste,
    inputValue,
    blurBehavior,
    translations,
    allowOverflow,
    onValueChange,
    onFocusOutside,
    onValueInvalid,
    onInteractOutside,
    onHighlightChange,
    onInputValueChange,
    onPointerDownOutside,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  tagsInputContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
