<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateEditableProps, CreateEditableReturn} from './create-editable.svelte.js';

  export interface EditableProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateEditableProps> {
    asChild?: AsChild<GenericHtmlProps, CreateEditableReturn>;
    children?: Snippet<[editable: CreateEditableReturn]>;
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

  let attrs = $derived(mergeProps(props, editable.getRootProps()));

  editableContext.set(editable);
</script>

{#if asChild}
  {@render asChild(attrs, editable)}
{:else}
  <div {...attrs}>
    {@render children?.(editable)}
  </div>
{/if}
