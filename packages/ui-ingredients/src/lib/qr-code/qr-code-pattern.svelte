<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface QrCodePatternProps
    extends HtmlIngredientProps<'path', SVGPathElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getQrCodeContext} from './qr-code-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: QrCodePatternProps = $props();

  let qrCode = getQrCodeContext();

  let mergedProps = $derived(mergeProps(qrCode.getPatternProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <path bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </path>
{/if}
