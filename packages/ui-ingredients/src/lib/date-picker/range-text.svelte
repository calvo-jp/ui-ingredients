<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerRangeTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {children, ...props}: DatePickerRangeTextProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getRangeTextProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {datePicker.visibleRangeText.formatted}
  {/if}
</div>
