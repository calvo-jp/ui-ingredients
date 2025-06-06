<script lang="ts" module>
  import type {StageTriggerProps} from '@zag-js/floating-panel';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface FloatingPanelStageTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      StageTriggerProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelStageTriggerProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let [stageTriggerProps, localProps] = $derived(
    createSplitProps<StageTriggerProps>(['stage'])(props),
  );

  let mergedProps = $derived(
    mergeProps(
      floatingPanel.getStageTriggerProps(stageTriggerProps),
      localProps,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
