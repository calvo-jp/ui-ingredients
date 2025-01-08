<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface MenuItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createUniqueId} from '../create-unique-id.js';
  import {
    getMenuContext,
    setMenuItemGroupPropsContext,
  } from './menu-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuItemGroupProps = $props();

  let menu = getMenuContext();
  let uid = createUniqueId();
  let itemGroupProps = $derived({id: id ?? uid});
  let mergedProps = $derived(
    mergeProps(menu!.getItemGroupProps(itemGroupProps), props),
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
