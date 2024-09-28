<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SignaturePadControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSignaturePadContext} from './signature-pad-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SignaturePadControlProps = $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(mergeProps(signaturePad.getControlProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
