<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTimePickerProps,
    CreateTimePickerReturn,
  } from './create-time-picker.svelte.js';

  export interface TimePickerProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateTimePickerProps> {
    asChild?: AsChild<CreateTimePickerReturn>;
    children?: Snippet<[CreateTimePickerReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {timePickerContext} from './context.svelte.js';
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

  timePickerContext.set(timePicker);
</script>

{#if asChild}
  {@render asChild(mergedProps, timePicker)}
{:else}
  <div {...mergedProps}>
    {@render children?.(timePicker)}
  </div>
{/if}
