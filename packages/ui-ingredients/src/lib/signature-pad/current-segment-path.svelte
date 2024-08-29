<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SignaturePadCurrentSegmentPathProps extends HtmlProps<'path'> {
    asChild?: AsChild<HtmlProps<'path'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {path, asChild, children, ...props}: SignaturePadCurrentSegmentPathProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      signaturePad.getSegmentPathProps({
        path: signaturePad.currentPath ?? '',
      }),
    ),
  );
</script>

{#if signaturePad.currentPath}
  {#if asChild}
    {@render asChild(attrs)}
  {:else}
    <path {...attrs}>
      {@render children?.()}
    </path>
  {/if}
{/if}
