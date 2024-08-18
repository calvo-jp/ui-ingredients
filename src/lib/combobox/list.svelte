<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ComboboxListProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxListProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.api.getListProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
