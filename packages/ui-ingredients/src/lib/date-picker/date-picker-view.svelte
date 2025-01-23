<script lang="ts" module>
  import type {ViewProps} from '@zag-js/date-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface DatePickerViewProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ViewProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getDatePickerContext,
    setDatePickerViewPropsContext,
  } from './date-picker-context.svelte.js';

  let {
    view = 'day',
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerViewProps = $props();

  let datePicker = getDatePickerContext();
  let viewProps: ViewProps = $derived({view});
  let mergedProps = $derived(
    mergeProps(datePicker.getViewProps(viewProps), props),
  );

  setDatePickerViewPropsContext(() => viewProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
