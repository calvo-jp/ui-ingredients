<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ComboboxPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
  import {getComboboxContext} from './combobox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxPositionerProps = $props();

  let combobox = getComboboxContext();
  let presence = getPresenceContext();
  let mergedProps = $derived(
    mergeProps(
      combobox.getPositionerProps(),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <div bind:this={ref} {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
