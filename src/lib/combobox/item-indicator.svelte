<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ComboboxItemIndicatorProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext, useComboboxItemContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemIndicatorProps = $props();

  let context = useComboboxContext();
  let itemContext = useComboboxItemContext();

  let attrs = $derived(mergeProps(props, context.api.getItemIndicatorProps(itemContext)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
