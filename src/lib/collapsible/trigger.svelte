<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface CollapsibleTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCollapsibleContext} from './context.svelte.js';

  let {children, ...props}: CollapsibleTriggerProps = $props();
  let context = useCollapsibleContext();
  let mergedProps = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...mergedProps}>
  {@render children?.()}
</button>
