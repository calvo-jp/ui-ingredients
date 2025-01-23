<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';

  import type {DropzoneProps} from '@zag-js/file-upload';
  export interface FileUploadDropzoneProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, DropzoneProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getFileUploadContext} from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    disableClick,
    ...props
  }: FileUploadDropzoneProps = $props();

  let fileUpload = getFileUploadContext();
  let mergedProps = $derived(
    mergeProps(fileUpload.getDropzoneProps({disableClick}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
