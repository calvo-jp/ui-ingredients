<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateCheckboxProps, CreateCheckboxReturn} from './create-checkbox.svelte.js';

  export interface CheckboxProps
    extends Assign<Omit<HTMLProps<'label'>, 'children'>, CreateCheckboxProps> {
    asChild?: AsChild<CreateCheckboxReturn>;
    children?: Snippet<[CreateCheckboxReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {checkboxContext} from './context.svelte.js';
  import {createCheckbox} from './create-checkbox.svelte.js';

  let {
    id,
    ids,
    form,
    name,
    value,
    checked,
    invalid,
    disabled,
    readOnly,
    required,
    onCheckedChange,
    asChild,
    children,
    ...props
  }: CheckboxProps = $props();

  let checkbox = createCheckbox({
    id,
    ids,
    form,
    name,
    value: $state.snapshot(value),
    checked,
    invalid,
    disabled,
    readOnly,
    required,
    onCheckedChange,
  });

  let mergedProps = $derived(mergeProps(props, checkbox.getRootProps()));

  checkboxContext.set(checkbox);
</script>

{#if asChild}
  {@render asChild(mergedProps, checkbox)}
{:else}
  <label {...mergedProps}>
    {@render children?.(checkbox)}
  </label>
{/if}
