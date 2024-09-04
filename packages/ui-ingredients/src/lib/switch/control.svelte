<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SwitchControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSwitchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchControlProps = $props();

  let switch$ = getSwitchContext();

  let mergedProps = $derived(mergeProps(props, switch$.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
