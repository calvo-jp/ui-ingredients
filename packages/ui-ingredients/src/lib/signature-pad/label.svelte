<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SignaturePadLabelProps
    extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSignaturePadContext} from './context.svelte.js';

  let {asChild, children, ...props}: SignaturePadLabelProps = $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(mergeProps(props, signaturePad.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
