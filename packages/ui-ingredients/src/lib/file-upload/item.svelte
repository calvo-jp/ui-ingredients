<script lang="ts" module>
  import type {AsChild, Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/file-upload';

  export interface FileUploadItemProps extends Assign<HtmlProps<'div'>, ItemProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {file, asChild, children, ...props}: FileUploadItemProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps: ItemProps = $derived({
    file,
  });

  let attrs = $derived(mergeProps(props, fileUpload.getItemProps(itemProps)));

  fileUploadItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
