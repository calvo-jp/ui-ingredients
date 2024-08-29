<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SliderValueTextProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {asChild, children, ...props}: SliderValueTextProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getValueTextProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {#if children}
      {@render children()}
    {:else}
      {slider.value.join(', ')}
    {/if}
  </span>
{/if}
