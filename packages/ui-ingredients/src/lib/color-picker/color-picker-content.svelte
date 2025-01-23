<script lang="ts" module>
  import type {Action} from 'svelte/action';
  import type {HtmlIngredientProps} from '../types.js';

  export interface ColorPickerContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerContentProps = $props();

  let colorPicker = getColorPickerContext();
  let presence = getPresenceContext();
  let mergedProps = $derived(
    mergeProps(
      colorPicker.getContentProps(),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.setReference, mergedProps)}
  {:else}
    <div bind:this={ref} use:presence.setReference {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
