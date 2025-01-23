<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SignaturePadCurrentSegmentPathProps
    extends HtmlIngredientProps<'path', SVGPathElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getSignaturePadContext} from './signature-pad-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SignaturePadCurrentSegmentPathProps = $props();

  let signaturePad = getSignaturePadContext();
  let mergedProps = $derived(
    mergeProps(
      signaturePad.getSegmentPathProps({path: signaturePad.currentPath ?? ''}),
      props,
    ),
  );
</script>

{#if signaturePad.currentPath}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <path bind:this={ref} {...mergedProps}>
      {@render children?.()}
    </path>
  {/if}
{/if}
