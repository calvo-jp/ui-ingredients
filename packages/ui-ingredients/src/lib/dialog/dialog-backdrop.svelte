<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface DialogBackdropProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {getPresenceStrategyPropsContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {getDialogContext} from './dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DialogBackdropProps = $props();

  let dialog = getDialogContext();
  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: dialog.open,
    })),
  );

  let mergedProps = $derived(
    mergeProps(props, dialog.getBackdropProps(), presence.getPresenceProps()),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.ref, mergedProps)}
  {:else}
    <div bind:this={ref} use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
