<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateDatePickerProps,
    CreateDatePickerReturn,
  } from './create-date-picker.svelte.js';

  export interface DatePickerProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateDatePickerReturn>,
        CreateDatePickerProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createDatePicker} from './create-date-picker.svelte.js';
  import {setDatePickerContext} from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerProps = $props();

  let [presenceStrategyProps, rest] = $derived(
    createSplitProps<PresenceStrategyProps>([])(props),
  );

  let [createDatePickerProps, localProps] = $derived(
    createSplitProps<CreateDatePickerProps>([
      'id',
      'ids',
      'min',
      'max',
      'name',
      'open',
      'openControlled',
      'view',
      'value',
      'format',
      'locale',
      'disabled',
      'readOnly',
      'timeZone',
      'fixedWeeks',
      'startOfWeek',
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
    ])(rest),
  );

  let datePicker = createDatePicker(reflect(() => createDatePickerProps));
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
