<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TagsInputItemTextProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tagsInputContext, tagsInputItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TagsInputItemTextProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = tagsInputItemPropsContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getItemTextProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
