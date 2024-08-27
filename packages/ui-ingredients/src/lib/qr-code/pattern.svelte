<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface QRCodePatternProps extends HtmlProps<'path'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {children, ...props}: QRCodePatternProps = $props();

  let qrCode = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, qrCode.getPatternProps()));
</script>

<path {...attrs}>
  {@render children?.()}
</path>
