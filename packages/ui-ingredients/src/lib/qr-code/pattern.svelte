<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface QrCodePatternProps extends HtmlIngredientProps<'path'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getQrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QrCodePatternProps = $props();

  let qrCode = getQrCodeContext();

  let mergedProps = $derived(mergeProps(props, qrCode.getPatternProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <path {...mergedProps}>
    {@render children?.()}
  </path>
{/if}
