<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SliderValueTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {children, ...props}: SliderValueTextProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getValueTextProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {slider.value.join(', ')}
  {/if}
</div>
