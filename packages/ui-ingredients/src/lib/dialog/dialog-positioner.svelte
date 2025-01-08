<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DialogPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
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
  }: DialogPositionerProps = $props();

  let dialog = getDialogContext();
  let presence = getPresenceContext();
  let mergedProps = $derived(
    mergeProps(dialog.getPositionerProps(), presence.getPresenceProps(), props),
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
