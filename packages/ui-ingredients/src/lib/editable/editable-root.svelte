<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateEditableProps,
    CreateEditableReturn,
  } from './create-editable.svelte.js';

  export interface EditableProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateEditableReturn>,
      CreateEditableProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createEditable} from './create-editable.svelte.js';
  import {setEditableContext} from './editable-context.svelte.js';

  let {this: e, asChild, children, ...props}: EditableProps = $props();

  let [createEditableProps, localProps] = $derived(
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

  let editable = createEditable(reflect(() => createEditableProps));

  let mergedProps = $derived(mergeProps(localProps, editable.getRootProps()));

  setEditableContext(editable);
</script>

{#if asChild}
  {@render asChild(mergedProps, editable)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(editable)}
  </div>
{/if}
