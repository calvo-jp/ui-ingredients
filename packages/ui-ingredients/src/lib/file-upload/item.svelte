<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/file-upload';

  export interface FileUploadItemProps extends Assign<HtmlProps<'div'>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {file, children, ...props}: FileUploadItemProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps: ItemProps = $derived({
    file,
  });

  let attrs = $derived(mergeProps(props, fileUpload.getItemProps(itemProps)));

  fileUploadItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
