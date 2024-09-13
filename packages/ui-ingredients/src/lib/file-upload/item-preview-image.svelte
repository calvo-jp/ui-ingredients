<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadItemPreviewImageProps
    extends HtmlIngredientProps<'img'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getFileUploadContext,
    getFileUploadItemPropsContext,
  } from './context.svelte.js';

  let {this: e, asChild, ...props}: FileUploadItemPreviewImageProps = $props();

  let url = $state('');

  let fileUpload = getFileUploadContext();
  let itemProps = getFileUploadItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getItemPreviewImageProps({url, ...itemProps})),
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
  <img bind:this={e} {...mergedProps} />
{/if}
