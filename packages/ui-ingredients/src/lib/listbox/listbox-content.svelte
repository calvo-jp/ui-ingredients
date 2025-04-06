<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ListboxContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getListboxContext} from './listbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ListboxContentProps = $props();

  let listbox = getListboxContext();
  let mergedProps = $derived(mergeProps(listbox.getContentProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
