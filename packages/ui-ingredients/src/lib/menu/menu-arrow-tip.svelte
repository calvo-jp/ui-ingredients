<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface MenuArrowTipProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuArrowTipProps = $props();

  let menu = getMenuContext();
  let mergedProps = $derived(mergeProps(menu?.getArrowTipProps() ?? {}, props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
