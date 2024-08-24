<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface QRCodeOverlayProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {qrCodeContext} from './context.svelte.js';

  let {children, ...props}: QRCodeOverlayProps = $props();

  let context = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, context.getOverlayProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
