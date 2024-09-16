<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/file-upload';

  export interface FileUploadItemProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getFileUploadContext,
    setFileUploadItemPropsContext,
  } from './context.svelte.js';

  let {this: e, asChild, children, ...props}: FileUploadItemProps = $props();

  let fileUpload = getFileUploadContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['file'])(props),
  );

  let mergedProps = $derived(
    mergeProps(localProps, fileUpload.getItemProps(itemProps)),
  );

  setFileUploadItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
