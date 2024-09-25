<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
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
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createTagsInput} from './create-tags-input.svelte.js';
  import {setTagsInputContext} from './tags-input-context.svelte.js';

  let {this: e, asChild, children, ...props}: TagsInputProps = $props();

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

  let mergedProps = $derived(mergeProps(localProps, tagsInput.getRootProps()));

  setTagsInputContext(tagsInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, tagsInput)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(tagsInput)}
  </div>
{/if}
