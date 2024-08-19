<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface StepsIndicatorProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext, useStepsItemContext} from './context.svelte.js';

  let {children, ...props}: StepsIndicatorProps = $props();

  let context = useStepsContext();
  let itemContext = useStepsItemContext();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps(itemContext)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
