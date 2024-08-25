<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerTableRowProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerTablePropsContext} from './context.svelte.js';

  let {children, ...props}: DatePickerTableRowProps = $props();

  let context = datePickerContext.get();

  let tableProps = datePickerTablePropsContext.get();

  let attrs = $derived(mergeProps(props, context.getTableRowProps(tableProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
