<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SliderTrackProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {asChild, children, ...props}: SliderTrackProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getTrackProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
