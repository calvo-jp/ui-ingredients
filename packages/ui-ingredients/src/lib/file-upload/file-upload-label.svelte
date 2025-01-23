<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FileUploadLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getFileUploadContext} from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadLabelProps = $props();

  let fileUpload = getFileUploadContext();
  let mergedProps = $derived(mergeProps(fileUpload.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
