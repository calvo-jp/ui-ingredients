<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SignaturePadSegmentProps
    extends HtmlIngredientProps<'svg', SVGSVGElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSignaturePadContext} from './signature-pad-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SignaturePadSegmentProps = $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(mergeProps(signaturePad.getSegmentProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
