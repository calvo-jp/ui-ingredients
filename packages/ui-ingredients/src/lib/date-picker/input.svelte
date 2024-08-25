<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {InputProps} from '@zag-js/date-picker';

  export interface DatePickerInputProps extends Assign<HtmlProps<'input'>, InputProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext} from './context.svelte.js';

  let {index, children, ...props}: DatePickerInputProps = $props();

  let context = datePickerContext.get();

  let attrs = $derived(mergeProps(props, context.getInputProps({index})));
</script>

<input {...attrs} />
