<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SwitchThumbProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSwitchContext} from './switch-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SwitchThumbProps = $props();

  let switch_ = getSwitchContext();

  let mergedProps = $derived(mergeProps(switch_.getThumbProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
