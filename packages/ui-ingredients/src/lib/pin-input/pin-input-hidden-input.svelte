<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PinInputHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPinInputContext} from './pin-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: PinInputHiddenInputProps = $props();

  let pinInput = getPinInputContext();

  let mergedProps = $derived(mergeProps(props, pinInput.getHiddenInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
