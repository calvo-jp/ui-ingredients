<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getComboboxContext} from './combobox-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ComboboxPositionerProps = $props();

  let combobox = getComboboxContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      combobox.getPositionerProps(),
      presence.getPresenceProps(),
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <div bind:this={e} {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
