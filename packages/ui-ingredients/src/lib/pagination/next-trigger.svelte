<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PaginationNextTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePaginationContext} from './context.svelte.js';

  let {children, ...props}: PaginationNextTriggerProps = $props();

  let context = usePaginationContext();

  let attrs = $derived(mergeProps(props, context.getNextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
