<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFileUploadContext} from './file-upload-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: FileUploadItemGroupProps = $props();

  let fileUpload = getFileUploadContext();

  let mergedProps = $derived(mergeProps(props, fileUpload.getItemGroupProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
