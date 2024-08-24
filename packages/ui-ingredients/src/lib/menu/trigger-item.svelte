<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuTriggerItemIndicatorProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext} from './context.svelte.js';

  let {children, ...props}: MenuTriggerItemIndicatorProps = $props();

  let context = menuContext.get();

  let attrs = $derived(mergeProps(props, context.getTriggerItemProps(context)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
