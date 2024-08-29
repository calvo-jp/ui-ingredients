<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SignaturePadLabelProps extends HtmlProps<'label'> {
    asChild?: AsChild<HtmlProps<'label'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadLabelProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
