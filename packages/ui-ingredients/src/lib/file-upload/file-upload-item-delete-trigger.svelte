<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FileUploadItemDeleteTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getFileUploadContext,
    getFileUploadItemPropsContext,
  } from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadItemDeleteTriggerProps = $props();

  let fileUpload = getFileUploadContext();
  let itemProps = getFileUploadItemPropsContext();
  let mergedProps = $derived(
    mergeProps(fileUpload.getItemDeleteTriggerProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
