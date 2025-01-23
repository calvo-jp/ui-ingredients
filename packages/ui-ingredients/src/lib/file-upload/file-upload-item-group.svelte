<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FileUploadItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getFileUploadContext} from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadItemGroupProps = $props();

  let fileUpload = getFileUploadContext();
  let mergedProps = $derived(mergeProps(fileUpload.getItemGroupProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
