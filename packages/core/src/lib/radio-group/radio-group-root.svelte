<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateRadioGroupProps,
    CreateRadioGroupReturn,
  } from './create-radio-group.svelte.js';

  export interface RadioGroupProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateRadioGroupReturn>,
      CreateRadioGroupProps
    > {}
</script>

<script lang="ts">
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createRadioGroup} from './create-radio-group.svelte.js';
  import {setRadioGroupContext} from './radio-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RadioGroupProps = $props();

  let [createRadioGroupProps, localProps] = $derived(
    createSplitProps<CreateRadioGroupProps>([
      'id',
      'ids',
      'form',
      'name',
      'value',
      'disabled',
      'readOnly',
      'orientation',
      'onValueChange',
    ])(props),
  );

  let radioGroup = createRadioGroup(reflect(() => createRadioGroupProps));

  let mergedProps = $derived(mergeProps(radioGroup.getRootProps(), localProps));

  setRadioGroupContext(radioGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, radioGroup)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(radioGroup)}
  </div>
{/if}
