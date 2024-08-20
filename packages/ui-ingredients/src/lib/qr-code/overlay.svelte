<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface QRCodeOverlayProps extends Assign<SvelteHTMLElements['div'], {}> {}
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
