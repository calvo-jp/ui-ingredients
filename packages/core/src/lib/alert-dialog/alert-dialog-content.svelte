<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface AlertDialogContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getAlertDialogContext} from './alert-dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertDialogContentProps = $props();

  let alertDialog = getAlertDialogContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      alertDialog.getContentProps(),
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
