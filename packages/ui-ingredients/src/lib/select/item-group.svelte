<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/select';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SelectItemGroupProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<ItemGroupProps>> {}
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {setSelectItemGroupContext, useSelectContext} from './context.svelte.js';

  let {id = uuid(), children, ...props}: SelectItemGroupProps = $props();

  let context = useSelectContext();

  let attrs = $derived(mergeProps(props, context.getItemGroupProps({id})));

  setSelectItemGroupContext({id});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
