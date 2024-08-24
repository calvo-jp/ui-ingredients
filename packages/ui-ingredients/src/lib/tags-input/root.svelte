<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTagsInputProps, CreateTagsInputReturn} from './create-tags-input.svelte.js';

  export interface TagsInputProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateTagsInputProps> {
    children?: Snippet<[api: CreateTagsInputReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tagsInputContext} from './context.svelte.js';
  import {createTagsInputt} from './create-tags-input.svelte.js';

  let {
    id,
    ids,
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
    children,
    ...props
  }: TagsInputProps = $props();

  let context = createTagsInputt({
    id,
    ids,
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
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  tagsInputContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
