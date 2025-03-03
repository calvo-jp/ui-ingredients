<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateTagsInputProps,
    CreateTagsInputReturn,
  } from './create-tags-input.svelte.js';

  export interface TagsInputProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateTagsInputReturn>,
      Optional<CreateTagsInputProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createTagsInput} from './create-tags-input.svelte.js';
  import {setTagsInputContext} from './tags-input-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: TagsInputProps = $props();

  let uid = $props.id();

  let [createTagsInputProps, localProps] = $derived(
    createSplitProps<Omit<CreateTagsInputProps, 'id'>>([
      'addOnPaste',
      'allowOverflow',
      'autoFocus',
      'blurBehavior',
      'defaultInputValue',
      'defaultValue',
      'delimiter',
      'disabled',
      'editable',
      'form',
      'ids',
      'inputValue',
      'invalid',
      'max',
      'maxLength',
      'name',
      'onFocusOutside',
      'onHighlightChange',
      'onInputValueChange',
      'onInteractOutside',
      'onPointerDownOutside',
      'onValueChange',
      'onValueInvalid',
      'readOnly',
      'required',
      'translations',
      'validate',
      'value',
    ])(rest),
  );

  let tagsInput = createTagsInput(
    reflect(() => ({...createTagsInputProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(tagsInput.getRootProps(), localProps));

  setTagsInputContext(tagsInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, tagsInput)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(tagsInput)}
  </div>
{/if}
