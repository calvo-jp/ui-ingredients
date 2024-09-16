<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FileUploadTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFileUploadContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: FileUploadTriggerProps = $props();

  let fileUpload = getFileUploadContext();

  let mergedProps = $derived(mergeProps(props, fileUpload.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
