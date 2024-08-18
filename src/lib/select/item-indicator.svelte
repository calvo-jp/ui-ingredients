<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SelectItemIndicatorProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext, useSelectItemContext} from './context.svelte.js';

  let {children, ...props}: SelectItemIndicatorProps = $props();

  let context = useSelectContext();
  let itemContext = useSelectItemContext();

  let attrs = $derived(mergeProps(props, context.getItemIndicatorProps(itemContext)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
