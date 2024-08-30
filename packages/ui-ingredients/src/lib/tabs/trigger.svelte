<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {TriggerProps} from '@zag-js/tabs';

  export interface TabsTriggerProps
    extends Assign<HTMLProps<'button'>, TriggerProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {tabsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TabsTriggerProps = $props();

  let tabs = tabsContext.get();

  let [triggerProps, otherProps] = $derived(
    createSplitProps<TriggerProps>(['value', 'disabled'])(props),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, tabs.getTriggerProps(triggerProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
