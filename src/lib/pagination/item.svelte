<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/pagination';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface PaginationItemProps
    extends Assign<SvelteHTMLElements['button'], Omit<ItemProps, 'type'>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePaginationContext} from './context.svelte.js';

  let {value, children, ...props}: PaginationItemProps = $props();

  let context = usePaginationContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        type: 'page',
        value,
      }),
    ),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
