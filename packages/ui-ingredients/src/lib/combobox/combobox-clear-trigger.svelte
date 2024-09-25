<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxClearTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getComboboxContext} from './combobox-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ComboboxClearTriggerProps = $props();

  let combobox = getComboboxContext();

  let mergedProps = $derived(
    mergeProps(props, combobox.getClearTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
