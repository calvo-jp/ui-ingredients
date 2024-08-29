<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/file-upload';

  export interface FileUploadItemProps extends Assign<HTMLProps<'div'>, ItemProps> {
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

  let mergedProps = $derived(mergeProps(props, fileUpload.getItemProps(itemProps)));

  fileUploadItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
