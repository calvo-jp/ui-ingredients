<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ListboxValueTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getListboxContext} from './listbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ListboxValueTextProps = $props();

  let listbox = getListboxContext();
  let mergedProps = $derived(mergeProps(listbox.getValueTextProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {listbox.valueAsString}
    {/if}
  </span>
{/if}
