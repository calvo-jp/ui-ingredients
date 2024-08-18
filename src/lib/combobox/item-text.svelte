<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ComboboxItemTextProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext, useComboboxItemContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemTextProps = $props();

  let context = useComboboxContext();
  let itemContext = useComboboxItemContext();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemContext)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
