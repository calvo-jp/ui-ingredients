<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ProgressValueTextProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressValueTextProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.api.getValueTextProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {context.api.percentAsString}
  {/if}
</div>
