<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTagsInputProps,
    CreateTagsInputReturn,
  } from './create-tags-input.svelte.js';

  export interface TagsInputProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateTagsInputProps> {
    asChild?: AsChild<CreateTagsInputReturn>;
    children?: Snippet<[CreateTagsInputReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {tagsInputContext} from './context.svelte.js';
  import {createTagsInput} from './create-tags-input.svelte.js';

  let {asChild, children, ...props}: TagsInputProps = $props();

  let [tagsInputProps, otherProps] = $derived(
    createSplitProps<CreateTagsInputProps>([
      'id',
      'ids',
      'max',
      'form',
      'name',
      'value',
      'invalid',
      'disabled',
      'editable',
      'readOnly',
      'validate',
      'required',
      'delimiter',
      'autoFocus',
      'maxLength',
      'addOnPaste',
      'inputValue',
      'blurBehavior',
      'translations',
      'allowOverflow',
      'onValueChange',
      'onFocusOutside',
      'onValueInvalid',
      'onInteractOutside',
      'onHighlightChange',
      'onInputValueChange',
      'onPointerDownOutside',
    ])(props),
  );

  let tagsInput = createTagsInput(tagsInputProps);

  let mergedProps = $derived(mergeProps(otherProps, tagsInput.getRootProps()));

  tagsInputContext.set(tagsInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, tagsInput)}
{:else}
  <div {...mergedProps}>
    {@render children?.(tagsInput)}
  </div>
{/if}
