<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SliderValueTextProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {sliderContext} from './context.svelte.js';

  let {children, ...props}: SliderValueTextProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getValueTextProps()));
</script>

<span {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {slider.value.join(', ')}
  {/if}
</span>
