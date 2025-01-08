<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FileUploadClearTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getFileUploadContext} from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadClearTriggerProps = $props();

  let fileUpload = getFileUploadContext();
  let mergedProps = $derived(
    mergeProps(fileUpload.getClearTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
