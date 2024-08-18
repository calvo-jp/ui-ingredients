<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SelectItemTextProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext, useSelectItemContext} from './context.svelte.js';

  let {children, ...props}: SelectItemTextProps = $props();

  let context = useSelectContext();
  let itemContext = useSelectItemContext();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemContext)));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.collection.stringifyItem(itemContext.item)}
  {/if}
</span>
