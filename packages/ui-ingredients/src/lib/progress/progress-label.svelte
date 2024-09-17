<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './progress-context.svelte.js';

  let {this: e, asChild, children, ...props}: ProgressLabelProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
