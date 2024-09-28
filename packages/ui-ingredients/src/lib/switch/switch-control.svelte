<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SwitchControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSwitchContext} from './switch-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SwitchControlProps = $props();

  let switch_ = getSwitchContext();

  let mergedProps = $derived(mergeProps(props, switch_.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
