<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface RatingGroupHiddenInputProps
    extends SvelteHtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRatingGroupContext} from './context.svelte.js';

  let {...props}: RatingGroupHiddenInputProps = $props();

  let context = useRatingGroupContext();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps()));
</script>

<input {...attrs} />
