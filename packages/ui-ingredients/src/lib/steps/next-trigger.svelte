<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface StepsNextTriggerProps extends SvelteHtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext} from './context.svelte.js';

  let {children, ...props}: StepsNextTriggerProps = $props();

  let context = useStepsContext();

  let attrs = $derived(mergeProps(props, context.getNextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
