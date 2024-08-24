<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressValueTextProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressValueTextProps = $props();

  let context = progressContext.get();

  let attrs = $derived(mergeProps(props, context.getValueTextProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {context.percentAsString}
  {/if}
</div>
