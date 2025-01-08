<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AlertDialogTitleProps
    extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getAlertDialogContext} from './alert-dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertDialogTitleProps = $props();

  let alertDialog = getAlertDialogContext();

  let mergedProps = $derived(mergeProps(alertDialog.getTitleProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </h2>
{/if}
