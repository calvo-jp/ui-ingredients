<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateRadioGroupProps,
    CreateRadioGroupReturn,
  } from './create-radio-group.svelte.js';

  export interface RadioGroupProps
    extends Assign<
      HtmlIngredientProps<'div', CreateRadioGroupReturn>,
      CreateRadioGroupProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setRadioGroupContext} from './context.svelte.js';
  import {createRadioGroup} from './create-radio-group.svelte.js';

  let {asChild, children, ...props}: RadioGroupProps = $props();

  let [radioGroupProps, localProps] = $derived(
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

  let radioGroup = createRadioGroup(reflect(() => radioGroupProps));

  let mergedProps = $derived(mergeProps(localProps, radioGroup.getRootProps()));

  setRadioGroupContext(radioGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, radioGroup)}
{:else}
  <div {...mergedProps}>
    {@render children?.(radioGroup)}
  </div>
{/if}
