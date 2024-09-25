<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputControlTriggerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getNumberInputContext} from './number-input-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: NumberInputControlTriggerProps = $props();

  let numberInput = getNumberInputContext();

  let mergedProps = $derived(mergeProps(props, numberInput.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
