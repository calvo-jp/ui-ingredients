<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePopoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverTriggerProps = $props();

  let context = usePopoverContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
