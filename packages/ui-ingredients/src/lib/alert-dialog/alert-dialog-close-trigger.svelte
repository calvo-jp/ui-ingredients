<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AlertDialogCloseTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getAlertDialogContext} from './alert-dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertDialogCloseTriggerProps = $props();

  let alertDialog = getAlertDialogContext();

  let mergedProps = $derived(
    mergeProps(alertDialog.getCloseTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
