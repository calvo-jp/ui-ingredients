<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadItemPreviewProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
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
  }: FileUploadItemPreviewProps = $props();

  let fileUpload = getFileUploadContext();
  let itemProps = getFileUploadItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getItemPreviewProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
