<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface PopoverTitleProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePopoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverTitleProps = $props();

  let context = usePopoverContext();

  let attrs = $derived(mergeProps(props, context.api.getTitleProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
