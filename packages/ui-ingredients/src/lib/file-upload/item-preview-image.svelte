<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadItemPreviewImageProps extends HtmlProps<'img'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {...props}: FileUploadItemPreviewImageProps = $props();

  let url = $state('');

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getItemPreviewImageProps({url, ...itemProps})));

  $effect(() => {
    fileUpload.createFileUrl(itemProps.file, (result) => {
      url = result;
    });
  });
</script>

<img {...attrs} />
