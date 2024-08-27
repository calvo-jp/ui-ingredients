<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ActionTriggerProps} from '@zag-js/timer';
  import type {Snippet} from 'svelte';

  export interface TimerActionTriggerProps extends Assign<HtmlProps<'button'>, ActionTriggerProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timerContext} from './context.svelte.js';

  let {action, asChild, children, ...props}: TimerActionTriggerProps = $props();

  let timer = timerContext.get();

  let attrs = $derived(mergeProps(props, timer.getActionTriggerProps({action})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
