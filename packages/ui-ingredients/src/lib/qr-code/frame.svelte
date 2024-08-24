<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface QRCodeFrameProps extends HtmlIngredientProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {qrCodeContext} from './context.svelte.js';

  let {children, ...props}: QRCodeFrameProps = $props();

  let context = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, context.getFrameProps()));
</script>

<svg {...attrs}>
  {@render children?.()}
</svg>
