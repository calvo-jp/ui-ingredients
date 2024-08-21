<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface ProgressValueTextProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressValueTextProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.getValueTextProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {context.percentAsString}
  {/if}
</div>
