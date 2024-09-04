<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimePickerPositionerProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimePickerPositionerProps = $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(
    mergeProps(props, timePicker.getPositionerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
