<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectHiddenSelectProps
    extends HtmlIngredientProps<'select'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSelectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectHiddenSelectProps = $props();

  let select = getSelectContext();

  let mergedProps = $derived(mergeProps(props, select.getHiddenSelectProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select {...mergedProps}>
    {@render children?.()}
  </select>
{/if}
