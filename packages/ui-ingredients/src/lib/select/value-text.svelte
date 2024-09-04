<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectValueTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSelectContext} from './context.svelte.js';

  let {asChild, children, placeholder, ...props}: SelectValueTextProps =
    $props();

  let select = getSelectContext();

  let mergedProps = $derived(mergeProps(props, select.getValueTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else if select.value.length}
      {select.valueAsString}
    {:else}
      {placeholder}
    {/if}
  </span>
{/if}
