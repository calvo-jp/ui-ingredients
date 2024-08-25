<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ViewProps} from '@zag-js/date-picker';

  export interface DatePickerViewProps extends Assign<HtmlProps<'div'>, ViewProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {datePickerContext, datePickerViewPropsContext} from './context.svelte.js';

  let {view = 'day', children, ...props}: DatePickerViewProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, parts.view.attrs));

  datePickerViewPropsContext.set(() => ({view}));
</script>

<div hidden={datePicker.view !== view} {...attrs}>
  {@render children?.()}
</div>
