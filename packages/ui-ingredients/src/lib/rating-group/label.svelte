<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface RatingGroupLabelProps extends Assign<SvelteHTMLElements['label'], {}> {}
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
