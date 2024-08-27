<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateCheckboxProps, CreateCheckboxReturn} from './create-checkbox.svelte.js';

  export interface CheckboxProps
    extends Assign<Omit<HtmlProps<'label'>, 'children'>, CreateCheckboxProps> {
    asChild?: Snippet<
      [attrs: Omit<HtmlProps<'label'>, 'children'>, checkbox: CreateCheckboxReturn]
    >;
    children?: Snippet<[checkbox: CreateCheckboxReturn]>;
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

  let attrs = $derived(mergeProps(props, checkbox.getRootProps()));

  checkboxContext.set(checkbox);
</script>

{#if asChild}
  {@render asChild(attrs, checkbox)}
{:else}
  <label {...attrs}>
    {@render children?.(checkbox)}
  </label>
{/if}
