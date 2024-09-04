<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimePickerTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimePickerTriggerProps = $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(mergeProps(props, timePicker.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
