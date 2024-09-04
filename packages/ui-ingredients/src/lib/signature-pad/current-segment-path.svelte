<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SignaturePadCurrentSegmentPathProps
    extends HtmlIngredientProps<'path'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSignaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadCurrentSegmentPathProps =
    $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(
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
    {@render asChild(mergedProps)}
  {:else}
    <path {...mergedProps}>
      {@render children?.()}
    </path>
  {/if}
{/if}
