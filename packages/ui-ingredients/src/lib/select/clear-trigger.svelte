<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectClearTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectClearTriggerProps = $props();

  let context = selectContext.get();

  let attrs = $derived(mergeProps(props, context.getClearTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
