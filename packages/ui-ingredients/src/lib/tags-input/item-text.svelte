<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TagsInputItemTextProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTagsInputContext, useTagsInputItemContext} from './context.svelte.js';

  let {children, ...props}: TagsInputItemTextProps = $props();

  let context = useTagsInputContext();
  let itemContext = useTagsInputItemContext();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemContext)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
