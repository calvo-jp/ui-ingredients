<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface CollapsibleTriggerProps
    extends HtmlIngredientsProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCollapsibleContext} from './context.svelte.js';

  let {children, ...props}: CollapsibleTriggerProps = $props();
  let context = useCollapsibleContext();
  let mergedProps = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...mergedProps}>
  {@render children?.()}
</button>
