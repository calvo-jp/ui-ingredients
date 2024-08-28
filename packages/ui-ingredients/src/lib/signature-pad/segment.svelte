<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface SignaturePadSegmentProps extends HtmlProps<'svg'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'svg'>, 'children'>]>;
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
