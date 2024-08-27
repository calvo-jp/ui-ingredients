<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface EditablePreviewProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {children, ...props}: EditablePreviewProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getPreviewProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {editable.value}
  {/if}
</div>
