<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerPositionerProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerPositionerProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getPositionerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
