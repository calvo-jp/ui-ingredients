<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/select';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SelectItemProps extends Assign<SvelteHTMLElements['div'], ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setSelectItemContext, useSelectContext} from './context.svelte.js';

  let {item, persistFocus, children, ...props}: SelectItemProps = $props();

  let context = useSelectContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        item,
        persistFocus,
      }),
    ),
  );

  setSelectItemContext({
    item,
    persistFocus,
  });
</script>

<div {...attrs}>
  {@render children?.()}
</div>
