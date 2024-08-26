<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SignaturePadSegmentProps extends HtmlProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {signaturePadContext} from './context.svelte.js';

  let {children, ...props}: SignaturePadSegmentProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getSegmentProps()));
</script>

<svg {...attrs}>
  {@render children?.()}
</svg>
