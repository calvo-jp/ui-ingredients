<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadItemGroupProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFileUploadContext} from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemGroupProps = $props();

  let fileUpload = getFileUploadContext();

  let mergedProps = $derived(mergeProps(props, fileUpload.getItemGroupProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
