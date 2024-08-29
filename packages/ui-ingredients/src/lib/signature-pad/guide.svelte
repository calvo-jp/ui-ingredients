<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SignaturePadGuideProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadGuideProps = $props();

  let signaturePad = signaturePadContext.get();

  let mergedProps = $derived(mergeProps(props, signaturePad.getGuideProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
