<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface QRCodeOverlayProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QRCodeOverlayProps = $props();

  let qrCode = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, qrCode.getOverlayProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
