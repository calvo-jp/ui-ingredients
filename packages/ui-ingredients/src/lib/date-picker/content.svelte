<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerContentProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(mergeProps(props, datePicker.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
