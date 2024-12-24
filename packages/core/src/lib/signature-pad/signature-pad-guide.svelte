<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SignaturePadGuideProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSignaturePadContext} from './signature-pad-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SignaturePadGuideProps = $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(mergeProps(signaturePad.getGuideProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
