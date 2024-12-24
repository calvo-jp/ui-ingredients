<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FileUploadHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getFileUploadContext} from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: FileUploadHiddenInputProps = $props();

  let fileUpload = getFileUploadContext();

  let mergedProps = $derived(
    mergeProps(fileUpload.getHiddenInputProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
