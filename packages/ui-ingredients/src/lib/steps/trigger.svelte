<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface StepsTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext, useStepsItemContext} from './context.svelte.js';

  let {children, ...props}: StepsTriggerProps = $props();

  let context = useStepsContext();
  let itemContext = useStepsItemContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps(itemContext)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
