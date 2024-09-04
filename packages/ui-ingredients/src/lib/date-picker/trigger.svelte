<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTriggerProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(mergeProps(props, datePicker.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
