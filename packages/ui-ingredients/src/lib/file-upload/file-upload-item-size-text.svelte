<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadItemSizeTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getFileUploadContext,
    getFileUploadItemPropsContext,
  } from './file-upload-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: FileUploadItemSizeTextProps = $props();

  let fileUpload = getFileUploadContext();
  let itemProps = getFileUploadItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getItemSizeTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {fileUpload.getFileSize(itemProps.file)}
    {/if}
  </span>
{/if}
