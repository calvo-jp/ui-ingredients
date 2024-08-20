<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TagsInputItemPreviewProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTagsInputContext, useTagsInputItemContext} from './context.svelte.js';

  let {children, ...props}: TagsInputItemPreviewProps = $props();

  let context = useTagsInputContext();
  let itemContext = useTagsInputItemContext();

  let attrs = $derived(mergeProps(props, context.getItemPreviewProps(itemContext)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
