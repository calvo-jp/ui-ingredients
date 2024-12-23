<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
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
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
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
