<script lang="ts" module>
  import type {AsChild, Assign, HtmlProps} from '$lib/types.js';
  import type {SegmentPathProps} from '@zag-js/signature-pad';

  export interface SignaturePadSegmentPathProps
    extends Assign<HtmlProps<'path'>, SegmentPathProps> {
    asChild?: AsChild<HtmlProps<'path'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {path, asChild, children, ...props}: SignaturePadSegmentPathProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getSegmentPathProps({path})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <path {...attrs}>
    {@render children?.()}
  </path>
{/if}
