<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {SegmentPathProps} from '@zag-js/signature-pad';

  export interface SignaturePadSegmentPathProps
    extends Assign<HTMLProps<'path'>, SegmentPathProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {path, asChild, children, ...props}: SignaturePadSegmentPathProps =
    $props();

  let signaturePad = signaturePadContext.get();

  let mergedProps = $derived(
    mergeProps(props, signaturePad.getSegmentPathProps({path})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <path {...mergedProps}>
    {@render children?.()}
  </path>
{/if}
