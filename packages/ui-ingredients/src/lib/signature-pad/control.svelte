<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SignaturePadControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {children, ...props}: SignaturePadControlProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
