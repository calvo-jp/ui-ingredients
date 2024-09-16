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
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {setCheckboxContext} from './checkbox-context.svelte.js';
  import {createCheckbox} from './create-checkbox.svelte.js';

  import {reflect} from '@zag-js/svelte';

  let {this: e, asChild, children, ...props}: CheckboxProps = $props();

  let [checkboxProps, localProps] = $derived(
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

  let mergedProps = $derived(mergeProps(localProps, checkbox.getRootProps()));

  setCheckboxContext(checkbox);
</script>

{#if asChild}
  {@render asChild(mergedProps, checkbox)}
{:else}
  <label bind:this={e} {...mergedProps}>
    {@render children?.(checkbox)}
  </label>
{/if}
