<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimePickerContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import type {Action} from 'svelte/action';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimePickerContentProps = $props();

  let timePicker = getTimePickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      timePicker.getContentProps(),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(presence.ref, mergedProps)}
{:else}
  <div bind:this={ref} use:presence.ref {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
