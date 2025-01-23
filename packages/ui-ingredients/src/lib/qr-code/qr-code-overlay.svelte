<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface QrCodeOverlayProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getQrCodeContext} from './qr-code-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: QrCodeOverlayProps = $props();

  let qrCode = getQrCodeContext();

  let mergedProps = $derived(mergeProps(qrCode.getOverlayProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
