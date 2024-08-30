<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/file-upload';

  export interface FileUploadItemProps
    extends Assign<HTMLProps<'div'>, ItemProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    fileUploadContext,
    fileUploadItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemProps = $props();

  let fileUpload = fileUploadContext.get();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['file'])(props),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, fileUpload.getItemProps(itemProps)),
  );

  fileUploadItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
