<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AlertTitleProps
    extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getAlertContext} from './alert-context.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertTitleProps = $props();

  let alert = getAlertContext();
  let mergedProps = $derived(mergeProps(alert.getTitleProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </h2>
{/if}
