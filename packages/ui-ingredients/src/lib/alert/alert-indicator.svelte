<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AlertIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getAlertContext} from './alert-context.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertIndicatorProps = $props();

  let alert = getAlertContext();
  let mergedProps = $derived(mergeProps(alert.getIndicatorProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
