<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateDatePickerProps,
    CreateDatePickerReturn,
  } from './create-date-picker.svelte.js';

  export interface DatePickerProps
    extends Assign<
      HtmlIngredientProps<'div', CreateDatePickerReturn>,
      CreateDatePickerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setDatePickerContext} from './context.svelte.js';
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

  let datePicker = createDatePicker(reflect(() => datePickerProps));
  let presence = createPresence({
    get present() {
      return datePicker.open;
    },
  });

  let mergedProps = $derived(mergeProps(otherProps, datePicker.getRootProps()));

  setDatePickerContext(datePicker);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, datePicker)}
{:else}
  <div {...mergedProps}>
    {@render children?.(datePicker)}
  </div>
{/if}
