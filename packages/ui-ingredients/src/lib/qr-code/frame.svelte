<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface QRCodeFrameProps extends SvelteHtmlProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useQRCodeContext} from './context.svelte.js';

  let {children, ...props}: QRCodeFrameProps = $props();

  let context = useQRCodeContext();

  let attrs = $derived(mergeProps(props, context.getFrameProps()));
</script>

<svg {...attrs}>
  {@render children?.()}
</svg>
