<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {ThumbProps} from '@zag-js/slider';
  import type {Snippet} from 'svelte';

  export interface SliderThumbProps extends Assign<HtmlProps<'div'>, ThumbProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext, sliderThumbPropsContext} from './context.svelte.js';

  let {name, index, asChild, children, ...props}: SliderThumbProps = $props();

  let slider = sliderContext.get();
  let thumbProps = $derived({
    name,
    index,
  });

  let attrs = $derived(mergeProps(props, slider.getThumbProps(thumbProps)));

  sliderThumbPropsContext.set(() => thumbProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
