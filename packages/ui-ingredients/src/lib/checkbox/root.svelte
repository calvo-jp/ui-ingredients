<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateCheckboxProps, CreateCheckboxReturn} from './create-checkbox.svelte.js';

  export interface CheckboxProps
    extends Assign<Omit<HtmlProps<'label'>, 'children'>, CreateCheckboxProps> {
    children?: Snippet<[checkbox: CreateCheckboxReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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

<label {...attrs}>
  {@render children?.(checkbox)}
</label>
