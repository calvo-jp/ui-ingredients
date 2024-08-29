<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateDatePickerProps, CreateDatePickerReturn} from './create-date-picker.svelte.js';

  export interface DatePickerProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateDatePickerProps> {
    asChild?: AsChild<GenericHtmlProps, CreateDatePickerReturn>;
    children?: Snippet<[datePicker: CreateDatePickerReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    locale,
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
    asChild,
    children,
    ...props
  }: DatePickerProps = $props();

  let datePicker = createDatePicker({
    id,
    ids,
    min,
    max,
    name,
    open,
    view,
    value: $state.snapshot(value),
    modal,
    locale,
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

  let attrs = $derived(mergeProps(props, datePicker.getRootProps()));

  datePickerContext.set(datePicker);
</script>

{#if asChild}
  {@render asChild(attrs, datePicker)}
{:else}
  <div {...attrs}>
    {@render children?.(datePicker)}
  </div>
{/if}
