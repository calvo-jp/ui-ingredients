<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ToggleIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getToggleContext} from './toggle-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToggleIndicatorProps = $props();

  let toggle = getToggleContext();
  let mergedProps = $derived(mergeProps(toggle.getIndicatorProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
