<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DialogCloseTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getDialogContext} from './dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DialogCloseTriggerProps = $props();

  let dialog = getDialogContext();
  let mergedProps = $derived(mergeProps(dialog.getCloseTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
