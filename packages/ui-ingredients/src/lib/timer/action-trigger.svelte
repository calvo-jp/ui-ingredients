<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ActionTriggerProps} from '@zag-js/timer';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TimerActionTriggerProps
    extends Assign<SvelteHTMLElements['button'], ActionTriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTimerContext} from './context.svelte.js';

  let {action, children, ...props}: TimerActionTriggerProps = $props();

  let context = useTimerContext();

  let attrs = $derived(mergeProps(props, context.getActionTriggerProps({action})));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
