<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {SegmentPathProps} from '@zag-js/signature-pad';

  export interface SignaturePadSegmentPathProps
    extends Assign<HtmlProps<'path'>, SegmentPathProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {signaturePadContext} from './context.svelte.js';

  let {path, children, ...props}: SignaturePadSegmentPathProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getSegmentPathProps({path})));
</script>

<path {...attrs}>
  {@render children?.()}
</path>
