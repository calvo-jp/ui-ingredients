<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimePickerContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimePickerContentProps = $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(mergeProps(props, timePicker.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
