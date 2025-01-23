<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateCheckboxProps,
    CreateCheckboxReturn,
  } from './create-checkbox.svelte.js';

  export interface CheckboxProps
    extends Assign<
      HtmlIngredientProps<'label', HTMLLabelElement, CreateCheckboxReturn>,
      CreateCheckboxProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setCheckboxContext} from './checkbox-context.svelte.js';
  import {createCheckbox} from './create-checkbox.svelte.js';

  import {reflect} from '@zag-js/svelte';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CheckboxProps = $props();

  let [createCheckboxProps, localProps] = $derived(
    createSplitProps<CreateCheckboxProps>([
      'checked',
      'disabled',
      'form',
      'id',
      'ids',
      'invalid',
      'name',
      'onCheckedChange',
      'readOnly',
      'required',
      'value',
    ])(props),
  );

  let checkbox = createCheckbox(reflect(() => createCheckboxProps));

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
