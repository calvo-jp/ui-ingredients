<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateDatePickerProps,
    CreateDatePickerReturn,
  } from './create-date-picker.svelte.js';

  export interface DatePickerProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateDatePickerProps> {
    asChild?: AsChild<CreateDatePickerReturn>;
    children?: Snippet<[CreateDatePickerReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';
  import {createDatePicker} from './create-date-picker.svelte.js';

  let {asChild, children, ...props}: DatePickerProps = $props();

  let [datePickerProps, otherProps] = $derived(
    createSplitProps<CreateDatePickerProps>([
      'id',
      'ids',
      'min',
      'max',
      'name',
      'open',
      'view',
      'value',
      'modal',
      'format',
      'locale',
      'disabled',
      'readOnly',
      'timeZone',
      'fixedWeeks',
      'startOfWeek',
      'defaultOpen',
      'positioning',
      'numOfMonths',
      'translations',
      'focusedValue',
      'closeOnSelect',
      'selectionMode',
      'onViewChange',
      'onOpenChange',
      'onValueChange',
      'onFocusChange',
      'isDateUnavailable',
    ])(props),
  );

  let datePicker = createDatePicker(datePickerProps);

  let mergedProps = $derived(mergeProps(otherProps, datePicker.getRootProps()));

  datePickerContext.set(datePicker);
</script>

{#if asChild}
  {@render asChild(mergedProps, datePicker)}
{:else}
  <div {...mergedProps}>
    {@render children?.(datePicker)}
  </div>
{/if}
