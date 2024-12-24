<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AlertDialogDescriptionProps
    extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getAlertDialogContext} from './alert-dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertDialogDescriptionProps = $props();

  let alertDialog = getAlertDialogContext();

  let mergedProps = $derived(
    mergeProps(alertDialog.getDescriptionProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
