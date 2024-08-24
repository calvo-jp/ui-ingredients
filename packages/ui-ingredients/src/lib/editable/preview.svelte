<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditablePreviewProps extends HtmlIngredientProps<'div'> {}
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
