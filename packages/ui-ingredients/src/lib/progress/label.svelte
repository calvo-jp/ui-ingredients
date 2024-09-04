<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './context.svelte.js';

  let {asChild, children, ...props}: ProgressLabelProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
