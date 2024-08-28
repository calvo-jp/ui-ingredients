<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {MarkerProps} from '@zag-js/slider';
  import type {Snippet} from 'svelte';

  export interface SliderMarkerProps extends Assign<HtmlProps<'div'>, MarkerProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {value, asChild, children, ...props}: SliderMarkerProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      slider.getMarkerProps({
        value,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
