<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface RatingGroupControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {ratingGroupContext} from './context.svelte.js';

  let {children, ...props}: RatingGroupControlProps = $props();

  let radioGroup = ratingGroupContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
