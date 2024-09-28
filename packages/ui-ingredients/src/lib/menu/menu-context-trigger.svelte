<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuContextTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuContextTriggerProps = $props();

  let menu = getMenuContext();

  let mergedProps = $derived(mergeProps(props, menu.getContextTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
