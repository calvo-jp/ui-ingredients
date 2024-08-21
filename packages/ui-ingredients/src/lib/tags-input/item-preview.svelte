<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemPreviewProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useTagsInputContext,
    useTagsInputItemContext,
  } from './context.svelte.js';

  let {children, ...props}: TagsInputItemPreviewProps = $props();

  let context = useTagsInputContext();
  let itemContext = useTagsInputItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemPreviewProps(itemContext)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
