<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface FileUploadItemPreviewImageProps extends HtmlProps<'img'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'img'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {asChild, ...props}: FileUploadItemPreviewImageProps = $props();

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

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <img {...attrs} />
{/if}
