<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SwitchThumbProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSwitchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchThumbProps = $props();

  let switch$ = getSwitchContext();

  let mergedProps = $derived(mergeProps(props, switch$.getThumbProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
