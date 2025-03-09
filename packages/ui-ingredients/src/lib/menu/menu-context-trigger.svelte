<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface MenuContextTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuContextTriggerProps = $props();

  let menu = getMenuContext();
  let mergedProps = $derived(
    mergeProps(menu?.getContextTriggerProps() ?? {}, props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
