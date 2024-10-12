<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AlertDialogTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAlertDialogContext} from './alert-dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertDialogTriggerProps = $props();

  let alertDialog = getAlertDialogContext();

  let mergedProps = $derived(mergeProps(alertDialog.getTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
