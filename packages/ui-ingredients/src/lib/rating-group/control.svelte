<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RatingGroupControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {ratingGroupContext} from './context.svelte.js';

  let {children, ...props}: RatingGroupControlProps = $props();

  let context = ratingGroupContext.get();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
