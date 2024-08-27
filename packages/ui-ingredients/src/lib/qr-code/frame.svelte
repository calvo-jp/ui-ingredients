<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface QRCodeFrameProps extends HtmlProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {children, ...props}: QRCodeFrameProps = $props();

  let qrCode = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, qrCode.getFrameProps()));
</script>

<svg {...attrs}>
  {@render children?.()}
</svg>
