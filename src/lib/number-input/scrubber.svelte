<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface NumberInputScrubberProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputScrubberProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.api.getScrubberProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
