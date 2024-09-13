<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SliderValueTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSliderContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: SliderValueTextProps = $props();

  let slider = getSliderContext();

  let mergedProps = $derived(mergeProps(props, slider.getValueTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {slider.value.join(', ')}
    {/if}
  </span>
{/if}
