<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TagsInputItemDeleteTriggerProps
    extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTagsInputContext, useTagsInputItemContext} from './context.svelte.js';

  let {children, ...props}: TagsInputItemDeleteTriggerProps = $props();

  let context = useTagsInputContext();
  let itemContext = useTagsInputItemContext();

  let attrs = $derived(mergeProps(props, context.getItemDeleteTriggerProps(itemContext)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
