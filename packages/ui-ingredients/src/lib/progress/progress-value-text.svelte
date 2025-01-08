<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ProgressValueTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressValueTextProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(progress.getValueTextProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {progress.percentAsString}
    {/if}
  </span>
{/if}
