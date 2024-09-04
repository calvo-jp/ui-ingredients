<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SwitchLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSwitchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchLabelProps = $props();

  let switch$ = getSwitchContext();

  let mergedProps = $derived(mergeProps(props, switch$.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
