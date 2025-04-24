<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateDatePickerProps,
    CreateDatePickerReturn,
  } from './create-date-picker.svelte.js';

  export interface DatePickerProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateDatePickerReturn>,
        Optional<CreateDatePickerProps, 'id'>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createDatePicker} from './create-date-picker.svelte.js';
  import {setDatePickerContext} from './date-picker-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, datePickerProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createDatePickerProps, localProps] = $derived(
    createSplitProps<Omit<CreateDatePickerProps, 'id'>>([
      'closeOnSelect',
      'defaultFocusedValue',
      'defaultOpen',
      'defaultValue',
      'defaultView',
      'disabled',
      'fixedWeeks',
      'focusedValue',
      'format',
      'ids',
      'isDateUnavailable',
      'locale',
      'max',
      'maxView',
      'min',
      'minView',
      'name',
      'numOfMonths',
      'onFocusChange',
      'onOpenChange',
      'onValueChange',
      'onViewChange',
      'open',
      'parse',
      'placeholder',
      'positioning',
      'readOnly',
      'selectionMode',
      'startOfWeek',
      'timeZone',
      'translations',
      'value',
      'view',
    ])(datePickerProps),
  );

  let datePicker = createDatePicker(
    reflect(() => ({...createDatePickerProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: datePicker.open,
    })),
  );

  let mergedProps = $derived(mergeProps(datePicker.getRootProps(), localProps));

  setDatePickerContext(datePicker);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, datePicker)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(datePicker)}
  </div>
{/if}
