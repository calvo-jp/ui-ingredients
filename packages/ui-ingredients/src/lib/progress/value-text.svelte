<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressValueTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: ProgressValueTextProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getValueTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {progress.percentAsString}
    {/if}
  </span>
{/if}
