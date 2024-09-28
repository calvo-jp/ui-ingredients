<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PinInputLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPinInputContext} from './pin-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PinInputLabelProps = $props();

  let pinInput = getPinInputContext();

  let mergedProps = $derived(mergeProps(props, pinInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
