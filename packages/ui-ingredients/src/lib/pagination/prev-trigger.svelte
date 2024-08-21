<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PaginationPrevTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePaginationContext} from './context.svelte.js';

  let {children, ...props}: PaginationPrevTriggerProps = $props();

  let context = usePaginationContext();

  let attrs = $derived(mergeProps(props, context.getPrevTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
