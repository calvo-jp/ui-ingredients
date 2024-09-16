<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerNextTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerViewPropsContext,
  } from './date-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: DatePickerNextTriggerProps = $props();

  let datePicker = getDatePickerContext();
  let viewProps = getDatePickerViewPropsContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getNextTriggerProps(viewProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
