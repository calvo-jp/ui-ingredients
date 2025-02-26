<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
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
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createEditable} from './create-editable.svelte.js';
  import {setEditableContext} from './editable-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: EditableProps = $props();

  let [createEditableProps, localProps] = $derived(
    createSplitProps<CreateEditableProps>([
      'activationMode',
      'autoResize',
      'defaultEdit',
      'defaultValue',
      'disabled',
      'edit',
      'finalFocusEl',
      'form',
      'id',
      'ids',
      'invalid',
      'maxLength',
      'name',
      'onEditChange',
      'onFocusOutside',
      'onInteractOutside',
      'onPointerDownOutside',
      'onValueChange',
      'onValueCommit',
      'onValueRevert',
      'placeholder',
      'readOnly',
      'required',
      'selectOnFocus',
      'submitMode',
      'translations',
      'value',
    ])(props),
  );

  let editable = createEditable(reflect(() => createEditableProps));
  let mergedProps = $derived(mergeProps(editable.getRootProps(), localProps));

  setEditableContext(editable);
</script>

{#if asChild}
  {@render asChild(mergedProps, editable)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(editable)}
  </div>
{/if}
