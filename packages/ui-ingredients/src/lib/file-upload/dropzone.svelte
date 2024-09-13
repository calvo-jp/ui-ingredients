<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadDropzoneProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFileUploadContext} from './context.svelte.js';

  let {
    this: e,
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
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
