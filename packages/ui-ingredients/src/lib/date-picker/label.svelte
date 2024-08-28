<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {LabelProps} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerLabelProps extends Assign<HtmlProps<'label'>, LabelProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'label'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: DatePickerLabelProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getLabelProps({index})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
