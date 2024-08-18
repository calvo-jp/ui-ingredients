<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SwitchLabelProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSwitchContext} from './context.svelte.js';

  let {children, ...props}: SwitchLabelProps = $props();

  let context = useSwitchContext();

  let attrs = $derived(mergeProps(props, context.api.getLabelProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
