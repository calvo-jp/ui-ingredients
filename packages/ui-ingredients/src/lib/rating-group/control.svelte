<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface RatingGroupControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {ratingGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: RatingGroupControlProps = $props();

  let ratingGroup = ratingGroupContext.get();

  let attrs = $derived(mergeProps(props, ratingGroup.getControlProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
