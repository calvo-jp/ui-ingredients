<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/combobox';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ComboboxItemGroupProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<ItemGroupProps>> {}
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {setComboboxItemGroupContext, useComboboxContext} from './context.svelte.js';

  let {id = uuid(), children, ...props}: ComboboxItemGroupProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.getItemGroupProps({id})));

  setComboboxItemGroupContext({id});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
