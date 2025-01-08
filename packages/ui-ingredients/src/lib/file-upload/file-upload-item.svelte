<script lang="ts" module>
  import type {ItemProps} from '@zag-js/file-upload';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface FileUploadItemProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
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

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['file'])(props),
  );

  let fileUpload = getFileUploadContext();
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
