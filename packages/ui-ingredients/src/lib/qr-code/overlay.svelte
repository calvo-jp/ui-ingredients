<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface QRCodeOverlayProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {children, ...props}: QRCodeOverlayProps = $props();

  let qrCode = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, qrCode.getOverlayProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
