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
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {checkboxContext} from './context.svelte.js';
  import {createCheckbox} from './create-checkbox.svelte.js';

  let {asChild, children, ...props}: CheckboxProps = $props();

  let [checkboxProps, otherProps] = createSplitProps<CreateCheckboxProps>([
    'id',
    'ids',
    'form',
    'name',
    'value',
    'checked',
    'invalid',
    'disabled',
    'readOnly',
    'required',
    'onCheckedChange',
  ])(props);

  let checkbox = createCheckbox(checkboxProps);

  let mergedProps = $derived(mergeProps(otherProps, checkbox.getRootProps()));

  checkboxContext.set(checkbox);
</script>

{#if asChild}
  {@render asChild(mergedProps, checkbox)}
{:else}
  <label {...mergedProps}>
    {@render children?.(checkbox)}
  </label>
{/if}
