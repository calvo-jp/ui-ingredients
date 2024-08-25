<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface RatingGroupHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {ratingGroupContext} from './context.svelte.js';

  let {...props}: RatingGroupHiddenInputProps = $props();

  let radioGroup = ratingGroupContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getHiddenInputProps()));
</script>

<input {...attrs} />
