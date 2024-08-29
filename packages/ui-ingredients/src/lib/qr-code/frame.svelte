<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface QRCodeFrameProps extends HtmlProps<'svg'> {
    asChild?: AsChild<HtmlProps<'svg'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QRCodeFrameProps = $props();

  let qrCode = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, qrCode.getFrameProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <svg {...attrs}>
    {@render children?.()}
  </svg>
{/if}
