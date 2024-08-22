<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {EllipsisProps} from '@zag-js/pagination';

  export interface PaginationEllipsisProps
    extends Assign<HtmlIngredientProps<'span'>, EllipsisProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePaginationContext} from './context.svelte.js';

  let {index, children, ...props}: PaginationEllipsisProps = $props();

  let context = usePaginationContext();

  let attrs = $derived(mergeProps(props, context.getEllipsisProps({index})));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
