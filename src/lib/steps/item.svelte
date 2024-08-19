<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/steps';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface StepsItemProps extends Assign<SvelteHTMLElements['div'], ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setStepsItemContext, useStepsContext} from './context.svelte.js';

  let {index, children, ...props}: StepsItemProps = $props();

  let context = useStepsContext();

  let attrs = $derived(mergeProps(props, context.getItemProps({index})));

  setStepsItemContext({index});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
