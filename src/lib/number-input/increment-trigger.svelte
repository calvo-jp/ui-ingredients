<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface NumberInputIncrementTriggerProps
    extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputIncrementTriggerProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.api.getIncrementTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
