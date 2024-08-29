<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SignaturePadSegmentProps extends HtmlProps<'svg'> {
    asChild?: AsChild<HtmlProps<'svg'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadSegmentProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getSegmentProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <svg {...attrs}>
    {@render children?.()}
  </svg>
{/if}
