<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTagsInputProps,
    CreateTagsInputReturn,
  } from './create-tags-input.svelte.js';

  export interface TagsInputProps
    extends Assign<
      HtmlIngredientProps<'div', CreateTagsInputReturn>,
      CreateTagsInputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setTagsInputContext} from './context.svelte.js';
  import {createTagsInput} from './create-tags-input.svelte.js';

  let {asChild, children, ...props}: TagsInputProps = $props();

  let [tagsInputProps, localProps] = $derived(
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

  let tagsInput = createTagsInput(reflect(() => tagsInputProps));

  let mergedProps = $derived(mergeProps(localProps, tagsInput.getRootProps()));

  setTagsInputContext(tagsInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, tagsInput)}
{:else}
  <div {...mergedProps}>
    {@render children?.(tagsInput)}
  </div>
{/if}
