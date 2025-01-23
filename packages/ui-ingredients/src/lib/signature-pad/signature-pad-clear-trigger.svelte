<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SignaturePadClearTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getSignaturePadContext} from './signature-pad-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SignaturePadClearTriggerProps = $props();

  let signaturePad = getSignaturePadContext();
  let mergedProps = $derived(
    mergeProps(signaturePad.getClearTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
