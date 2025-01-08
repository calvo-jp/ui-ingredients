<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FileUploadItemSizeTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getFileUploadContext,
    getFileUploadItemPropsContext,
  } from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadItemSizeTextProps = $props();

  let fileUpload = getFileUploadContext();
  let itemProps = getFileUploadItemPropsContext();
  let mergedProps = $derived(
    mergeProps(fileUpload.getItemSizeTextProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {fileUpload.getFileSize(itemProps.file)}
    {/if}
  </span>
{/if}
