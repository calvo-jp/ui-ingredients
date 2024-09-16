<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerRangeTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: DatePickerRangeTextProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(mergeProps(props, datePicker.getRangeTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {datePicker.visibleRangeText.start}
    {/if}
  </span>
{/if}
