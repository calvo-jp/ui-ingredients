<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SignaturePadSegmentProps
    extends HtmlIngredientProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSignaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadSegmentProps = $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(mergeProps(props, signaturePad.getSegmentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
