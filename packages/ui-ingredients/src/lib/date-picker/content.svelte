<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext} from './context.svelte.js';

  let {children, ...props}: DatePickerContentProps = $props();

  let context = datePickerContext.get();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
