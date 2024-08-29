<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SignaturePadClearTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadClearTriggerProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getClearTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
