<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFileUploadContext} from './context.svelte.js';

  let {this: e, asChild, ...props}: FileUploadHiddenInputProps = $props();

  let fileUpload = getFileUploadContext();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getHiddenInputProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
