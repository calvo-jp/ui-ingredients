<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface QrCodeFrameProps
    extends HtmlIngredientProps<'svg', SVGSVGElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getQrCodeContext} from './qr-code-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: QrCodeFrameProps = $props();

  let qrCode = getQrCodeContext();

  let mergedProps = $derived(mergeProps(qrCode.getFrameProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
