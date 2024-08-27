<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SignaturePadLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {children, ...props}: SignaturePadLabelProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
