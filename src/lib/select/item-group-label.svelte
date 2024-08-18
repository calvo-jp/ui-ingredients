<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SelectItemGroupLabelProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext, useSelectItemGroupContext} from './context.svelte.js';

  let {children, ...props}: SelectItemGroupLabelProps = $props();

  let context = useSelectContext();
  let itemGroupContext = useSelectItemGroupContext();

  let attrs = $derived(
    mergeProps(props, context.getItemGroupLabelProps({htmlFor: itemGroupContext.id})),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
