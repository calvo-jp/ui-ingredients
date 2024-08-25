<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerClearTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext} from './context.svelte.js';

  let {children, ...props}: DatePickerClearTriggerProps = $props();

  let context = datePickerContext.get();

  let attrs = $derived(mergeProps(props, context.getClearTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
