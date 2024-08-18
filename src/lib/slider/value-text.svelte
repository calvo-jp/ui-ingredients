<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SliderValueTextProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {children, ...props}: SliderValueTextProps = $props();

  let context = useSliderContext();

  let attrs = $derived(mergeProps(props, context.getValueTextProps()));
</script>

<span {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {context.value.join(', ')}
  {/if}
</span>
