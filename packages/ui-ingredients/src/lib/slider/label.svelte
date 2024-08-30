<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SliderLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {sliderContext} from './context.svelte.js';

  let {asChild, children, ...props}: SliderLabelProps = $props();

  let slider = sliderContext.get();

  let mergedProps = $derived(mergeProps(props, slider.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
