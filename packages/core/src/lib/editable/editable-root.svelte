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
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
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
      'id',
      'ids',
      'name',
      'form',
      'edit',
      'editControlled',
      'value',
      'invalid',
      'readOnly',
      'required',
      'disabled',
      'maxLength',
      'submitMode',
      'autoResize',
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
      'autoResize',
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
