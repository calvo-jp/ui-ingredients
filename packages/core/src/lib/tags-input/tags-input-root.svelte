<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateTagsInputProps,
    CreateTagsInputReturn,
  } from './create-tags-input.svelte.js';

  export interface TagsInputProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateTagsInputReturn>,
      CreateTagsInputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createTagsInput} from './create-tags-input.svelte.js';
  import {setTagsInputContext} from './tags-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TagsInputProps = $props();

  let [createTagsInputProps, localProps] = $derived(
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

  let tagsInput = createTagsInput(reflect(() => createTagsInputProps));

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
