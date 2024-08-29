<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SliderMarkerGroupProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {asChild, children, ...props}: SliderMarkerGroupProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getMarkerGroupProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
