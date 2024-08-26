<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SignaturePadGuideProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {signaturePadContext} from './context.svelte.js';

  let {children, ...props}: SignaturePadGuideProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getGuideProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
