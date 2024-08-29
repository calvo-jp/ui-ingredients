<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateEditableProps, CreateEditableReturn} from './create-editable.svelte.js';

  export interface EditableProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateEditableProps> {
    asChild?: AsChild<CreateEditableReturn>;
    children?: Snippet<[CreateEditableReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';
  import {createEditable} from './create-editable.svelte.js';

  let {
    id,
    ids,
    name,
    form,
    edit,
    value,
    invalid,
    readOnly,
    required,
    disabled,
    maxLength,
    submitMode,
    autoResize,
    defaultEdit,
    placeholder,
    finalFocusEl,
    translations,
    selectOnFocus,
    onEditChange,
    onValueChange,
    onValueCommit,
    onValueRevert,
    activationMode,
    onFocusOutside,
    onInteractOutside,
    onPointerDownOutside,
    asChild,
    children,
    ...props
  }: EditableProps = $props();

  let editable = createEditable({
    id,
    ids,
    name,
    form,
    edit,
    value: $state.snapshot(value),
    invalid,
    readOnly,
    required,
    disabled,
    maxLength,
    submitMode,
    autoResize,
    defaultEdit,
    placeholder,
    finalFocusEl,
    translations,
    selectOnFocus,
    onEditChange,
    onValueChange,
    onValueCommit,
    onValueRevert,
    activationMode,
    onFocusOutside,
    onInteractOutside,
    onPointerDownOutside,
  });

  let mergedProps = $derived(mergeProps(props, editable.getRootProps()));

  editableContext.set(editable);
</script>

{#if asChild}
  {@render asChild(mergedProps, editable)}
{:else}
  <div {...mergedProps}>
    {@render children?.(editable)}
  </div>
{/if}
