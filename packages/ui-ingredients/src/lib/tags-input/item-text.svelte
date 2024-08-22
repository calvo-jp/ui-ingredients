<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useTagsInputContext,
    useTagsInputItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: TagsInputItemTextProps = $props();

  let context = useTagsInputContext();

  let itemProps = useTagsInputItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
