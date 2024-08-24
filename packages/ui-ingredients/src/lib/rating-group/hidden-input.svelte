<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RatingGroupHiddenInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {ratingGroupContext} from './context.svelte.js';

  let {...props}: RatingGroupHiddenInputProps = $props();

  let context = ratingGroupContext.get();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps()));
</script>

<input {...attrs} />
