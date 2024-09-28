<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadDropzoneProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFileUploadContext} from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadDropzoneProps = $props();

  let fileUpload = getFileUploadContext();

  let mergedProps = $derived(mergeProps(props, fileUpload.getDropzoneProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
