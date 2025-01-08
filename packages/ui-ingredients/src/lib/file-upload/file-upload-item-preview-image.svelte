<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FileUploadItemPreviewImageProps
    extends HtmlIngredientProps<'img', HTMLImageElement> {}
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
    ...props
  }: FileUploadItemPreviewImageProps = $props();

  let url = $state('');

  let fileUpload = getFileUploadContext();
  let itemProps = getFileUploadItemPropsContext();
  let mergedProps = $derived(
    mergeProps(fileUpload.getItemPreviewImageProps({url, ...itemProps}), props),
  );

  $effect(() => {
    fileUpload.createFileUrl(itemProps.file, (result) => {
      url = result;
    });
  });
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <img bind:this={ref} {...mergedProps} />
{/if}
