<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectIndicatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext} from './context.svelte.js';

  let {children, ...props}: SelectIndicatorProps = $props();

  let context = useSelectContext();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
