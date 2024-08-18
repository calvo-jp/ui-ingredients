<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SelectValueTextProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext} from './context.svelte.js';

  let {children, placeholder, ...props}: SelectValueTextProps = $props();

  let context = useSelectContext();

  let attrs = $derived(mergeProps(props, context.getValueTextProps()));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else if context.value.length}
    {context.valueAsString}
  {:else}
    {placeholder}
  {/if}
</span>
