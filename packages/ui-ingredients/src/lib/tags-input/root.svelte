<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {
    CreateTagsInputContextProps,
    CreateTagsInputContextReturn,
  } from './context.svelte.js';

  export interface TagsInputProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateTagsInputContextProps>
    > {
    children?: Snippet<[context: CreateTagsInputContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createTagsInputContext, setTagsInputContext} from './context.svelte.js';

  let {
    id = uuid(),
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

  let context = createTagsInputContext({
    id,
    ids,
    dir,
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
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setTagsInputContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
