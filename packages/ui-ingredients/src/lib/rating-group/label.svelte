<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface RatingGroupLabelProps extends HtmlProps<'label'> {
    asChild?: AsChild<HtmlProps<'label'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {ratingGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: RatingGroupLabelProps = $props();

  let ratingGroup = ratingGroupContext.get();

  let attrs = $derived(mergeProps(props, ratingGroup.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
