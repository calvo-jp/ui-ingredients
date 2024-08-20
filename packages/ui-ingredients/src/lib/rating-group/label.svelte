<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface RatingGroupLabelProps extends SvelteHtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRatingGroupContext} from './context.svelte.js';

  let {children, ...props}: RatingGroupLabelProps = $props();

  let context = useRatingGroupContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
