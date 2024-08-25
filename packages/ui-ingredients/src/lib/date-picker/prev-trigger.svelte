<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerPrevTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerViewPropsContext} from './context.svelte.js';

  let {children, ...props}: DatePickerPrevTriggerProps = $props();

  let context = datePickerContext.get();

  let viewProps = datePickerViewPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getPrevTriggerProps(viewProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
