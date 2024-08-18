<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface RadioGroupIndicatorProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRadioGroupContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupIndicatorProps = $props();

  let context = useRadioGroupContext();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
