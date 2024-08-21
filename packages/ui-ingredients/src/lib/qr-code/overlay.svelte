<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface QRCodeOverlayProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useQRCodeContext} from './context.svelte.js';

  let {children, ...props}: QRCodeOverlayProps = $props();

  let context = useQRCodeContext();

  let attrs = $derived(mergeProps(props, context.getOverlayProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
