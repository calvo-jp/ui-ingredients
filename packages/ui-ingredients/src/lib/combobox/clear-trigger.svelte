<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxClearTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getComboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxClearTriggerProps = $props();

  let combobox = getComboboxContext();

  let mergedProps = $derived(
    mergeProps(props, combobox.getClearTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
