<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ComboboxItemGroupLabelProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext, useComboboxItemGroupContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemGroupLabelProps = $props();

  let context = useComboboxContext();
  let itemGroupContext = useComboboxItemGroupContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemGroupLabelProps({
        htmlFor: itemGroupContext.id,
      }),
    ),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
