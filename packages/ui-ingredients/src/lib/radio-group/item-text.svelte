<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface RadioGroupItemTextProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRadioGroupContext, useRadioGroupItemContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupItemTextProps = $props();

  let context = useRadioGroupContext();
  let itemContext = useRadioGroupItemContext();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemContext)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
