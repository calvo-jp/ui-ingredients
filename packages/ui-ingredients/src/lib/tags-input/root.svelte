<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTagsInputProps, CreateTagsInputReturn} from './create-tags-input.svelte.js';

  export interface TagsInputProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateTagsInputProps> {
    asChild?: AsChild<CreateTagsInputReturn>;
    children?: Snippet<[CreateTagsInputReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    asChild,
    children,
    ...props
  }: TagsInputProps = $props();

  let tagsInput = createTagsInputt({
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

  let mergedProps = $derived<Record<string, any>>(mergeProps(props, tagsInput.getRootProps()));

  tagsInputContext.set(tagsInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, tagsInput)}
{:else}
  <div {...mergedProps}>
    {@render children?.(tagsInput)}
  </div>
{/if}
