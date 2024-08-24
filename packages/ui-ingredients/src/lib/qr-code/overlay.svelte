<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface QRCodeOverlayProps extends HtmlIngredientProps<'div'> {}
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
