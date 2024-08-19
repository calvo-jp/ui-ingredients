<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface RadioGroupItemControlProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRadioGroupContext, useRadioGroupItemContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupItemControlProps = $props();

  let context = useRadioGroupContext();
  let itemContext = useRadioGroupItemContext();

  let attrs = $derived(mergeProps(props, context.getItemControlProps(itemContext)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
