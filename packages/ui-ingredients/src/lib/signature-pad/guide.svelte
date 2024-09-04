<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SignaturePadGuideProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSignaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadGuideProps = $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(mergeProps(props, signaturePad.getGuideProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
