<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimePickerPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimePickerPositionerProps = $props();

  let timePicker = getTimePickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      timePicker.getPositionerProps(),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
