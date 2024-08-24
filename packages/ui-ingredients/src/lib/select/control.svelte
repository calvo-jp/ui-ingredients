<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectControlProps = $props();

  let context = selectContext.get();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
