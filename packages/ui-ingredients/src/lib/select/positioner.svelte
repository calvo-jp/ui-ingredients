<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext} from './context.svelte.js';

  let {children, ...props}: SelectPositionerProps = $props();

  let context = useSelectContext();

  let attrs = $derived(mergeProps(props, context.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
