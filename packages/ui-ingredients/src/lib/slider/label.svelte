<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SliderLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {asChild, children, ...props}: SliderLabelProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
