<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface NumberInputDecrementTriggerProps
    extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputDecrementTriggerProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.api.getDecrementTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
