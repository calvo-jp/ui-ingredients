<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SignaturePadSegmentProps extends HTMLProps<'svg'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadSegmentProps = $props();

  let signaturePad = signaturePadContext.get();

  let mergedProps = $derived(mergeProps(props, signaturePad.getSegmentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
