<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TagsInputItemPreviewProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tagsInputContext, tagsInputItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TagsInputItemPreviewProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = tagsInputItemPropsContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getItemPreviewProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
