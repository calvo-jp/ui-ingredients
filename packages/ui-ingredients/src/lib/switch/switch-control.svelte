<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SwitchControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getSwitchContext} from './switch-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SwitchControlProps = $props();

  let switch_ = getSwitchContext();
  let mergedProps = $derived(mergeProps(switch_.getControlProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
