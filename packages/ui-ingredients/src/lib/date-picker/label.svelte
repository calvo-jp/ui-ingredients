<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {LabelProps} from '@zag-js/date-picker';

  export interface DatePickerLabelProps
    extends Assign<HtmlIngredientProps<'label'>, LabelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: DatePickerLabelProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getLabelProps({index})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
