<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TimePickerContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import type {Action} from 'svelte/action';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
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
  {@render asChild(presence.setReference, mergedProps)}
{:else}
  <div bind:this={ref} use:presence.setReference {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
