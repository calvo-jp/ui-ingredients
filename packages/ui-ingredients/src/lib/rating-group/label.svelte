<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface RatingGroupLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {ratingGroupContext} from './context.svelte.js';

  let {children, ...props}: RatingGroupLabelProps = $props();

  let radioGroup = ratingGroupContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
