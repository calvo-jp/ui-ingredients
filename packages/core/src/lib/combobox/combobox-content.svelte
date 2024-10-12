<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface ComboboxContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getComboboxContext} from './combobox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxContentProps = $props();

  let combobox = getComboboxContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(combobox.getContentProps(), presence.getPresenceProps(), props),
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
