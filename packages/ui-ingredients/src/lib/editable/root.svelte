<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateEditableProps,
    CreateEditableReturn,
  } from './create-editable.svelte.js';

  export interface EditableProps
    extends Assign<
      HtmlIngredientProps<'div', CreateEditableReturn>,
      CreateEditableProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setEditableContext} from './context.svelte.js';
  import {createEditable} from './create-editable.svelte.js';

  let {asChild, children, ...props}: EditableProps = $props();

  let [editableProps, otherProps] = $derived(
    createSplitProps<CreateEditableProps>([
      'id',
      'ids',
      'name',
      'form',
      'edit',
      'value',
      'invalid',
      'readOnly',
      'required',
      'disabled',
      'maxLength',
      'submitMode',
      'autoResize',
      'defaultEdit',
      'placeholder',
      'finalFocusEl',
      'translations',
      'selectOnFocus',
      'onEditChange',
      'onValueChange',
      'onValueCommit',
      'onValueRevert',
      'activationMode',
      'onFocusOutside',
      'onInteractOutside',
      'onPointerDownOutside',
    ])(props),
  );

  let editable = createEditable(reflect(() => editableProps));

  let mergedProps = $derived(mergeProps(otherProps, editable.getRootProps()));

  setEditableContext(editable);
</script>

{#if asChild}
  {@render asChild(mergedProps, editable)}
{:else}
  <div {...mergedProps}>
    {@render children?.(editable)}
  </div>
{/if}
