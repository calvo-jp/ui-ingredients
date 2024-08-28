<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface RatingGroupLabelProps extends HtmlProps<'label'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'label'>, 'children'>]>;
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
