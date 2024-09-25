<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SliderHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSliderContext,
    getSliderThumbPropsContext,
  } from './slider-context.svelte.js';

  let {this: e, asChild, ...props}: SliderHiddenInputProps = $props();

  let slider = getSliderContext();
  let thumbProps = getSliderThumbPropsContext();

  let mergedProps = $derived(
    mergeProps(props, slider.getHiddenInputProps(thumbProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
