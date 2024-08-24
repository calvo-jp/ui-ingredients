<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface EditablePreviewProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {editableContext} from './context.svelte.js';

  let {children, ...props}: EditablePreviewProps = $props();

  let context = editableContext.get();

  let attrs = $derived(mergeProps(props, context.getPreviewProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.value}
  {/if}
</div>
