<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuContextTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext} from './context.svelte.js';

  let {children, ...props}: MenuContextTriggerProps = $props();

  let context = menuContext.get();

  let attrs = $derived(mergeProps(props, context.getContextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
