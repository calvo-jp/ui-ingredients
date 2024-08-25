<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PaginationPrevTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {paginationContext} from './context.svelte.js';

  let {children, ...props}: PaginationPrevTriggerProps = $props();

  let pagination = paginationContext.get();

  let attrs = $derived(mergeProps(props, pagination.getPrevTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
