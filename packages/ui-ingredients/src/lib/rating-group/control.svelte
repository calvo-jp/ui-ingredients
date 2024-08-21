<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface RatingGroupControlProps
    extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRatingGroupContext} from './context.svelte.js';

  let {children, ...props}: RatingGroupControlProps = $props();

  let context = useRatingGroupContext();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
