<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface EditablePreviewProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useEditableContext} from './context.svelte.js';

  let {children, ...props}: EditablePreviewProps = $props();

  let context = useEditableContext();

  let attrs = $derived(mergeProps(props, context.getPreviewProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.value}
  {/if}
</div>
