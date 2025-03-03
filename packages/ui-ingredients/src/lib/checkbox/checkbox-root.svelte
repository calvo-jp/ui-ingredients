<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateCheckboxProps,
    CreateCheckboxReturn,
  } from './create-checkbox.svelte.js';

  export interface CheckboxProps
    extends Assign<
      HtmlIngredientProps<'label', HTMLLabelElement, CreateCheckboxReturn>,
      Optional<CreateCheckboxProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setCheckboxContext} from './checkbox-context.svelte.js';
  import {createCheckbox} from './create-checkbox.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: CheckboxProps = $props();

  let uid = $props.id();

  let [createCheckboxProps, localProps] = $derived(
    createSplitProps<Omit<CreateCheckboxProps, 'id'>>([
      'checked',
      'defaultChecked',
      'disabled',
      'form',
      'ids',
      'invalid',
      'name',
      'onCheckedChange',
      'readOnly',
      'required',
      'value',
    ])(rest),
  );

  let checkbox = createCheckbox(
    reflect(() => ({...createCheckboxProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(checkbox.getRootProps(), localProps));

  setCheckboxContext(checkbox);
</script>

{#if asChild}
  {@render asChild(mergedProps, checkbox)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.(checkbox)}
  </label>
{/if}
