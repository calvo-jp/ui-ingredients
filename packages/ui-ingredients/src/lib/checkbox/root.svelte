<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateCheckboxProps,
    CreateCheckboxReturn,
  } from './create-checkbox.svelte.js';

  export interface CheckboxProps
    extends Assign<
      HtmlIngredientProps<'label', CreateCheckboxReturn>,
      CreateCheckboxProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {setCheckboxContext} from './context.svelte.js';
  import {createCheckbox} from './create-checkbox.svelte.js';

  import {reflect} from '@zag-js/svelte';

  let {asChild, children, ...props}: CheckboxProps = $props();

  let [checkboxProps, otherProps] = $derived(
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

  let checkbox = createCheckbox(reflect(() => checkboxProps));

  let mergedProps = $derived(mergeProps(otherProps, checkbox.getRootProps()));

  setCheckboxContext(checkbox);
</script>

{#if asChild}
  {@render asChild(mergedProps, checkbox)}
{:else}
  <label {...mergedProps}>
    {@render children?.(checkbox)}
  </label>
{/if}
