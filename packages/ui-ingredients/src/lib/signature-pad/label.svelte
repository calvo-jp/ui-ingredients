<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SignaturePadLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadLabelProps = $props();

  let signaturePad = signaturePadContext.get();

  let mergedProps = $derived(mergeProps(props, signaturePad.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
