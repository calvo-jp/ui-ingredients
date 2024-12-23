<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/file-upload';

  export interface FileUploadItemProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getFileUploadContext,
    setFileUploadItemPropsContext,
  } from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadItemProps = $props();

  let fileUpload = getFileUploadContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['file'])(props),
  );

  let mergedProps = $derived(
    mergeProps(fileUpload.getItemProps(itemProps), localProps),
  );

  setFileUploadItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
