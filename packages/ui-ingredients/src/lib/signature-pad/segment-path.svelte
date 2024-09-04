<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {SegmentPathProps} from '@zag-js/signature-pad';

  export interface SignaturePadSegmentPathProps
    extends Assign<HtmlIngredientProps<'path'>, SegmentPathProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSignaturePadContext} from './context.svelte.js';

  let {path, asChild, children, ...props}: SignaturePadSegmentPathProps =
    $props();

  let signaturePad = getSignaturePadContext();

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
