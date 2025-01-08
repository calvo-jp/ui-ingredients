<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ColorPickerPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerPositionerProps = $props();

  let colorPicker = getColorPickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      colorPicker.getPositionerProps(),
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
