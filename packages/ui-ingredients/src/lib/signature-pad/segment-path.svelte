<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {SegmentPathProps} from '@zag-js/signature-pad';
  import type {Snippet} from 'svelte';

  export interface SignaturePadSegmentPathProps
    extends Assign<HtmlProps<'path'>, SegmentPathProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'path'>, 'children'>]>;
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
