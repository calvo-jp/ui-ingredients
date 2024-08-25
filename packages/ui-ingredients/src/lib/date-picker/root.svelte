<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateDatePickerProps, CreateDatePickerReturn} from './create-date-picker.svelte.js';

  export interface DatePickerProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateDatePickerProps> {
    children?: Snippet<[api: CreateDatePickerReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext} from './context.svelte.js';
  import {createDatePicker} from './create-date-picker.svelte.js';

  let {
    id,
    ids,
    min,
    max,
    name,
    open,
    view,
    value,
    modal,
    disabled,
    readOnly,
    timeZone,
    fixedWeeks,
    startOfWeek,
    defaultOpen,
    positioning,
    numOfMonths,
    translations,
    focusedValue,
    closeOnSelect,
    selectionMode,
    format,
    onViewChange,
    onOpenChange,
    onValueChange,
    onFocusChange,
    isDateUnavailable,
    children,
    ...props
  }: DatePickerProps = $props();

  let context = createDatePicker({
    id,
    ids,
    min,
    max,
    name,
    open,
    view,
    value: $state.snapshot(value),
    modal,
    disabled,
    readOnly,
    timeZone,
    fixedWeeks,
    defaultOpen,
    startOfWeek,
    positioning,
    numOfMonths,
    translations,
    focusedValue,
    closeOnSelect,
    selectionMode,
    format,
    onViewChange,
    onOpenChange,
    onValueChange,
    onFocusChange,
    isDateUnavailable,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  datePickerContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
