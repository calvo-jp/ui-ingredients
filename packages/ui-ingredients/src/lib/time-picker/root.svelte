<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTimePickerProps,
    CreateTimePickerReturn,
  } from './create-time-picker.svelte.js';

  export interface TimePickerProps
    extends Assign<
      HtmlIngredientProps<'div', CreateTimePickerReturn>,
      CreateTimePickerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setTimePickerContext} from './context.svelte.js';
  import {createTimePicker} from './create-time-picker.svelte.js';

  let {asChild, children, ...props}: TimePickerProps = $props();

  let [timePickerProps, otherProps] = $derived(
    createSplitProps<CreateTimePickerProps>([
      'id',
      'ids',
      'min',
      'max',
      'name',
      'open',
      'steps',
      'value',
      'locale',
      'readOnly',
      'disabled',
      'defaultOpen',
      'placeholder',
      'positioning',
      'allowSeconds',
      'disableLayer',
      'onOpenChange',
      'onValueChange',
      'onFocusChange',
    ])(props),
  );

  let timePicker = createTimePicker(reflect(() => timePickerProps));

  let mergedProps = $derived(mergeProps(otherProps, timePicker.getRootProps()));

  setTimePickerContext(timePicker);
</script>

{#if asChild}
  {@render asChild(mergedProps, timePicker)}
{:else}
  <div {...mergedProps}>
    {@render children?.(timePicker)}
  </div>
{/if}
