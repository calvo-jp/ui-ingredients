<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ViewProps} from '@zag-js/date-picker';

  export interface DatePickerViewProps
    extends Assign<HtmlIngredientProps<'div'>, ViewProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    setDatePickerViewPropsContext,
  } from './context.svelte.js';

  let {
    view = 'day',
    this: e,
    asChild,
    children,
    ...props
  }: DatePickerViewProps = $props();

  let datePicker = getDatePickerContext();

  let viewProps: ViewProps = $derived({view});

  let mergedProps = $derived(
    mergeProps(props, datePicker.getViewProps(viewProps)),
  );

  setDatePickerViewPropsContext(() => viewProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
