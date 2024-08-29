<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SliderControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {asChild, children, ...props}: SliderControlProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getControlProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
