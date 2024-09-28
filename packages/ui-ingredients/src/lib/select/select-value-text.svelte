<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectValueTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSelectContext} from './select-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    placeholder,
    ...props
  }: SelectValueTextProps = $props();

  let select = getSelectContext();

  let mergedProps = $derived(mergeProps(props, select.getValueTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else if select.value.length}
      {select.valueAsString}
    {:else}
      {placeholder}
    {/if}
  </span>
{/if}
