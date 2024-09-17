<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ColorPickerPositionerProps = $props();

  let colorPicker = getColorPickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getPositionerProps(),
      presence.getPresenceProps(),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
