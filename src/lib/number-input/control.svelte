<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface NumberInputControlTriggerProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputControlTriggerProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.api.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
