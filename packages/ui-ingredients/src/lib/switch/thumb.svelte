<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SwitchThumbProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSwitchContext} from './context.svelte.js';

  let {children, ...props}: SwitchThumbProps = $props();

  let context = useSwitchContext();

  let attrs = $derived(mergeProps(props, context.getThumbProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
