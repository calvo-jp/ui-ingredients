<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface MenuItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getMenuContext,
    setMenuItemGroupPropsContext,
  } from './menu-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: MenuItemGroupProps = $props();

  let uid = $props.id();

  let menu = getMenuContext();
  let itemGroupProps = $derived({id: id ?? uid});
  let mergedProps = $derived(
    mergeProps(menu!.getItemGroupProps(itemGroupProps), rest),
  );

  setMenuItemGroupPropsContext(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
