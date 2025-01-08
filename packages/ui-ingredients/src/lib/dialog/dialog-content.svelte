<script lang="ts" module>
  import type {Action} from 'svelte/action';
  import type {HtmlIngredientProps} from '../types.js';

  export interface DialogContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
  import {getDialogContext} from './dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DialogContentProps = $props();

  let dialog = getDialogContext();
  let presence = getPresenceContext();
  let mergedProps = $derived(
    mergeProps(dialog.getContentProps(), presence.getPresenceProps(), props),
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
