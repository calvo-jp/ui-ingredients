<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemPreviewProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useTagsInputContext,
    useTagsInputItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: TagsInputItemPreviewProps = $props();

  let context = useTagsInputContext();

  let itemProps = useTagsInputItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemPreviewProps(itemProps)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
