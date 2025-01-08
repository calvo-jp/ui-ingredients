<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FileUploadDropzoneProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getFileUploadContext} from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadDropzoneProps = $props();

  let fileUpload = getFileUploadContext();

  let mergedProps = $derived(mergeProps(fileUpload.getDropzoneProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
