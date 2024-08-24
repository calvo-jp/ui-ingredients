<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsListProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext} from './context.svelte.js';

  let {children, ...props}: StepsListProps = $props();

  let context = stepsContext.get();

  let attrs = $derived(mergeProps(props, context.getListProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
