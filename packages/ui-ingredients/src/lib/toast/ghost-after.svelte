<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ToastGhostAfterProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastGhostAfterProps = $props();

  let context = getToastContext();

  let mergedProps = $derived(mergeProps(props, context.getGhostAfterProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
