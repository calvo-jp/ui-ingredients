<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ViewProps} from '@zag-js/date-picker';

  export interface DatePickerViewProps
    extends Assign<HTMLProps<'div'>, ViewProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    datePickerContext,
    datePickerViewPropsContext,
  } from './context.svelte.js';

  let {
    view = 'day',
    asChild,
    children,
    ...props
  }: DatePickerViewProps = $props();

  let datePicker = datePickerContext.get();

  let viewProps: ViewProps = $derived({view});

  let mergedProps = $derived(
    mergeProps(props, datePicker.getViewProps(viewProps)),
  );

  datePickerViewPropsContext.set(() => viewProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
