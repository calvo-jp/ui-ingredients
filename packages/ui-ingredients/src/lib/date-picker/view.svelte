<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {ViewProps} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerViewProps extends Assign<HtmlProps<'div'>, ViewProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {datePickerContext, datePickerViewPropsContext} from './context.svelte.js';

  let {view, asChild, children, ...props}: DatePickerViewProps = $props();

  let datePicker = datePickerContext.get();

  let viewProps: ViewProps = $derived({
    view: view ?? 'day',
  });

  let attrs = $derived(
    mergeProps(props, datePicker.getViewProps(viewProps), parts.view.attrs as Record<string, any>),
  );

  datePickerViewPropsContext.set(() => viewProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div hidden={datePicker.view !== view} {...attrs}>
    {@render children?.()}
  </div>
{/if}
