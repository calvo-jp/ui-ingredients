<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getDialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogPositionerProps = $props();

  let dialog = getDialogContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, dialog.getPositionerProps(), presence.getRootProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
