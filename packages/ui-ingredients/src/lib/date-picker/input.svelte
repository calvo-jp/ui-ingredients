<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {InputProps} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerInputProps extends Assign<HtmlProps<'input'>, InputProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'input'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: DatePickerInputProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getInputProps({index})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
