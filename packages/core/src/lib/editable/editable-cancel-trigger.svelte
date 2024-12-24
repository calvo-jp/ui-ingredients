<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface EditableCancelTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getEditableContext} from './editable-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: EditableCancelTriggerProps = $props();

  let editable = getEditableContext();

  let mergedProps = $derived(
    mergeProps(editable.getCancelTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
